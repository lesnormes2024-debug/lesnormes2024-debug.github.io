// État utilisateur persistant (localStorage) — version 100 % gratuite.
// Progression locale uniquement : rien ne quitte l'appareil.
// Comptes locaux : plusieurs personnes sur le même appareil, chacune sa progression.
const KEY = "audit_normes_state_v1";
const PROFILES_KEY = "audit_normes_profiles";
const ACTIVE_KEY = "audit_normes_active_profile";

const defaults = () => ({
  theme: null,             // null = suit le système
  admin: false,            // mode administrateur (MVP local)
  favorites: [],           // [{type:'std'|'term', ref}]
  review: [],              // numéros de normes "à revoir"
  visited: {},             // {num: ts}
  checklist: {},           // {key: {answers:{}, notes:{}, updated}}
  quiz: [],                // [{ts, cat, score, total, missed:[nums]}]
  badges: [],              // ids de badges
  daily: {},               // {date:'YYYY-MM-DD', num}
  contentStatus: {},       // overrides admin {stdNum: 'DRAFT'|'REVIEW'|'APPROVED'|'PUBLISHED'}
});

export let state = load();

// ——— Comptes locaux (sur l'appareil uniquement) ———
// Chaque profil possède son propre espace de stockage local. Le mot de passe
// sert uniquement à empêcher un changement de profil accidentel : il est
// enregistré sur l'appareil, jamais transmis sur Internet.
export function listProfiles() {
  try { return JSON.parse(localStorage.getItem(PROFILES_KEY) || "[]"); } catch { return []; }
}
export function activeProfile() {
  try { return JSON.parse(localStorage.getItem(ACTIVE_KEY) || "null"); } catch { return null; }
}
function stateKey() {
  const p = activeProfile();
  return p ? `${KEY}__${p.id}` : KEY;
}
function hashPass(pass) {
  // Hachage simple (pas de sécurité cryptographique — usage local uniquement).
  let h = 5381;
  const s = "an::" + pass;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return String(h);
}
export function createProfile(name, pass) {
  name = String(name || "").trim();
  if (name.length < 2) throw new Error("Le nom doit contenir au moins 2 caractères.");
  if (!pass || String(pass).length < 4) throw new Error("Le mot de passe doit contenir au moins 4 caractères.");
  const profiles = listProfiles();
  if (profiles.some((p) => p.name.toLowerCase() === name.toLowerCase())) throw new Error("Ce nom de profil existe déjà sur cet appareil.");
  const id = "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  profiles.push({ id, name, hash: hashPass(pass), created: Date.now() });
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  localStorage.setItem(ACTIVE_KEY, JSON.stringify({ id, name }));
  save(); // sauvegarde de l'état courant (invité) avant de basculer
  state = defaults();
  save();
  return { id, name };
}
export function loginProfile(name, pass) {
  const p = listProfiles().find((x) => x.name.toLowerCase() === String(name || "").trim().toLowerCase());
  if (!p) throw new Error("Aucun profil à ce nom sur cet appareil.");
  if (p.hash !== hashPass(pass)) throw new Error("Mot de passe incorrect.");
  save(); // sauvegarde de l'état courant avant de basculer
  localStorage.setItem(ACTIVE_KEY, JSON.stringify({ id: p.id, name: p.name }));
  state = load();
  save();
  return p;
}
export function logoutProfile() {
  save();
  localStorage.removeItem(ACTIVE_KEY);
  state = load();
  save();
}
export function deleteProfile(id, pass) {
  const profiles = listProfiles();
  const p = profiles.find((x) => x.id === id);
  if (!p) throw new Error("Profil introuvable.");
  if (p.hash !== hashPass(pass)) throw new Error("Mot de passe incorrect.");
  const next = profiles.filter((x) => x.id !== id);
  localStorage.setItem(PROFILES_KEY, JSON.stringify(next));
  localStorage.removeItem(`${KEY}__${id}`); // suppression des données locales du profil
  if (activeProfile()?.id === id) logoutProfile();
}

function load() {
  try { return { ...defaults(), ...JSON.parse(localStorage.getItem(stateKey()) || "{}") }; }
  catch { return defaults(); }
}

export function save() { localStorage.setItem(stateKey(), JSON.stringify(state)); }

export function mutate(fn) { fn(state); save(); }

export function resetAll() { state = defaults(); save(); }

export function exportData() { return JSON.stringify(state, null, 2); }

// ——— helpers ———
export const isFav = (t, ref) => state.favorites.some((f) => f.type === t && f.ref === ref);
export const toggleFav = (t, ref) => mutate((s) => {
  const i = s.favorites.findIndex((f) => f.type === t && f.ref === ref);
  i >= 0 ? s.favorites.splice(i, 1) : s.favorites.push({ type: t, ref, ts: Date.now() });
});
export const toggleReview = (num) => mutate((s) => {
  const i = s.review.indexOf(num);
  i >= 0 ? s.review.splice(i, 1) : s.review.push(num);
});
export const markVisited = (num) => mutate((s) => { s.visited[num] = Date.now(); });

export function lastVisited() {
  const e = Object.entries(state.visited).sort((a, b) => b[1] - a[1]);
  return e[0] ? e[0][0] : null;
}

// Norme du jour : rotation déterministe sur les principes (stable sur la journée)
export function dailyStd(principles) {
  const today = new Date().toISOString().slice(0, 10);
  if (state.daily.date === today && state.daily.num) return state.daily.num;
  const day = Math.floor(Date.now() / 86400000);
  const num = principles[day % principles.length];
  mutate((s) => { s.daily = { date: today, num }; });
  return num;
}

// Check-lists
export const clKey = (scope, ref) => scope + ":" + ref;
export function getCl(key) { return state.checklist[key] || { answers: {}, notes: {} }; }
export function setAnswer(key, i, v) { mutate((s) => {
  const c = (s.checklist[key] = s.checklist[key] || { answers: {}, notes: {} });
  c.answers[i] = v; c.updated = Date.now();
}); }
export function setNote(key, i, txt) { mutate((s) => {
  const c = (s.checklist[key] = s.checklist[key] || { answers: {}, notes: {} });
  c.notes[i] = txt; c.updated = Date.now();
}); }
export function clStats(items, key) {
  const c = getCl(key);
  const st = { total: items.length, oui: 0, partiel: 0, non: 0, na: 0, done: 0 };
  items.forEach((_, i) => {
    const a = c.answers[i];
    if (!a) return;
    st.done++;
    if (a === "oui") st.oui++; else if (a === "partiel") st.partiel++;
    else if (a === "non") st.non++; else st.na++;
  });
  const scorable = st.total - st.na;
  st.score = scorable ? Math.round(((st.oui + st.partiel * 0.5) / scorable) * 100) : 0;
  return st;
}

// ——— Version 100 % gratuite ———
// Tout est débloqué pour tous : check-lists, quiz, cas pratiques, assistant,
// exports PDF/Excel illimités. Financement : publicité + dons (page Soutenir).
// Les fonctions ci-dessous sont conservées pour compatibilité avec l'interface.
export const isPremium = () => false;
export const hasChecklistQuiz = () => true;
export function grantPremium() { /* plus d'achat : tout est gratuit */ }
export function grantPack() { /* plus d'achat : tout est gratuit */ }
export function useChecklistSlot() { return true; }
export function useQuizSlot() { return true; }
export function useExportCredit() { return true; }
export function addExportCredits() { /* plus de crédits : illimité */ }

// Quiz
export function saveQuizResult(cat, score, total, missed) { mutate((s) => {
  s.quiz.push({ ts: Date.now(), cat, score, total, missed });
  const n = s.quiz.length;
  if (n >= 1 && !s.badges.includes("quiz1")) s.badges.push("quiz1");
  if (s.quiz.filter((q) => q.score / q.total >= 0.8).length >= 10 && !s.badges.includes("quiz10")) s.badges.push("quiz10");
}); }

// Progression par domaine (normes visitées + quiz réussis + checklist)
export function domainProgress(dn, stds, principlesOfDomain) {
  const list = stds.filter((s) => s.dN === dn);
  const visited = list.filter((s) => state.visited[s.num]).length;
  return { visited, total: list.length, pct: list.length ? Math.round((visited / list.length) * 100) : 0 };
}

// Badges
export const badgeList = [
  { id: "quiz1", ico: "🧠", label: "Premier quiz" },
  { id: "quiz10", ico: "🏅", label: "10 quiz réussis (≥ 80 %)" },
  { id: "explore5", ico: "🧭", label: "5 normes étudiées" },
  { id: "days3", ico: "📅", label: "3 jours d'apprentissage" },
  { id: "fav1", ico: "⭐", label: "Premier favori" },
];
export function computeBadges() {
  const s = state;
  const visitedCount = Object.keys(s.visited).length;
  const days = new Set(Object.values(s.visited).map((ts) => new Date(ts).toDateString())).size;
  mutate((st) => {
    if (visitedCount >= 5 && !st.badges.includes("explore5")) st.badges.push("explore5");
    if (days >= 3 && !st.badges.includes("days3")) st.badges.push("days3");
    if (st.favorites.length >= 1 && !st.badges.includes("fav1")) st.badges.push("fav1");
  });
}
