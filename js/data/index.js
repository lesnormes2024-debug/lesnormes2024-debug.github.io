// Agrégation du référentiel + index de recherche + moteur « Situation → Normes ».

import { domains, fundamentals, principles, SOURCE_LABEL } from "./meta.js";
import { standards as s2 } from "./dom2.js";
import { standards as s3 } from "./dom3.js";
import { standards as s4 } from "./dom4.js";
import { standards as s5 } from "./dom5.js";
import { glossary } from "./glossary.js";

export const standards = [...s2, ...s3, ...s4, ...s5];

// Numéro de domaine pour chaque norme : 1.x–5.x → II, 6.x–8.x → III, 9.x–12.x → IV, 13.x–15.x → V.
for (const st of standards) {
  const major = Number(st.num.split(".")[0]);
  st.dN = major <= 5 ? 2 : major <= 8 ? 3 : major <= 12 ? 4 : 5;
}

export const domainByN = (n) => domains.find((d) => d.n === n);
export const stdByNum = (num) => standards.find((s) => s.num === num);
export const principleByD = (dn) => principles.filter((p) => p.domain === dn);
export const stdsByPrinciple = (dn, pn) => standards.filter((s) => s.p === pn && domainByN(stdByNum(s.num))?.n === dn);
export const stdsOfDomain = (dn) => standards.filter((s) => domainByN(stdByNum(s.num))?.n === dn);

const norm = (x) => (x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

// Index de recherche
export const searchIndex = standards.map((s) => {
  const d = domainByN(s.dN);
  const pr = principles.find((p) => p.domain === s.dN && p.n === s.p);
  return {
    type: "Norme", ref: s.num, title: s.title, dom: d, principle: pr,
    hay: norm([s.num, s.title, s.sum, s.kw.join(" "), s.u.g, ...s.u.r, s.u.p, ...s.kw].join(" ")),
    std: s
  };
}).concat(
  glossary.map((g) => ({ type: "Définition", ref: "", title: g.t, dom: null, principle: null, hay: norm([g.t, g.d, g.k.join(" ")].join(" ")), term: g })),
  principles.map((p) => ({ type: "Principe", ref: "", title: `Principe ${p.n} — ${p.t}`, dom: domainByN(p.domain), principle: p, hay: norm([p.t, p.s].join(" ")), principle: p }))
);

export function search(q) {
  const nq = norm(q.trim());
  if (!nq) return [];
  const words = nq.split(/\s+/).filter(Boolean);
  const score = (idx) => {
    let sc = 0;
    const hay = idx.hay, title = norm(idx.title + " " + idx.ref);
    for (const w of words) {
      if (title.includes(w)) sc += 10;
      if (hay.includes(w)) sc += 3; else return -1;
    }
    if (idx.ref === q.trim()) sc += 50;
    return sc;
  };
  return searchIndex.map((i) => ({ i, sc: score(i) })).filter((x) => x.sc > 0)
    .sort((a, b) => b.sc - a.sc).slice(0, 30).map((x) => x.i);
}

// « Situation → Normes » : règles de correspondance (mots-clés par thème, fondés sur le contenu source).
const situationRules = [
  { kw: ["conflit", "ancien", "responsable", "12 mois", "paie", "période récente", "son activité"], stds: ["2.2", "2.1", "2.3"], why: "L'audit d'une activité dont l'auditeur était récemment responsable compromet présumément son objectivité (règle des 12 mois)." },
  { kw: ["cadeau", "avantage", "faveur", "invitation", "rémunération", "primes", "pot-de-vin"], stds: ["2.2", "2.3", "5.1"], why: "Cadeaux, récompenses et faveurs pouvant compromettre l'objectivité, et usage de l'information." },
  { kw: ["pression", "supprimer un constat", "supprimer le constat", "supprimer des constats", "retirer un constat", "retirer le constat", "modifier le rapport", "modifier les constats", "constat contesté", "désaccord", "intimidation", "menace"], stds: ["1.1", "8.1", "14.4", "11.2"], why: "Pression sur les constats : honnêteté et courage professionnel, escalade au Conseil, traitement des désaccords, qualité de la communication." },
  { kw: ["fraude", "vol", "détournement", "illégal", "corruption", "pot-de-vin"], stds: ["1.3", "11.4", "13.2", "14.3"], why: "Aspects légaux, communication des inconduites graves au Conseil, prise en compte de la fraude dans les risques et les constats." },
  { kw: ["confidentiel", "divulguer", "données personnelles", "fuite", "rgpd", "vie privée"], stds: ["5.2", "5.1", "10.3"], why: "Protection de l'information, usage de l'information et sécurité des technologies." },
  { kw: ["indépendance", "rattachement", "budget refusé", "accès refusé", "périmètre limité", "ingérence"], stds: ["7.1", "6.3", "11.4", "13.3"], why: "Indépendance au sein de l'organisation, soutien du Conseil, communication des atteintes et gestion des restrictions de périmètre." },
  { kw: ["charte", "mandat", "périmètre de la fonction"], stds: ["6.1", "6.2"], why: "Définition du mandat et de la charte approuvée par le Conseil." },
  { kw: ["compétence", "inexpérimenté", "formation", "qualifié"], stds: ["3.1", "3.2", "13.5"], why: "Compétence individuelle, formation continue et ressources de la mission." },
  { kw: ["plan d'audit", "prioriser", "risques", "planification annuelle"], stds: ["9.4", "9.1", "8.2"], why: "Plan fondé sur les risques, compréhension des processus et ressources suffisantes." },
  { kw: ["qualité", "évaluation externe", "programme qualité", "kpi", "indicateur"], stds: ["8.3", "8.4", "12.1", "12.2"], why: "Programme d'assurance et d'amélioration de la qualité, évaluations internes et externes, mesures de performance." },
  { kw: ["rapport final", "communication des résultats", "diffusion", "diffuser"], stds: ["15.1", "11.2", "11.3", "14.5"], why: "Communication des résultats définitifs, qualité de la communication, destinataires et conclusions." },
  { kw: ["suivi des recommandations", "mise en œuvre", "action corrective", "retard"], stds: ["15.2", "11.5", "14.4"], why: "Suivi des plans d'action, escalade des risques non traités, recommandations et plans d'action." },
  { kw: ["conseil", "huis clos", "réunion privée", "surveillance"], stds: ["6.3", "8.1", "7.1"], why: "Soutien du Conseil, relation et reporting, indépendance." },
  { kw: ["objectivité", "biais", "impartial"], stds: ["2.1", "2.2", "2.3"], why: "Objectivité individuelle, garanties et signalement des atteintes." }
];

export function matchSituation(text) {
  const n = norm(text);
  const res = [];
  for (const r of situationRules) {
    const hits = r.kw.filter((k) => n.includes(norm(k)));
    if (hits.length) res.push({ rule: r, hits, score: hits.length });
  }
  return res.sort((a, b) => b.score - a.score).slice(0, 4);
}

export { domains, fundamentals, principles, glossary, SOURCE_LABEL };
