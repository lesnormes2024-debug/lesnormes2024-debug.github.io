// État utilisateur persistant (localStorage) — prêt pour migration vers Supabase/auth multi-utilisateurs.
const KEY = "audit_normes_state_v1";

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
  premium: false,          // accès Premium (achat sécurisé)
  premiumSince: null,      // ts d'activation
  packs: {},               // achats à l'unité débloqués { checklistQuiz: true, ... }
  exportCredits: 0,        // crédits d'export PDF/Excel restants
  trial: { clKeys: [], qKeys: [] }, // essais gratuits utilisés (check-lists / quiz)
});

const FREE_TRIAL_LIMIT = 3;

export let state = load();

function load() {
  try { return { ...defaults(), ...JSON.parse(localStorage.getItem(KEY) || "{}") }; }
  catch { return defaults(); }
}

export function save() { localStorage.setItem(KEY, JSON.stringify(state)); }

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

// ——— Premium & achats ———
// Achat sécurisé uniquement : tunnel PayPal côté serveur (voir js/billing.js).
// Pas de codes d'activation. Pack à l'unité + crédits d'export.
export const isPremium = () => !!state.premium;
export function grantPremium() {
  mutate((s) => { s.premium = true; s.premiumSince = Date.now(); });
}

export const hasChecklistQuiz = () => isPremium() || !!state.packs.checklistQuiz;
export function grantPack(name) {
  mutate((s) => { s.packs = { ...s.packs, [name]: true }; });
}

// ——— Essais gratuits (check-lists / quiz) ———
export const TRIAL_LIMIT = FREE_TRIAL_LIMIT;
export const checklistTrialsLeft = () => Math.max(0, FREE_TRIAL_LIMIT - state.trial.clKeys.length);
export const quizTrialsLeft = () => Math.max(0, FREE_TRIAL_LIMIT - state.trial.qKeys.length);
export const canTryChecklist = (key) => hasChecklistQuiz() || state.trial.clKeys.includes(key) || state.trial.clKeys.length < FREE_TRIAL_LIMIT;
export const canTryQuiz = (cat) => hasChecklistQuiz() || state.trial.qKeys.includes(cat) || state.trial.qKeys.length < FREE_TRIAL_LIMIT;
// Retourne true si l'accès est accordé (et consomme l'essai si nécessaire).
export function useChecklistSlot(key) {
  if (canTryChecklist(key)) {
    if (!hasChecklistQuiz() && !state.trial.clKeys.includes(key)) mutate((s) => { s.trial.clKeys.push(key); });
    return true;
  }
  return false;
}
export function useQuizSlot(cat) {
  if (canTryQuiz(cat)) {
    if (!hasChecklistQuiz() && !state.trial.qKeys.includes(cat)) mutate((s) => { s.trial.qKeys.push(cat); });
    return true;
  }
  return false;
}

// ——— Crédits d'export PDF/Excel ———
// Premium : exports illimités inclus. Sinon : 1 achat = 1 export.
export function useExportCredit() {
  if (isPremium()) return true;
  if ((state.exportCredits || 0) > 0) { mutate((s) => { s.exportCredits--; }); return true; }
  return false;
}
export function addExportCredits(n = 1) { mutate((s) => { s.exportCredits = (s.exportCredits || 0) + n; }); }

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
