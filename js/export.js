// ——— Exports PDF / Excel (côté navigateur) ———
// Bibliothèques UMD chargées par index.html : window.jspdf (jsPDF) + window.XLSX (SheetJS).
// Version 100 % gratuite : exports illimités pour tous.
import * as S from "./store.js";

const libsReady = () => !!(window.jspdf?.jsPDF && window.XLSX);

function gate(run) {
  if (!libsReady()) { alert("Le module d'export n'est pas disponible (bibliothèques non chargées). Rechargez la page."); return; }
  try { run(); } catch (e) { console.error(e); alert("Erreur pendant l'export : " + (e?.message || e)); }
}

// ——— PDF ———
// sections : [{ h: "Titre de section", lines: ["…", "…"] }]
export function gatedPdf({ name, title, subtitle, sections }) {
  gate(() => buildPdf({ name, title, subtitle, sections }));
}

function buildPdf({ name, title, subtitle, sections }) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 48;
  let y = M;

  const ensure = (need) => {
    if (y + need <= H - 56) return;
    doc.addPage(); y = M;
  };

  doc.setFont("helvetica", "bold"); doc.setFontSize(16);
  doc.splitTextToSize(title, W - 2 * M).forEach((l) => { doc.text(l, M, y); y += 20; });
  if (subtitle) {
    doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(110);
    doc.splitTextToSize(subtitle, W - 2 * M).forEach((l) => { doc.text(l, M, y); y += 14; });
    doc.setTextColor(0);
  }
  y += 8;

  for (const sec of sections || []) {
    ensure(30);
    doc.setFont("helvetica", "bold"); doc.setFontSize(12);
    doc.splitTextToSize(sec.h, W - 2 * M).forEach((l) => { ensure(16); doc.text(l, M, y); y += 16; });
    doc.setFont("helvetica", "normal"); doc.setFontSize(10);
    for (const line of sec.lines || []) {
      const ls = doc.splitTextToSize(String(line), W - 2 * M);
      ensure(ls.length * 14);
      ls.forEach((l) => { doc.text(l, M, y); y += 14; });
    }
    y += 8;
  }

  const pages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(140);
    doc.text(`Audit Normes — auto-évaluation indicative, sans valeur de certification`, M, H - 28);
    doc.text(`${p} / ${pages}`, W - M, H - 28, { align: "right" });
    doc.setTextColor(0);
  }
  doc.save(sanitize(name) + ".pdf");
}

// ——— Excel ———
// rows : tableau de tableaux (première ligne = en-têtes). sections optionnel.
export function gatedXlsx({ name, sheetName, title, rows, sections }) {
  gate(() => buildXlsx({ name, sheetName, title, rows, sections }));
}

function buildXlsx({ name, sheetName, title, rows, sections }) {
  const XLSX = window.XLSX;
  const aoa = [];
  if (title) aoa.push([title]);
  if (sections) {
    for (const sec of sections) {
      if (aoa.length) aoa.push([]);
      aoa.push([sec.h]);
      (sec.lines || []).forEach((l) => aoa.push([typeof l === "string" ? l.replace(/<[^>]*>/g, "") : l]));
    }
  }
  if (rows?.length) {
    if (aoa.length) aoa.push([]);
    rows.forEach((r) => aoa.push(r));
  }
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 60 }, { wch: 24 }, { wch: 24 }, { wch: 40 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, (sheetName || "Export").slice(0, 30));
  XLSX.writeFile(wb, sanitize(name) + ".xlsx");
}

function sanitize(n) {
  return String(n).replace(/[\\/:*?"<>|]/g, "-").slice(0, 80);
}

// ——— Contenus prêts à l'emploi (labels de réponses check-list) ———
export const CL_LABEL = { oui: "Oui", partiel: "Partiellement", non: "Non", na: "Non applicable", undefined: "Sans réponse" };
