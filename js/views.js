// Vues de l'application Audit Normes (rendu + interactions par vue).
import {
  domains, fundamentals, principles, glossary, standards, stdByNum, domainByN,
  search, matchSituation, SOURCE_LABEL
} from "./data/index.js";
import * as S from "./store.js";
import * as B from "./billing.js";
import * as X from "./export.js";
import { isNative as isNativeApp } from "./ads.js";

export const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export const OB = { D: ["b-doit", "🔴 DOIT", "Exigence impérative"], S: ["b-devrait", "🟠 DEVRAIT", "Pratique privilégiée"], M: ["b-peut", "🔵 PEUT", "Pratique optionnelle"] };
export const obBadge = (o) => `<span class="badge ${OB[o][0]}" title="${OB[o][2]}">${OB[o][1]}</span>`;
export const legend = () => `<div class="legende"><span><span class="dot r"></span>DOIT — exigence impérative</span><span><span class="dot o"></span>DEVRAIT — pratique privilégiée</span><span><span class="dot b"></span>PEUT — pratique optionnelle</span></div>`;

const srcNote = (pages) => `<p class="small muted" style="margin-top:14px">📄 ${SOURCE_LABEL}${pages ? ` — pages ${pages}` : ""}</p>`;
const domainChip = (dn) => { const d = domainByN(dn); return `<span class="badge b-tag">Domaine ${d.code} — ${esc(d.title)}</span>`; };

// ————— helpers norme —————
const stdCard = (s) => `
<a class="card std-card stagger" href="#/norme/${s.num}">
  <span class="std-num">${s.num}</span>
  <span><b>${esc(s.title)}</b><br><span class="small muted">Norme ${s.num} — Principe ${s.p} · pages ${s.pages}</span></span>
  <span style="margin-left:auto">${S.state.review.includes(s.num) ? "🔖" : ""}${S.isFav("std", s.num) ? "⭐" : ""}</span>
</a>`;

// ————— ACCUEIL —————
export function home(el, go) {
  const last = S.lastVisited();
  const lastStd = last ? stdByNum(last) : null;
  const dailyN = S.dailyStd(principles.map((p) => p.n + ":" + p.domain));
  const [pn, pdn] = dailyN.split(":").map(Number); // format "n:domaine"
  const dailyP = principles.find((p) => p.domain === pdn && p.n === pn);
  const dailyStds = standards.filter((s) => s.dN === pdn && s.p === pn).slice(0, 2);
  const favStd = S.state.favorites.filter((f) => f.type === "std").slice(0, 3);
  const qz = S.state.quiz[S.state.quiz.length - 1];
  el.innerHTML = `
  <section class="hero">
    <h1>Les Normes internationales d'audit interne,<br>simples à comprendre et faciles à appliquer.</h1>
    <p>Apprenez, vérifiez vos connaissances et transformez les Normes en pratiques concrètes.</p>
    <div class="cta">
      <a class="btn primary" href="#/normes">📚 Explorer les Normes</a>
      <a class="btn outline" href="#/quiz">🧠 Commencer un quiz</a>
    </div>
  </section>

  <h2 class="sec">Que voulez-vous faire ?</h2>
  <div class="grid g4">
    <a class="card action-card stagger" href="#/normes"><span class="ico">📚</span><span><b>APPRENDRE</b><span>Explorer les domaines et les normes.</span></span></a>
    <a class="card action-card stagger" href="#/recherche"><span class="ico">🔎</span><span><b>RECHERCHER</b><span>Trouver une norme ou une notion.</span></span></a>
    <a class="card action-card stagger" href="#/checklists"><span class="ico">✅</span><span><b>VÉRIFIER</b><span>Utiliser les check-lists.</span></span></a>
    <a class="card action-card stagger" href="#/quiz"><span class="ico">🧠</span><span><b>TESTER</b><span>Faire un quiz.</span></span></a>
  </div>
  <a class="card pad prem-banner stagger" href="#/premium" style="margin-top:14px;display:block">
    <span class="prem-crown small">❤️</span>
    <span><b>Audit Normes est 100 % gratuite</b><span>Soutenez le projet avec un don volontaire — financez la pub et le développement.</span></span>
    <span class="btn primary small" style="margin-left:auto">Faire un don →</span>
  </a>
  <h2 class="sec">Continuer votre apprentissage</h2>
  <div class="grid g2">
    <div class="card pad stagger">
      <b>Dernière norme consultée</b>
      ${lastStd ? `<a class="std-card" style="padding:10px 0 0;display:flex;gap:12px;align-items:center" href="#/norme/${lastStd.num}"><span class="std-num">${lastStd.num}</span><b>${esc(lastStd.title)}</b></a>` : `<p class="muted small" style="margin-top:8px">Aucune norme consultée pour l'instant. <a href="#/normes" style="color:var(--teal)">Commencer l'exploration →</a></p>`}
    </div>
    <div class="card pad stagger">
      <b>Votre progression</b>
      <div class="small muted" style="margin:6px 0 8px">${Object.keys(S.state.visited).length} norme(s) consultée(s) · ${S.state.quiz.length} quiz · ${S.state.favorites.length} favori(s)</div>
      ${domains.slice(1).map((d) => { const p = S.domainProgress(d.n, standards); return `
        <div style="margin-bottom:8px"><div class="small" style="display:flex;justify-content:space-between"><span>Domaine ${d.code} — ${esc(d.title)}</span><span class="muted">${p.pct}%</span></div>
        <div class="bar"><i style="width:${p.pct}%"></i></div></div>`; }).join("")}
    </div>
    <div class="card pad stagger">
      <b>Quiz en cours / dernier résultat</b>
      ${qz ? `<p style="margin-top:8px">Dernier quiz : <b>${qz.score} / ${qz.total}</b> (${Math.round(qz.score / qz.total * 100)} %)</p>
              ${qz.missed.length ? `<p class="small muted">À revoir : ${qz.missed.map((m) => `<a href="#/norme/${m}" style="color:var(--teal)">Norme ${m}</a>`).join(", ")}</p>` : ""}
              <a class="btn soft small" style="margin-top:10px" href="#/quiz">Nouveau quiz →</a>`
             : `<p class="muted small" style="margin-top:8px">Aucun quiz réalisé. <a href="#/quiz" style="color:var(--teal)">Tester vos connaissances →</a></p>`}
    </div>
    <div class="card pad stagger">
      <b>Mes favoris</b>
      ${favStd.length ? favStd.map((f) => { const st = stdByNum(f.ref); return st ? `<a class="res-item" href="#/norme/${st.num}">⭐ Norme ${st.num} — ${esc(st.title)}</a>` : ""; }).join("") : `<p class="muted small" style="margin-top:8px">Aucun favori. Ajoutez ⭐ depuis une fiche norme.</p>`}
    </div>
  </div>

  <h2 class="sec">Norme du jour — « 5 minutes d'apprentissage »</h2>
  <div class="card pad stagger">
    <span class="badge b-teal">Principe ${pn} — ${esc(dailyP.t)}</span>
    <p style="margin-top:10px">${esc(dailyP.s)}</p>
    <div style="margin-top:12px;display:grid;gap:8px">
      ${dailyStds.map((s) => stdCard(s)).join("") || `<p class="small muted">Ce principe concerne les fondamentaux (voir Domaine I).</p>`}
    </div>
    <a class="btn soft small" style="margin-top:12px" href="#/norme/${dailyStds[0] ? dailyStds[0].num : ""}">${dailyStds[0] ? "Ouvrir la fiche" : "Voir le domaine"}</a>
  </div>
  ${srcNote("")}`;
  const b = el.querySelector(".hero .cta a:last-child");
  if (dailyStds[0]) el.querySelector("a.btn.soft.small").href = "#/norme/" + dailyStds[0].num;
}

// ————— EXPLORER —————
export function explore(el) {
  el.innerHTML = `
  <div class="crumbs"><a href="#/">Accueil</a> › <b>Explorer les Normes</b></div>
  <h1 style="font-size:24px">Explorer les Normes</h1>
  <p class="muted" style="margin:6px 0 16px">5 domaines · 15 principes · 51 normes — structure conforme au document source.</p>
  ${legend()}
  <div class="grid g3 wide">
    ${domains.map((d) => { const p = S.domainProgress(d.n, standards); return `
      <a class="card pad stagger" href="#/domaine/${d.n}" style="display:block">
        <span class="badge b-tag">Domaine ${d.code}</span>
        <h3 style="margin:10px 0 6px;font-size:17px">${esc(d.title)}</h3>
        <p class="small muted">${esc(d.summary.slice(0, 130))}…</p>
        <div class="bar" style="margin-top:12px"><i style="width:${p.pct}%"></i></div>
        <span class="small muted">${p.visited}/${p.total} normes étudiées · pages ${d.pages}</span>
      </a>`; }).join("")}
  </div>${srcNote("7-127")}`;
}

export function domain(el, dn) {
  const d = domainByN(dn);
  const prs = principles.filter((p) => p.domain === dn);
  let inner = "";
  if (dn === 1) {
    inner = `
    <div class="card pad" style="margin-bottom:14px">
      <span class="badge b-teal">🎯 Mission de l'audit interne</span>
      <p style="margin-top:12px">${esc(d.mission)}</p>
      <h4 class="sec" style="margin:14px 0 6px">Effets recherchés</h4>
      <ul style="padding-left:18px">${d.effects.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <h4 class="sec" style="margin:14px 0 6px">Conditions à réunir</h4>
      <ul style="padding-left:18px">${d.conditions.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    </div>
    <div class="card pad">
      <b>Les 3 niveaux d'obligation</b>
      ${legend()}
      <p class="small muted">${esc(fundamentals.intro)}</p>
      <div class="grid g2" style="margin-top:12px">
        ${[["Qui est concerné ?", fundamentals.applicability], ["Fonctions de taille restreinte", fundamentals.smallFunctions], ["Secteur public", fundamentals.publicSector], ["En cas de non-conformité", fundamentals.nonConformity]]
          .map(([t, x]) => `<div class="u-block"><h4>${t}</h4><p class="small">${esc(x)}</p></div>`).join("")}
      </div>
    </div>`;
  } else {
    inner = `
    <div class="card pad" style="margin-bottom:14px"><p>${esc(d.summary)}</p></div>
    <div class="grid">${prs.map((p) => `
      <a class="card std-card stagger" href="#/principe/${dn}/${p.n}">
        <span class="std-num p">${p.n}</span>
        <span><b>${esc(p.t)}</b><br><span class="small muted">${standards.filter((s) => s.dN === dn && s.p === p.n).length} norme(s)</span></span>
      </a>`).join("")}
    </div>`;
  }
  el.innerHTML = `
  <div class="crumbs"><a href="#/">Accueil</a> › <a href="#/normes">Explorer</a> › <b>Domaine ${d.code}</b></div>
  <h1 style="font-size:24px">Domaine ${d.code} — ${esc(d.title)}</h1>
  <p class="small muted" style="margin:4px 0 16px">Pages ${d.pages} du document source</p>
  ${inner}${srcNote(d.pages)}`;
}

export function principleView(el, dn, pn) {
  const d = domainByN(dn);
  const p = principles.find((x) => x.domain === dn && x.n === pn);
  const stds = standards.filter((s) => s.dN === dn && s.p === pn);
  el.innerHTML = `
  <div class="crumbs"><a href="#/">Accueil</a> › <a href="#/normes">Explorer</a> › <a href="#/domaine/${dn}">Domaine ${d.code}</a> › <b>Principe ${pn}</b></div>
  <span class="badge b-teal">Domaine ${d.code} — ${esc(d.title)}</span>
  <h1 style="font-size:24px;margin-top:10px">Principe ${pn} — ${esc(p.t)}</h1>
  <p class="muted" style="margin:8px 0 16px">${esc(p.s)}</p>
  <div class="grid">${stds.map(stdCard).join("")}</div>${srcNote(d.pages)}`;
}

// ————— FICHE NORME —————
const TABS = [["syn", "Vue synthétique"], ["req", "Exigences"], ["imp", "Mise en œuvre"], ["pre", "Preuves"], ["chk", "Check-list"], ["cas", "Cas pratique"], ["quiz", "Quiz"]];

export function standard(el, num, tab = "syn") {
  const s = stdByNum(num);
  if (!s) { el.innerHTML = `<div class="empty"><span class="ico">🤷</span>Norme introuvable.</div>`; return; }
  const d = domainByN(s.dN);
  const p = principles.find((x) => x.domain === s.dN && x.n === s.p);
  S.markVisited(num);
  const fav = S.isFav("std", num), rev = S.state.review.includes(num);
  const content = {
    syn: () => `
      <p style="font-size:15.5px">${esc(s.sum)}</p>
      <div style="margin:14px 0 4px"><b>Comprendre simplement</b></div>
      <div class="u-block"><h4>🎯 Ce que la norme cherche à garantir</h4><p>${esc(s.u.g)}</p></div>
      <div class="u-block"><h4>📌 Ce qu'il faut retenir</h4><ul>${s.u.r.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div class="u-block"><h4>💼 En pratique pour l'auditeur</h4><p>${esc(s.u.p)}</p></div>
      <div class="u-block"><h4>⚠️ Points d'attention</h4><ul>${s.u.a.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">${s.kw.map((k) => `<span class="badge b-tag">${esc(k)}</span>`).join("")}</div>`,
    req: () => `<p class="small muted" style="margin-bottom:6px">Distinction Doit / Devrait / Peut — conforme au niveau d'obligation du document source :</p>${legend()}
      <div class="card pad">${s.req.map(([t, o]) => `<div class="req">${obBadge(o)}<span>${esc(t)}</span></div>`).join("")}</div>`,
    imp: () => `<div class="card pad">${s.impl.map((x) => `<div class="req"><span>🛠️</span><span>${esc(x)}</span></div>`).join("")}</div>
      ${s.cond ? `<div class="card pad" style="margin-top:12px"><b>Conditions indispensables (Domaine III)</b>${s.cond.map((c) => `<div class="req"><span>🏛️</span><span>${esc(c)}</span></div>`).join("")}</div>` : ""}`,
    pre: () => `<div class="card pad"><b>Exemples de preuves de conformité</b>${s.ev.map((x) => `<div class="req"><span>📎</span><span>${esc(x)}</span></div>`).join("")}</div>
      <p class="small muted" style="margin-top:10px">Ces exemples sont indicatifs : d'autres preuves peuvent démontrer la conformité.</p>`,
    chk: () => `<div id="chk-host"></div>`,
    cas: () => {
      const cases = CASES.filter((c) => c.stds.includes(s.num));
      return cases.length ? cases.map(caseCard).join("") : `
      <div class="card pad"><p class="muted">Aucun cas pratique spécifique pour cette norme.</p>
      <a class="btn soft small" style="margin-top:10px" href="#/cas">Voir tous les cas pratiques →</a></div>`;
    },
    quiz: () => {
      const qs = s.quiz || [];
      return `<div class="card pad">
        <b>Quiz — Norme ${s.num}</b>
        <p class="small muted">${qs.length} question(s) pour tester votre maîtrise de cette norme.</p>
        <div id="qz-run" style="margin-top:12px"></div>
      </div>`;
    }
  };
  el.innerHTML = `
  <div class="crumbs">
    <a href="#/">Accueil</a> › <a href="#/normes">Explorer</a> › <a href="#/domaine/${s.dN}">Domaine ${d.code}</a> ›
    <a href="#/principe/${s.dN}/${s.p}">Principe ${s.p}</a> › <b>Norme ${s.num}</b>
  </div>
  <div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap">
    <span class="std-num" style="width:56px;height:48px">${s.num}</span>
    <div style="flex:1;min-width:200px">
      <h1 style="font-size:23px">Norme ${s.num} — ${esc(s.title)}</h1>
      <div style="margin-top:6px">${domainChip(s.dN)} <span class="badge b-tag">Principe ${s.p} — ${esc(p ? p.t : "")}</span> <span class="badge b-tag">pages ${s.pages}</span></div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn soft small" id="fav-btn">${fav ? "⭐ Favori" : "☆ Ajouter aux favoris"}</button>
      <button class="btn soft small" id="rev-btn">${rev ? "🔖 À revoir" : "🔖 Marquer à revoir"}</button>
    </div>
  </div>
  <div class="tabs" id="tabs">${TABS.map(([k, l]) => `<button data-t="${k}" class="${k === tab ? "active" : ""}">${l}</button>`).join("")}</div>
  <div class="tabpane" id="pane">${content[tab]()}</div>
  ${srcNote(s.pages)}`;
  el.querySelector("#fav-btn").onclick = () => { S.toggleFav("std", num); standard(el, num, tab); };
  el.querySelector("#rev-btn").onclick = () => { S.toggleReview(num); standard(el, num, tab); };
  el.querySelectorAll("#tabs button").forEach((b) => b.onclick = () => standard(el, num, b.dataset.t));
  if (tab === "quiz") mountStdQuiz(el.querySelector("#qz-run"), s);
  if (tab === "chk") checklistBody(el.querySelector("#chk-host"), "std", s.num, `Norme ${s.num} — ${s.title}`, (s.check || []).map((q) => typeof q === "string" ? { q } : q));
}

// ————— CHECK-LIST —————
const OPTS = [["oui", "Oui"], ["partiel", "Partiellement"], ["non", "Non"], ["na", "N/A"]];
function checklistBody(el, scope, ref, title, items, extra) {
  const key = S.clKey(scope, ref);
  const st = S.clStats(items, key);
  const c = S.getCl(key);
  el.innerHTML = `
  <div class="crumbs"><a href="#/checklists">Check-lists</a> › <b>${esc(title)}</b></div>
  <h1 style="font-size:22px">Check-list — ${esc(title)}</h1>
  <div class="card pad" style="margin-top:14px">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <b>Auto-évaluation : ${st.score} %</b>
      <span class="small muted">${st.done}/${st.total} éléments traités · ✅ ${st.oui} · 🟠 ${st.partiel} · 🔴 ${st.non} · ⚪ ${st.na}</span>
    </div>
    <div class="bar" style="margin-top:10px"><i style="width:${st.score}%"></i></div>
    ${extra || ""}
    ${items.map((q, i) => `
      <div class="check-item">
        <div class="check-q">${i + 1}. ${esc(q.q || q)}</div>
        ${q.d ? `<p class="small muted">${esc(q.d)}</p>` : ""}
        <div class="opts" data-i="${i}">
          ${OPTS.map(([v, l]) => `<button class="opt ${c.answers[i] === v ? "sel-" + v : ""}" data-v="${v}">${l}</button>`).join("")}
        </div>
        <textarea class="note" placeholder="Commentaire, preuve, action à entreprendre…" data-i="${i}">${esc(c.notes[i] || "")}</textarea>
      </div>`).join("")}
    <div class="disclaimer">⚠️ Ce score est une <b>auto-évaluation indicative</b> et ne constitue en aucun cas une certification officielle de conformité.</div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:4px">
      <button class="btn soft" id="cl-exp-pdf">⬇️ Exporter en PDF</button>
      <button class="btn soft" id="cl-exp-xlsx">📊 Exporter en Excel</button>
      <span class="small muted" style="align-self:center">Exports illimités et gratuits ❤️</span>
    </div>
    ${srcNote("")}
  </div>`;
  el.querySelectorAll(".opts").forEach((g) => g.querySelectorAll(".opt").forEach((b) => b.onclick = () => {
    S.setAnswer(key, +g.dataset.i, b.dataset.v); checklistBody(el, scope, ref, title, items, extra);
  }));
  el.querySelectorAll("textarea.note").forEach((t) => t.onchange = () => S.setNote(key, +t.dataset.i, t.value));

  // Exports PDF / Excel — illimités et gratuits.
  const rows = items.map((q, i) => [String(i + 1), q.q || q, X.CL_LABEL[c.answers[i]] || "Sans réponse", c.notes[i] || ""]);
  el.querySelector("#cl-exp-pdf").onclick = () => X.gatedPdf({
    name: "checklist-" + ref,
    title: "Check-list — " + title,
    subtitle: "Auto-évaluation indicative : " + st.score + " % · " + st.done + "/" + st.total + " éléments traités · exportée le " + new Date().toLocaleDateString("fr-FR"),
    sections: rows.map(([n, q, r, note]) => ({ h: n + ". " + q, lines: ["Réponse : " + r].concat(note ? ["Note : " + note] : []) }))
  });
  el.querySelector("#cl-exp-xlsx").onclick = () => X.gatedXlsx({
    name: "checklist-" + ref,
    sheetName: "Check-list",
    title: "Check-list — " + title + " (score " + st.score + " %, " + new Date().toLocaleDateString("fr-FR") + ")",
    rows: [["#", "Question", "Réponse", "Note"], ...rows]
  });
  return st;
}

export function checklists(el) {
  const domStats = domains.slice(1).map((d) => {
    const stds = standards.filter((s) => s.dN === d.n);
    let oui = 0, tot = 0;
    stds.forEach((s) => { const st = S.clStats(s.check || [], S.clKey("std", s.num)); oui += st.oui + st.partiel * .5; tot += st.total; });
    return { d, pct: tot ? Math.round((oui / tot) * 100) : 0 };
  });
  el.innerHTML = `
  <h1 style="font-size:24px">Check-lists</h1>
  <p class="muted" style="margin:6px 0 18px">Vérifiez vos pratiques norme par norme, puis évaluez votre fonction d'audit interne.</p>
  <div class="card pad" style="margin-bottom:18px">
    <b>🎯 Évaluer ma fonction d'audit interne</b>
    <p class="small muted" style="margin:6px 0 12px">Vue consolidée des check-lists par domaine (auto-évaluation indicative).</p>
    ${domStats.map(({ d, pct }) => `
      <div style="margin-bottom:10px">
        <div class="small" style="display:flex;justify-content:space-between"><span>Domaine ${d.code} — ${esc(d.title)}</span><b>${pct} %</b></div>
        <div class="bar ${pct < 60 ? "orange" : ""}"><i style="width:${pct}%"></i></div>
      </div>`).join("")}
    <div class="disclaimer">Score global indicatif fondé sur vos réponses. « Points à examiner » : privilégiez les domaines avec les taux les plus faibles — sans jugement automatique.</div>
  </div>
  <h2 class="sec">Check-lists par norme</h2>
  <div class="grid">${standards.filter((s) => (s.check || []).length).map(stdCard).join("")}</div>`;
}

// ————— QUIZ —————
function allQuestions(filter) {
  const qs = [];
  for (const s of standards) for (let i = 0; i < (s.quiz || []).length; i++) {
    const q = s.quiz[i];
    if (filter(s, q)) qs.push({ ...q, std: s.num });
  }
  return qs;
}
const shuffle = (a) => a.map((v) => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);

export function quizHome(el) {
  const cats = [
    ["gen", "🧠 Quiz général", "Un mélange de questions sur l'ensemble des domaines."],
    ["d2", "📕 Domaine II — Éthique et professionnalisme", "Normes 1.1 à 5.2"],
    ["d3", "🏛️ Domaine III — Gouvernance", "Normes 6.1 à 8.4"],
    ["d4", "🧩 Domaine IV — Gestion de la fonction", "Normes 9.1 à 12.2"],
    ["d5", "🚀 Domaine V — Réalisation des missions", "Normes 13.1 à 15.2"],
    ["debutant", "🌱 Niveau débutant", "Questions fondamentales."],
    ["intermediaire", "🌿 Niveau intermédiaire", "Questions d'application."],
    ["avance", "🌳 Niveau avancé", "Scénarios professionnels."],
  ];
  const filter = { gen: () => true, d2: (s) => s.dN === 2, d3: (s) => s.dN === 3, d4: (s) => s.dN === 4, d5: (s) => s.dN === 5,
    debutant: (s, q) => q.d === 0, intermediaire: (s, q) => q.d === 1, avance: (s, q) => q.d === 2 };
  el.innerHTML = `
  <h1 style="font-size:24px">Quiz</h1>
  <p class="muted" style="margin:6px 0 16px">Chaque question est vérifiable à partir du référentiel. Après chaque réponse : explication et référence à la norme.</p>
  <div class="grid g2">${cats.map(([k, t, d]) => {
    const n = allQuestions(filter[k]).length;
    return `<a class="card action-card stagger" href="#/quiz/run/${k}" data-f="${k}"><span class="ico">${t.split(" ")[0]}</span><span><b>${esc(t.slice(t.indexOf(" ") + 1))}</b><span>${esc(d)} · ${n} questions disponibles</span></span></a>`;
  }).join("")}</div>
  <h2 class="sec">Derniers résultats</h2>
  ${S.state.quiz.slice(-5).reverse().map((q) => `<div class="card pad" style="margin-bottom:8px"><b>${q.score}/${q.total}</b> (${Math.round(q.score / q.total * 100)} %) — ${esc(q.cat)} <span class="small muted">· ${new Date(q.ts).toLocaleDateString("fr-FR")}</span>
    ${q.missed.length ? ` · <span class="small">À revoir : ${q.missed.map((m) => `<a href="#/norme/${m}" style="color:var(--teal)">N. ${m}</a>`).join(", ")}</span>` : ""}</div>`).join("") || `<p class="muted">Aucun quiz réalisé.</p>`}`;
  el.querySelectorAll("[data-f]").forEach((a) => a.onclick = (e) => { e.preventDefault(); location.hash = "#/quiz/run/" + a.dataset.f; });
}

const FILTERS = {
  gen: () => true, d2: (s) => s.dN === 2, d3: (s) => s.dN === 3, d4: (s) => s.dN === 4, d5: (s) => s.dN === 5,
  debutant: (s, q) => q.d === 0, intermediaire: (s, q) => q.d === 1, avance: (s, q) => q.d === 2,
  std: (s, num) => s.num === num,
};

export function quizRun(el, cat, num) {
  const slotCat = cat === "std" ? "std:" + num : cat;
  let qs = allQuestions(FILTERS[cat] ? (s, q) => FILTERS[cat](s, cat === "std" ? num : q) : () => true);
  if (cat === "std") qs = allQuestions((s) => s.num === num);
  qs = shuffle(qs).slice(0, 10);
  const host = el;
  let i = 0, score = 0, missed = [], answered = false;
  const title = cat === "std" ? `Quiz — Norme ${num}` : "Quiz";
  function draw() {
    if (i >= qs.length) return result();
    const q = qs[i];
    host.innerHTML = `
    <div class="crumbs"><a href="#/quiz">Quiz</a> › <b>${esc(title)}</b></div>
    <div class="bar" style="margin-bottom:16px"><i style="width:${(i / qs.length) * 100}%"></i></div>
    <div class="card pad">
      <span class="small muted">Question ${i + 1} / ${qs.length} · Réf. Norme ${q.std}</span>
      <h3 style="margin:8px 0 4px;font-size:17px">${esc(q.q)}</h3>
      <div id="opts">${q.o.map((o, j) => `<button class="qz-opt" data-j="${j}">${esc(o)}</button>`).join("")}</div>
      <div id="expl" style="display:none" class="qz-expl"></div>
      <div style="margin-top:12px;text-align:right"><button class="btn primary" id="next" style="display:none">Suivant →</button></div>
    </div>`;
    host.querySelectorAll("#opts .qz-opt").forEach((b) => b.onclick = () => {
      if (answered) return; answered = true;
      const ok = +b.dataset.j === q.a;
      if (ok) score++; else missed.push(q.std);
      host.querySelectorAll("#opts .qz-opt").forEach((x) => {
        if (+x.dataset.j === q.a) x.classList.add("ok");
        else if (x === b) x.classList.add("ko");
      });
      const ex = host.querySelector("#expl");
      ex.innerHTML = `${ok ? "✅ <b>Bonne réponse !</b>" : "❌ <b>Réponse incorrecte.</b>"} <br>${esc(q.e)} <br><a href="#/norme/${q.std}" style="color:var(--teal)">→ Voir la norme ${q.std}</a>`;
      ex.style.display = "block";
      host.querySelector("#next").style.display = "inline-flex";
      host.querySelector("#next").onclick = () => { i++; answered = false; draw(); };
    });
  }
  function result() {
    S.saveQuizResult(cat === "std" ? "Norme " + num : cat, score, qs.length, [...new Set(missed)]);
    host.innerHTML = `
    <div class="card pad" style="text-align:center;padding:34px">
      <div style="font-size:44px">${score / qs.length >= 0.8 ? "🎉" : score / qs.length >= 0.5 ? "🙂" : "📚"}</div>
      <h1 style="font-size:34px;margin:8px 0">${score} / ${qs.length}</h1>
      <p style="font-size:20px;color:var(--teal);font-weight:700">${Math.round(score / qs.length * 100)} %</p>
      ${[...new Set(missed)].length ? `<div style="margin-top:14px"><b>Normes à revoir :</b>
        <div class="grid" style="margin-top:8px">${[...new Set(missed)].map((m) => { const st = stdByNum(m); return `<a class="card std-card" href="#/norme/${m}"><span class="std-num">${m}</span><b>${esc(st.title)}</b></a>`; }).join("")}</div></div>` : `<p style="margin-top:10px">Aucune erreur — bravo !</p>`}
      <div style="display:flex;gap:10px;justify-content:center;margin-top:18px;flex-wrap:wrap">
        <button class="btn primary" id="again">Refaire un quiz</button>
        <button class="btn soft" id="rev">Revoir mes erreurs</button>
        <a class="btn soft" href="#/quiz">Autres quiz</a>
      </div>
    </div>`;
    host.querySelector("#again").onclick = () => quizRun(el, cat, num);
    host.querySelector("#rev").onclick = () => {
      if (!missed.length) return;
      quizReview(host, qs.filter((q) => missed.includes(q.std)));
    };
  }
  draw();
}

function quizReview(host, qs) {
  host.innerHTML = `<div class="crumbs"><a href="#/quiz">Quiz</a> › <b>Revoir mes erreurs</b></div>` +
    qs.map((q) => `<div class="card pad" style="margin-bottom:12px">
      <span class="small muted">Réf. Norme ${q.std}</span>
      <h3 style="margin:6px 0;font-size:16px">${esc(q.q)}</h3>
      <p><b>Bonne réponse :</b> ${esc(q.o[q.a])}</p>
      <div class="qz-expl">${esc(q.e)}</div>
      <a class="btn soft small" style="margin-top:10px" href="#/norme/${q.std}">Voir la norme ${q.std}</a>
    </div>`).join("");
}

function mountStdQuiz(host, s) {
  const qs = shuffle(s.quiz || []);
  let i = 0, score = 0, answered = false;
  function draw() {
    if (i >= qs.length) {
      host.innerHTML = `<p style="font-size:22px;font-weight:800">${score} / ${qs.length}</p>
        <button class="btn soft small" id="again">Refaire</button>`;
      host.querySelector("#again").onclick = () => { i = 0; score = 0; draw(); };
      return;
    }
    const q = qs[i];
    host.innerHTML = `<p class="small muted">Question ${i + 1}/${qs.length}</p><h4 style="margin:6px 0">${esc(q.q)}</h4>
      <div id="o">${q.o.map((o, j) => `<button class="qz-opt" data-j="${j}">${esc(o)}</button>`).join("")}</div><div class="qz-expl" id="e" style="display:none"></div>`;
    host.querySelectorAll("#o .qz-opt").forEach((b) => b.onclick = () => {
      if (answered) return; answered = true;
      const ok = +b.dataset.j === q.a; if (ok) score++;
      host.querySelectorAll("#o .qz-opt").forEach((x) => { if (+x.dataset.j === q.a) x.classList.add("ok"); else if (x === b) x.classList.add("ko"); });
      const e = host.querySelector("#e"); e.innerHTML = esc(q.e); e.style.display = "block";
      setTimeout(() => { i++; answered = false; draw(); }, 2200);
    });
  }
  draw();
}

// ————— CAS PRATIQUES —————
const CASES = [
  { t: "Cas 1 — Objectivité et ancienne responsabilité", lvl: 1,
    sit: "Un auditeur interne doit participer à une mission concernant l'activité paie, dont il était responsable jusqu'au mois de janvier de l'année en cours.",
    q: "Quels éléments doivent être examinés concernant son objectivité ?",
    o: ["Aucun : l'auditeur connaît bien l'activité, c'est un avantage", "L'objectivité est présumée altérée : l'auditeur a eu la responsabilité de l'activité au cours des 12 mois précédents", "Il suffit que le superviseur relève son travail", "La direction de l'activité doit donner son accord"],
    a: 1, e: "L'objectivité est présumée altérée lorsqu'un auditeur réalise des services d'assurance pour une activité dont il a eu la responsabilité au cours des 12 mois précédents. L'atteinte doit être signalée et atténuée (réaffectation, externalisation…).", stds: ["2.2", "2.3"] },
  { t: "Cas 2 — Pression sur un constat", lvl: 1,
    sit: "Le directeur général demande à l'auditeur de supprimer un constat du rapport final, sans élément nouveau à l'appui.",
    q: "Quels principes et normes sont en jeu ?",
    o: ["Le rapport appartient à la direction : il peut le modifier", "L'auditeur peut négocier la suppression contre un élargissement de périmètre", "Honnêteté et courage professionnel, communication exacte et objective, et escalade possible au Conseil", "Le constat peut être retiré si le risque est ancien"],
    a: 2, e: "Les auditeurs ne doivent pas dissimuler ou omettre des constatations (honnêteté, courage professionnel). La communication doit rester exacte et objective. En cas de désaccord persistant, les avis des deux parties peuvent être ajoutés, et le Conseil peut être informé.", stds: ["1.1", "11.2", "8.1"] },
  { t: "Cas 3 — Cadeau d'un fournisseur auditée", lvl: 2,
    sit: "En pleine mission sur les achats, un fournisseur auditionné offre à l'auditeur un cadeau de valeur significative.",
    q: "Quelle est l'attitude conforme aux Normes ?",
    o: ["Accepter, puis le déclarer dans le rapport", "Refuser : n'accepter aucune proposition matérielle ou immatérielle pouvant compromettre l'objectivité", "Accepter si le superviseur est au courant", "Accepter et le reverser à l'organisation"],
    a: 1, e: "Les auditeurs ne doivent accepter aucune proposition matérielle ou immatérielle (cadeau, récompense, faveur) qui peut compromettre — ou risquer de compromettre — leur objectivité. La politique la plus restrictive doit être suivie.", stds: ["2.2", "1.2"] },
  { t: "Cas 4 — Compétence manquante", lvl: 2,
    sit: "Une mission de cybersécurité est prévue au plan, mais aucun auditeur de la fonction ne dispose de compétences techniques en la matière.",
    q: "Quelles options sont conformes aux Normes ?",
    o: ["Réaliser la mission malgré tout", "Retirer la mission du plan sans l'indiquer", "Développer les compétences, ou faire appel à un expert/prestataire externe indépendant", "Demander à l'activité auditée de réaliser l'audit"],
    a: 2, e: "Les auditeurs ne fournissent que des services pour lesquels ils sont compétents ou en mesure de développer les compétences nécessaires. Le responsable de l'audit interne doit s'assurer que la fonction possède collectivement les compétences requises — ou les obtenir (expert interne, prestataire externe indépendant).", stds: ["3.1", "8.2", "9.5"] },
  { t: "Cas 5 — Restriction d'accès en cours de mission", lvl: 3,
    sit: "En cours de mission, la direction de l'activité refuse l'accès à des données essentielles à l'atteinte des objectifs.",
    q: "Que doivent faire les auditeurs ?",
    o: ["Modifier les objectifs pour s'adapter aux données disponibles", "Abandonner la mission discrètement", "Évaluer l'impact de la restriction et la communiquer au responsable de l'audit interne, qui détermine les parties à en informer", "Signaler le refus à la presse"],
    a: 2, e: "Si une restriction empêche de satisfaire le périmètre et d'atteindre les objectifs, l'impact doit être évalué et communiqué au responsable de l'audit interne, qui détermine les parties appropriées à informer (direction générale, Conseil).", stds: ["13.3", "7.1", "8.1"] },
  { t: "Cas 6 — Découverte d'une fraude potentielle", lvl: 3,
    sit: "Au cours d'une mission, des indices sérieux laissent penser qu'un dirigeant commet une fraude. La direction générale minimise les faits.",
    q: "Quelles obligations s'appliquent ?",
    o: ["Attendre la fin de la mission et mentionner une réserve", "Documenter les éléments probants, appliquer les méthodologies, et escalader : inconduite grave à communiquer au Conseil", "Transférer le dossier à la police immédiatement", "Interroger le dirigeant seul, sans en rendre compte"],
    a: 1, e: "La probabilité de fraude doit être prise en compte dans les évaluations de risques. Si la gravité de l'inconduite est avérée (fraude, actes illégaux), l'inconduite, l'impact potentiel et les mesures de protection doivent être communiqués au Conseil.", stds: ["13.2", "11.4", "14.2", "1.3"] },
];

function caseCard(c) {
  return `<div class="card pad" data-case="${esc(c.t)}">
    <div style="display:flex;gap:8px;align-items:center"><span class="badge b-teal">Cas pratique</span><span class="badge b-tag">Niveau ${c.lvl}/3</span></div>
    <h3 style="margin:10px 0 6px">${esc(c.t)}</h3>
    <div class="u-block"><h4>📌 Situation</h4><p>${esc(c.sit)}</p></div>
    <p style="font-weight:600">${esc(c.q)}</p>
    <div class="opts-c">${c.o.map((o, j) => `<button class="qz-opt" data-j="${j}">${esc(o)}</button>`).join("")}</div>
    <div class="qz-expl" style="display:none"></div>
  </div>`;
}

// ————— Soutenir : helpers —————
export function lockedCard(title, desc) {
  return `
  <div class="empty">
    <span class="ico">👑</span>
    <b>${esc(title)}</b><br>
    <span class="small muted" style="display:block;max-width:420px;margin:8px auto">${esc(desc)}</span>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:16px">
      <a class="btn primary" href="#/premium">Débloquer Premium →</a>
    </div>
  </div>`;
}

export function casesView(el) {
  el.innerHTML = `<h1 style="font-size:24px">Cas pratiques</h1>
  <p class="muted" style="margin:6px 0 16px">Des situations professionnelles pour appliquer les Normes, par difficulté croissante. Contenu pédagogique original, fondé sur le référentiel.</p>
  <div class="grid">${CASES.map(caseCard).join("")}</div>`;
  el.querySelectorAll("[data-case]").forEach((card) => {
    const c = CASES.find((x) => x.t === card.dataset.case);
    card.querySelectorAll(".qz-opt").forEach((b) => b.onclick = () => {
      card.querySelectorAll(".qz-opt").forEach((x, j) => { x.classList.toggle("ok", j === c.a); x.classList.toggle("ko", x === b && j !== c.a); x.disabled = true; });
      const ex = card.querySelector(".qz-expl");
      ex.innerHTML = `<b>Raisonnement :</b> ${esc(c.e)}<br><b>Normes pertinentes :</b> ${c.stds.map((n) => `<a href="#/norme/${n}" style="color:var(--teal)">Norme ${n}</a>`).join(", ")}<br><b>Action proposée :</b> documenter la situation, appliquer les méthodologies de la fonction et en discuter avec le responsable de l'audit interne.`;
      ex.style.display = "block";
    });
  });
}

// ————— RECHERCHE —————
export function searchView(el) {
  el.innerHTML = `
  <h1 style="font-size:24px">Recherche</h1>
  <input class="search-input" id="si" placeholder="Ex. : indépendance, charte, preuves de conformité, plan d'audit…" style="margin-top:12px">
  <div class="chips" style="margin-top:12px">${["indépendance", "objectivité", "charte", "preuves", "plan d'audit", "suivi", "fraude", "qualité"].map((c) => `<button class="chip" data-q="${c}">${c}</button>`).join("")}</div>
  <div id="results"></div>`;
  const si = el.querySelector("#si"), res = el.querySelector("#results");
  function run(q) {
    const list = search(q);
    res.innerHTML = list.length ? `<div class="card" style="margin-top:8px">${list.map((r) => r.type === "Norme" ? `
      <a class="res-item" href="#/norme/${r.ref}"><span class="badge b-teal">Norme ${r.ref}</span> <b>${esc(r.title)}</b>
        <div class="small muted">${esc(r.dom.title)} · Principe ${r.principle ? r.principle.n : ""} ${r.principle ? "— " + esc(r.principle.t) : ""}</div></a>`
      : r.type === "Définition" ? `
      <a class="res-item" href="#/glossaire/${encodeURIComponent(r.title)}"><span class="badge b-tag">Définition</span> <b>${esc(r.title)}</b>
        <div class="small muted">${esc(r.term.d.slice(0, 110))}…</div></a>`
      : `<a class="res-item" href="#/principe/${r.principle.domain}/${r.principle.n}"><span class="badge b-tag">Principe</span> <b>${esc(r.title)}</b>
        <div class="small muted">${esc(r.dom.title)}</div></a>`).join("")}</div>`
      : (q ? `<div class="empty"><span class="ico">🔍</span>Aucun résultat pour « ${esc(q)} ».</div>` : "");
  }
  si.oninput = () => run(si.value);
  el.querySelectorAll(".chip").forEach((c) => c.onclick = () => { si.value = c.dataset.q; run(si.value); });
  run("");
}

// ————— GLOSSAIRE —————
export function glossaryView(el, term) {
  const list = (q) => glossary.filter((g) => !q || (g.t + " " + g.d + " " + g.k.join(" ")).toLowerCase().includes(q.toLowerCase()));
  el.innerHTML = `
  <h1 style="font-size:24px">Glossaire</h1>
  <p class="muted" style="margin:6px 0 12px">${glossary.length} définitions issues du référentiel.</p>
  <input class="search-input" id="gi" placeholder="Rechercher un terme…" value="${term ? esc(term) : ""}">
  <div id="gl" style="margin-top:14px" class="grid"></div>`;
  const gi = el.querySelector("#gi"), gl = el.querySelector("#gl");
  function draw() {
    const items = list(gi.value);
    gl.innerHTML = items.map((g) => `<div class="card pad stagger">
      <b style="font-size:16px">${esc(g.t)}</b>
      <p class="small" style="margin:6px 0">${esc(g.d)}</p>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        ${g.s.map((n) => `<a class="badge b-teal" href="#/norme/${n}">Norme ${n}</a>`).join("") || `<span class="small muted">Termes fondamentaux</span>`}
        <button class="btn soft small" style="margin-left:auto" data-t="${esc(g.t)}">⭐</button>
      </div></div>`).join("") || `<div class="empty"><span class="ico">📖</span>Aucun terme trouvé.</div>`;
    gl.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => S.toggleFav("term", b.dataset.t));
  }
  gi.oninput = draw;
  draw();
  if (term) setTimeout(() => gl.querySelector(".card")?.scrollIntoView({ behavior: "smooth" }), 100);
}

// ————— PROGRESSION —————
export function progressView(el) {
  S.computeBadges();
  const st = S.state;
  const totalQ = st.quiz.length;
  const avg = totalQ ? Math.round(st.quiz.reduce((a, q) => a + q.score / q.total, 0) / totalQ * 100) : 0;
  const clDone = Object.keys(st.checklist).filter((k) => { const c = st.checklist[k]; return c.answers && Object.keys(c.answers).length > 0; }).length;
  el.innerHTML = `
  <h1 style="font-size:24px">Ma progression</h1>
  <div class="grid g4" style="margin-top:14px">
    <div class="card stat stagger"><b>${Object.keys(st.visited).length}</b><span>Normes consultées / ${standards.length}</span></div>
    <div class="card stat stagger"><b>${totalQ}</b><span>Quiz réalisés</span></div>
    <div class="card stat stagger"><b>${avg} %</b><span>Score moyen</span></div>
    <div class="card stat stagger"><b>${clDone}</b><span>Check-lists complétées</span></div>
  </div>
  <h2 class="sec">Progression par domaine (normes consultées)</h2>
  <div class="card pad">
    ${domains.slice(1).map((d) => { const p = S.domainProgress(d.n, standards); return `
      <div style="margin-bottom:12px">
        <div class="small" style="display:flex;justify-content:space-between"><span><b>Domaine ${d.code}</b> — ${esc(d.title)}</span><span>${p.visited}/${p.total} · ${p.pct} %</span></div>
        <div class="bar"><i style="width:${p.pct}%"></i></div>
      </div>`; }).join("")}
  </div>
  <h2 class="sec">Normes à revoir 🔖</h2>
  ${st.review.length ? `<div class="grid">${st.review.map((n) => { const s = stdByNum(n); return s ? stdCard(s) : ""; }).join("")}</div>` : `<p class="muted small">Aucune norme marquée « à revoir ». Utilisez le bouton 🔖 sur une fiche.</p>`}
  <h2 class="sec">Badges pédagogiques</h2>
  <div class="grid g3">${S.badgeList.map((b) => `
    <div class="card pad stagger" style="opacity:${st.badges.includes(b.id) ? 1 : .45}">
      <span style="font-size:26px">${b.ico}</span>
      <b style="display:block">${esc(b.label)}</b>
      <span class="small muted">${st.badges.includes(b.id) ? "Obtenu" : "À débloquer"}</span>
    </div>`).join("")}</div>
  <h2 class="sec">Exporter mon rapport</h2>
  <div class="card pad" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
    <button class="btn soft" id="pg-exp-pdf">⬇️ Rapport PDF</button>
    <button class="btn soft" id="pg-exp-xlsx">📊 Rapport Excel</button>
    <span class="small muted">Exports illimités et gratuits ❤️</span>
  </div>`;
  const progRows = () => {
    const avgRows = [];
    domains.slice(1).forEach((d) => { const p = S.domainProgress(d.n, standards); avgRows.push(["Domaine " + d.code + " — " + d.title, String(p.visited) + "/" + p.total, p.pct + " %"]); });
    return [["Élément", "Détail", "Valeur"],
      ["Normes consultées", Object.keys(st.visited).length + " / " + standards.length, Math.round(Object.keys(st.visited).length / standards.length * 100) + " %"],
      ["Quiz réalisés", String(totalQ), "Score moyen " + avg + " %"],
      ["Check-lists complétées", String(clDone), ""],
      ["Normes favorites", String(st.favorites.length), ""],
      ["Normes à revoir", String(st.review.length), ""],
      ...avgRows];
  };
  el.querySelector("#pg-exp-pdf").onclick = () => X.gatedPdf({
    name: "rapport-progression-audit-normes",
    title: "Rapport de progression — Audit Normes",
    subtitle: "Édité le " + new Date().toLocaleDateString("fr-FR") + " · auto-évaluation indicative",
    sections: progRows().slice(1).map(([a, b2, c2]) => ({ h: a, lines: [b2, c2].filter(Boolean) }))
  });
  el.querySelector("#pg-exp-xlsx").onclick = () => X.gatedXlsx({
    name: "rapport-progression-audit-normes",
    sheetName: "Progression",
    title: "Rapport de progression — Audit Normes (" + new Date().toLocaleDateString("fr-FR") + ")",
    rows: progRows()
  });
}

// ————— FAVORIS —————
export function favoritesView(el) {
  const f = S.state.favorites;
  const stds = f.filter((x) => x.type === "std").map((x) => stdByNum(x.ref)).filter(Boolean);
  const terms = f.filter((x) => x.type === "term").map((x) => glossary.find((g) => g.t === x.ref)).filter(Boolean);
  el.innerHTML = `<h1 style="font-size:24px">Mes favoris ⭐</h1>
  <h2 class="sec">Normes</h2>
  ${stds.length ? `<div class="grid">${stds.map(stdCard).join("")}</div>` : `<div class="empty"><span class="ico">⭐</span>Aucune norme favorite.<br><span class="small">Ajoutez-en depuis une fiche norme.</span></div>`}
  <h2 class="sec">Définitions</h2>
  ${terms.length ? terms.map((g) => `<div class="card pad" style="margin-bottom:8px"><b>${esc(g.t)}</b><p class="small" style="margin-top:4px">${esc(g.d)}</p>${g.s.map((n) => `<a class="badge b-teal" href="#/norme/${n}">Norme ${n}</a>`).join(" ")}</div>`).join("") : `<p class="muted small">Aucune définition en favori.</p>`}
  <h2 class="sec">Exporter mes favoris</h2>
  <div class="card pad" style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
    <button class="btn soft" id="fv-exp-pdf">⬇️ PDF</button>
    <button class="btn soft" id="fv-exp-xlsx">📊 Excel</button>
    <span class="small muted">Exports illimités et gratuits ❤️</span>
  </div>`;
  const favRows = () => [
    ["Type", "Référence", "Titre / Définition"],
    ...stds.map((s) => ["Norme", s.num, s.title]),
    ...terms.map((g) => ["Définition", g.t, g.d]),
  ];
  el.querySelector("#fv-exp-pdf").onclick = () => X.gatedPdf({
    name: "favoris-audit-normes",
    title: "Mes favoris — Audit Normes",
    subtitle: stds.length + " norme(s) · " + terms.length + " définition(s) · édité le " + new Date().toLocaleDateString("fr-FR"),
    sections: favRows().slice(1).map(([t, r, d]) => ({ h: (t === "Norme" ? "Norme " : "") + r, lines: [d] }))
  });
  el.querySelector("#fv-exp-xlsx").onclick = () => X.gatedXlsx({
    name: "favoris-audit-normes",
    sheetName: "Favoris",
    title: "Mes favoris — Audit Normes (" + new Date().toLocaleDateString("fr-FR") + ")",
    rows: favRows()
  });
}

// ————— ASSISTANT —————
export function assistantView(el) {
  // Assistant gratuit — analyse locale du référentiel.
  el.innerHTML = `
  <h1 style="font-size:24px">🤖 Demandez aux Normes</h1>
  <p class="muted" style="margin:6px 0 14px">L'assistant répond <b>uniquement</b> à partir du référentiel chargé. Il ne peut pas inventer de référence.</p>
  <div class="tabs"><button class="active" data-m="qa">❓ Poser une question</button><button data-m="sit">🧭 Situation → Normes</button></div>
  <div id="ai"></div>`;
  const host = el.querySelector("#ai");
  el.querySelectorAll(".tabs button").forEach((b) => b.onclick = () => {
    el.querySelectorAll(".tabs button").forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    b.dataset.m === "qa" ? qaUI(host) : sitUI(host);
  });
  qaUI(host);
}
function qaUI(host) {
  host.innerHTML = `
  <input class="search-input" id="qq" placeholder="Ex. : Quelles sont les exigences concernant l'indépendance ?">
  <div id="aa" style="margin-top:14px"></div>`;
  const qq = host.querySelector("#qq"), aa = host.querySelector("#aa");
  function answer() {
    const q = qq.value.trim();
    if (!q) return;
    const res = search(q).filter((r) => r.type === "Norme" || r.type === "Définition");
    if (!res.length) {
      aa.innerHTML = `<div class="card pad"><p>Cette information n'est pas disponible dans le référentiel chargé.</p></div>`;
      return;
    }
    const main = res.find((r) => r.type === "Norme");
    const s = main && main.std;
    aa.innerHTML = `<div class="card pad">
      <div class="ai-block"><b class="h">Réponse courte</b>${s ? esc(s.u.g) : esc(main.term.d)}</div>
      <div class="ai-block"><b class="h">Normes pertinentes</b>${res.filter((r) => r.type === "Norme").slice(0, 4).map((r) => `<a href="#/norme/${r.ref}" style="color:var(--teal);display:block">Norme ${r.ref} — ${esc(r.title)}</a>`).join("") || "—"}</div>
      <div class="ai-block"><b class="h">Explication</b>${s ? esc(s.sum) : esc(main.term.d)}</div>
      ${s ? `<div class="ai-block"><b class="h">Application pratique</b>${esc(s.u.p)}</div>
      <div class="ai-block"><b class="h">Preuves potentielles</b><ul style="padding-left:16px">${s.ev.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>` : ""}
      <div class="ai-block"><b class="h">Source</b>${SOURCE_LABEL}${s ? ` — Norme ${s.num}, pages ${s.pages}` : ""}</div>
      <p class="small muted">Les réponses sont générées à partir du référentiel local et de reformulations pédagogiques ; elles ne remplacent pas le document officiel de l'IIA.</p>
    </div>`;
  }
  qq.oninput = () => { if (qq.value.length > 3) answer(); };
  qq.onkeydown = (e) => { if (e.key === "Enter") answer(); };
}
function sitUI(host) {
  host.innerHTML = `
  <textarea class="note" id="st" style="min-height:110px;font-size:14.5px" placeholder="Décrivez votre situation. Ex. : « Le directeur général demande à l'auditeur de supprimer un constat. »"></textarea>
  <button class="btn primary" id="go" style="margin-top:10px">Analyser la situation</button>
  <div id="sa" style="margin-top:14px"></div>`;
  host.querySelector("#go").onclick = () => {
    const txt = host.querySelector("#st").value.trim();
    const sa = host.querySelector("#sa");
    if (!txt) return;
    const hits = matchSituation(txt);
    if (!hits.length) {
      sa.innerHTML = `<div class="card pad">Aucune correspondance claire dans le référentiel chargé. Essayez de reformuler (objectivité, indépendance, constat, fraude, confidentiel…).</div>`;
      return;
    }
    const seen = new Set();
    sa.innerHTML = `<div class="card pad">
      <b>Normes potentiellement pertinentes</b>
      ${hits.flatMap((h) => h.rule.stds.map((n) => ({ n, why: h.rule.why }))).filter((x) => !seen.has(x.n) && seen.add(x.n)).map((x) => {
        const s = stdByNum(x.n);
        return `<div class="ai-block"><a href="#/norme/${x.n}" style="color:var(--teal);font-weight:700">Norme ${x.n} — ${esc(s.title)}</a><p class="small" style="margin-top:3px">${esc(x.why)}</p></div>`;
      }).join("")}
      <div class="ai-block"><b class="h">Type de contenu</b>
        <p class="small">📖 Contenu du référentiel : liens vers les normes ci-dessus.<br>🎓 Interprétation pédagogique : les explications sont des reformulations.<br>💡 Suggestion pratique : documentez la situation, consultez les méthodologies de votre fonction et discutez-en avec le responsable de l'audit interne.</p></div>
      ${srcNote("")}
    </div>`;
  };
}

// ————— ADMIN —————
export function adminView(el) {
  if (!S.state.admin) {
    el.innerHTML = `<div class="empty"><span class="ico">🔐</span><b>Espace administrateur</b><br><span class="small">Activez le mode administrateur dans Paramètres (MVP local — l'authentification serveur est prévue dans l'architecture).</span><br><a class="btn primary" style="margin-top:14px" href="#/parametres">Aller aux paramètres</a></div>`;
    return;
  }
  const rows = standards.map((s) => {
    const cur = S.state.contentStatus[s.num] || "PUBLISHED";
    return `<tr><td><a href="#/norme/${s.num}" style="color:var(--teal)">${s.num}</a></td><td>${esc(s.title)}</td><td>Domaine ${s.dN}</td>
      <td><select data-std="${s.num}">${["DRAFT", "REVIEW", "APPROVED", "PUBLISHED"].map((x) => `<option ${x === cur ? "selected" : ""}>${x}</option>`).join("")}</select></td></tr>`;
  }).join("");
  el.innerHTML = `
  <h1 style="font-size:24px">⚙️ Administration</h1>
  <div class="grid g4" style="margin-top:14px">
    <div class="card stat"><b>${domains.length}</b><span>Domaines</span></div>
    <div class="card stat"><b>${principles.length}</b><span>Principes</span></div>
    <div class="card stat"><b>${standards.length}</b><span>Normes</span></div>
    <div class="card stat"><b>${glossary.length}</b><span>Termes du glossaire</span></div>
  </div>
  <h2 class="sec">Statuts de publication du contenu</h2>
  <div class="card pad">
    <p class="small muted" style="margin-bottom:10px">Cycle de validation : DRAFT → REVIEW → APPROVED → PUBLISHED. Le contenu n'est publié qu'après validation humaine (conformité aux droits de l'IIA : le contenu intégré est une reformulation pédagogique originale avec références de pages).</p>
    <div style="max-height:380px;overflow:auto"><table class="adm"><thead><tr><th>N°</th><th>Titre</th><th>Domaine</th><th>Statut</th></tr></thead><tbody>${rows}</tbody></table></div>
  </div>
  <h2 class="sec">Sauvegarde / restauration</h2>
  <div class="card pad" style="display:flex;gap:10px;flex-wrap:wrap">
    <button class="btn soft" id="exp">⬇️ Exporter les données (JSON)</button>
    <label class="btn soft" style="cursor:pointer">⬆️ Importer un JSON <input type="file" id="imp" accept=".json" style="display:none"></label>
  </div>
  ${srcNote("")}`;
  el.querySelectorAll("select[data-std]").forEach((sel) => sel.onchange = () => S.mutate((s) => { s.contentStatus[sel.dataset.std] = sel.value; }));
  el.querySelector("#exp").onclick = () => {
    const blob = new Blob([S.exportData()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "audit-normes-data.json"; a.click();
  };
  el.querySelector("#imp").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { try { S.mutate((s) => Object.assign(s, JSON.parse(r.result))); alert("Import réussi."); adminView(el); } catch { alert("Fichier invalide."); } };
    r.readAsText(f);
  };
}

// ————— PARAMÈTRES —————
export function settingsView(el) {
  const theme = S.state.theme || "auto";
  el.innerHTML = `
  <h1 style="font-size:24px">Paramètres</h1>
  <div class="card pad" style="margin-top:14px">
    <b>Apparence</b>
    <div class="chips" style="margin-top:10px">
      <button class="chip ${theme === "light" ? "on" : ""}" data-th="light">☀️ Light</button>
      <button class="chip ${theme === "dark" ? "on" : ""}" data-th="dark">🌙 Dark</button>
      <button class="chip ${theme === "auto" ? "on" : ""}" data-th="auto">🖥️ Auto</button>
    </div>
  </div>
  <div class="card pad" style="margin-top:14px">
    <b>Profil — comptes locaux</b>
    <p class="small muted" style="margin:6px 0">Créez un compte <b>sur cet appareil uniquement</b> : chaque personne du foyer (PC ou téléphone) garde sa propre progression, ses favoris et ses check-lists. Rien n'est envoyé sur Internet — la progression reste stockée sur votre appareil.</p>
    <div id="acc-zone"></div>
    <label style="display:flex;gap:10px;align-items:center;margin-top:8px"><input type="checkbox" class="big" id="adm" ${S.state.admin ? "checked" : ""}> Mode administrateur (back-office)</label>
    <label style="display:flex;gap:10px;align-items:center;margin-top:8px"><input type="checkbox" class="big" id="aud" checked disabled> Auditeur interne</label>
  </div>
  <div class="card pad" style="margin-top:14px">
    <b>RGPD — Mes données</b>
    <p class="small muted" style="margin:6px 0">Vous pouvez exporter ou supprimer l'ensemble de vos données personnelles (progression, favoris, check-lists, quiz). Consultez notre <a href="#/confidentialite" style="color:var(--teal)">Politique de confidentialité</a>.</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
      <button class="btn soft" id="ex">⬇️ Exporter mes données</button>
      <button class="btn danger" id="del">🗑️ Supprimer mon compte et mes données</button>
    </div>
  </div>
  <div class="card pad" style="margin-top:14px">
    <b>À propos du contenu</b>
    <p class="small muted" style="margin-top:6px">${esc(fundamentals.intro)}</p>
    <p class="small muted" style="margin-top:8px">Droits d'auteur : les Normes internationales d'audit interne 2024 sont protégées par l'IIA. Cette application n'utilise que des reformulations pédagogiques originales, avec renvois vers les pages du document source. <a href="https://www.theiia.org" target="_blank" style="color:var(--teal)">Voir la source officielle →</a></p>
  </div>
  ${srcNote("")}`;
  el.querySelectorAll("[data-th]").forEach((b) => b.onclick = () => {
    S.mutate((s) => { s.theme = b.dataset.th; });
    window.applyTheme && window.applyTheme();
    settingsView(el);
  });

  // — Comptes locaux (sur l'appareil uniquement) —
  const accZone = el.querySelector("#acc-zone");
  const active = S.activeProfile();
  const profiles = S.listProfiles();
  accZone.innerHTML = `
    <p class="small" style="margin:8px 0 4px"><b>Profil actif :</b> ${active ? esc(active.name) : "Invité (sans compte)"} <span class="muted">— progression enregistrée sur cet appareil</span></p>
    ${profiles.length ? `<div class="chips" style="margin:6px 0 10px;flex-wrap:wrap">${profiles.map((p) =>
      `<button class="chip ${active?.id === p.id ? "on" : ""}" data-pid="${p.id}">👤 ${esc(p.name)}</button>`).join("")}
    </div>` : ""}
    <details style="margin-top:6px">
      <summary class="small" style="cursor:pointer;color:var(--teal)">➕ Créer un nouveau compte local</summary>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
        <input type="text" id="acc-name" placeholder="Nom du profil (ex. Jamal)" style="flex:1;min-width:160px;padding:8px;border:1px solid var(--border);border-radius:8px;background:transparent;color:inherit">
        <input type="password" id="acc-pass" placeholder="Mot de passe (4+ caractères)" style="flex:1;min-width:160px;padding:8px;border:1px solid var(--border);border-radius:8px;background:transparent;color:inherit">
        <button class="btn primary" id="acc-create">Créer et activer</button>
      </div>
      <p class="small muted" style="margin-top:6px">Le compte et le mot de passe restent sur cet appareil : ils permettent simplement de séparer les progressions et d'éviter un changement de profil accidentel.</p>
    </details>
    ${active ? `<button class="btn soft" id="acc-logout" style="margin-top:10px">Se déconnecter (revenir en invité)</button>` : ""}`;
  accZone.querySelectorAll("[data-pid]").forEach((chip) => chip.onclick = () => {
    const p = profiles.find((x) => x.id === chip.dataset.pid);
    const pass = prompt(`Mot de passe du profil « ${p.name} » :`);
    if (pass === null) return;
    try { S.loginProfile(p.name, pass); alert(`Bienvenue, ${p.name} ! Progression chargée.`); location.reload(); }
    catch (e) { alert(e.message); }
  });
  const createBtn = accZone.querySelector("#acc-create");
  if (createBtn) createBtn.onclick = () => {
    const name = accZone.querySelector("#acc-name").value;
    const pass = accZone.querySelector("#acc-pass").value;
    try { const p = S.createProfile(name, pass); alert(`Compte « ${p.name} » créé sur cet appareil. Bonne chance ! 🎉`); location.reload(); }
    catch (e) { alert(e.message); }
  };
  const logoutBtn = accZone.querySelector("#acc-logout");
  if (logoutBtn) logoutBtn.onclick = () => { S.logoutProfile(); alert("Déconnecté — mode invité. La progression du profil reste enregistrée sur l'appareil."); location.reload(); };

  el.querySelector("#adm").onchange = (e) => S.mutate((s) => { s.admin = e.target.checked; });
  el.querySelector("#ex").onclick = () => {
    const blob = new Blob([S.exportData()], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "mes-donnees-audit-normes.json"; a.click();
  };
  el.querySelector("#del").onclick = () => {
    if (confirm("Supprimer définitivement toutes vos données locales ?")) { S.resetAll(); alert("Données supprimées."); location.hash = "#/"; }
  };
}

// ————— SOUTENIR (don volontaire) —————
export async function premiumView(el) {
  el.innerHTML = `
  <div class="crumbs"><a href="#/">Accueil</a> › <b>Faire un don</b></div>
  <div class="prem-hero">
    <span class="prem-crown">❤️</span>
    <h1 style="font-size:26px">Audit Normes est <span class="prem-badge">gratuite</span></h1>
    <p>Tout le contenu est accessible sans payer : Normes, check-lists illimitées, quiz illimités, cas pratiques, assistant et exports PDF/Excel.</p>
  </div>

  <div class="card pad" style="max-width:560px;margin:18px auto 0">
    <b>💡 Comment le projet est financé</b>
    <p class="small" style="margin:8px 0 0">L'application est financée par la <b>publicité</b> affichée dans l'application et, si vous le souhaitez, par vos <b>dons volontaires</b>. Un don aide à couvrir l'hébergement, les outils de développement et les nouvelles fonctionnalités (plus de quiz, de cas pratiques, de révisions du contenu).</p>
  </div>

  <div class="card pad" style="max-width:560px;margin:14px auto 0;text-align:center">
    <b>☕ Soutenir Audit Normes</b>
    <p class="small muted" style="margin:6px 0 14px">Don ponctuel et libre, traité intégralement par PayPal (compte PayPal ou carte bancaire). Aucune carte n'est partagée avec l'application, et le don n'est pas requis pour utiliser l'application.</p>
    <div id="paypal-container-XG7NF366MDFAG" class="paypal-donate" style="min-height:60px;width:100%;max-width:400px;margin:0 auto"></div>
    <a class="btn primary" id="donate-fallback" href="${B.PAYPAL_DONATE.fallbackUrl}" target="_blank" rel="noopener" style="min-width:240px">❤️ Faire un don via PayPal</a>
    <p class="small muted" id="donate-note" style="margin-top:8px">Ouverture de PayPal…</p>
  </div>

  <div class="card pad" style="max-width:560px;margin:14px auto 0">
    <b>✅ Ce qui est inclus, gratuitement</b>
    <div class="prem-features" style="margin-top:8px">
      <div class="pf on">📚 Toutes les Normes 2024 et le glossaire</div>
      <div class="pf on">✅ Check-lists illimitées + exports PDF/Excel</div>
      <div class="pf on">🧠 Quiz illimités (général, domaines, normes)</div>
      <div class="pf on">🎯 10 cas pratiques avec raisonnements</div>
      <div class="pf on">🤖 Assistant « Demandez aux Normes »</div>
      <div class="pf on">📊 Progression, favoris et comptes locaux</div>
    </div>
  </div>
  <p class="small muted" style="margin-top:12px;text-align:center"><a href="#/confidentialite" style="color:var(--teal)">Politique de confidentialité</a></p>
  ${srcNote("")}`;
  // Bouton de secours visible immédiatement (fonctionne partout) ; si le
  // widget PayPal se charge, on le masque au profit des vrais boutons PayPal.
  const rendered = await B.renderDonateButton(el.querySelector("#paypal-container-XG7NF366MDFAG"));
  if (rendered) {
    el.querySelector("#donate-fallback").style.display = "none";
    const note = el.querySelector("#donate-note");
    if (note) note.remove();
  } else {
    const note = el.querySelector("#donate-note");
    if (note) note.textContent = "Si le bouton PayPal ne s'affiche pas ci-dessus, utilisez le bouton ci-dessus : il ouvre la page officielle du don.";
  }
}

// ————— POLITIQUE DE CONFIDENTIALITÉ —————
export function privacyView(el) {
  el.innerHTML = `
  <div class="crumbs"><a href="#/">Accueil</a> › <b>Politique de confidentialité</b></div>
  <h1 style="font-size:24px">Politique de confidentialité</h1>
  <p class="small muted">Dernière mise à jour : 23 septembre 2026</p>

  <div class="card pad" style="margin-top:14px">
    <b>1. Principe général : aucune collecte sur nos serveurs</b>
    <p class="small" style="margin-top:6px">Audit Normes ne demande aucune inscription et ne collecte, ne transmet et ne stocke <b>aucune donnée personnelle sur un serveur</b>. L'application fonctionne intégralement sur votre appareil.</p>
  </div>

  <div class="card pad" style="margin-top:14px">
    <b>2. Données stockées localement (localStorage)</b>
    <p class="small" style="margin-top:6px">Vos préférences et votre activité sont enregistrées <b>uniquement dans le stockage local de votre navigateur ou de l'application</b> : thème d'affichage, progression aux quiz, check-lists, favoris, notes, statut Premium (mode de démonstration). Ces données ne quittent jamais votre appareil, ne sont pas chiffrées côté serveur (aucun serveur n'existe) et sont supprimées si vous effacez les données de l'application ou utilisez la fonction « Supprimer mes données » dans Paramètres.</p>
  </div>

  <div class="card pad" style="margin-top:14px">
    <b>3. Publicité (version gratuite)</b>
    <p class="small" style="margin-top:6px">La version gratuite est financée par la publicité :</p>
    <ul class="small" style="margin-top:4px;padding-left:18px">
      <li><b>Application Android</b> : Google AdMob (Google LLC) peut afficher des annonces et utiliser à cette fin des identifiants d'appareil et des données d'usage, conformément à ses propres règles (<a href="https://policies.google.com/technologies/ads" target="_blank" style="color:var(--teal)">policies.google.com/technologies/ads</a>). Vous pouvez refuser la personnalisation dans les paramètres de votre compte Google.</li>
      <li><b>Version web</b> : un réseau publicitaire (ex. Google AdSense) peut déposer des cookies similaires.</li>
      <li><b>Version Premium</b> : aucune publicité n'est affichée.</li>
    </ul>
    <p class="small" style="margin-top:6px">Pour les visiteurs de l'Espace économique européen, un bandeau de consentement permet d'accepter ou de refuser les cookies publicitaires avant tout dépôt.</p>
  </div>

  <div class="card pad" style="margin-top:14px">
    <b>4. Publicité et dons</b>
    <p class="small" style="margin-top:6px">Audit Normes est <b>100 % gratuite</b> : aucun achat intégré. L'application est financée par la publicité (AdMob dans l'app Android, Google AdSense sur le site) et par des <b>dons volontaires</b> via PayPal. Le don est optionnel : PayPal traite le paiement et ne nous transmet pas vos données bancaires. Les utilisateurs Premium historiques (si l'appareil en conserve la trace) ne sont plus sollicités.</p>
  </div>

  <div class="card pad" style="margin-top:14px">
    <b>5. Vos droits (RGPD)</b>
    <p class="small" style="margin-top:6px">Comme aucune donnée personnelle n'est collectée par l'éditeur, il n'existe pas de données à exporter depuis nos serveurs. Vous gardez néanmoins le contrôle total : <b>Exporter mes données</b> (fichier JSON lisible) et <b>Supprimer mon compte et mes données</b> (effacement complet du stockage local) sont disponibles dans <a href="#/parametres" style="color:var(--teal)">Paramètres</a>. Pour toute question relative à la confidentialité : <b>lesnormes2024@gmail.com</b>.</p>
  </div>

  <div class="card pad" style="margin-top:14px">
    <b>6. Modifications</b>
    <p class="small" style="margin-top:6px">La présente politique peut évoluer (nouvelles fonctions, mise en place d'une synchronisation optionnelle). Toute version actualisée sera publiée à cette même adresse avec une nouvelle date de mise à jour.</p>
  </div>
  ${srcNote("")}`;
}
