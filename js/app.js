// Router + shell (navigation, thème, drawer, PWA).
import * as V from "./views.js";
import * as S from "./store.js";
import { initAds, updateAds } from "./ads.js";
import { initBilling } from "./billing.js";

const NAV = [
  ["#/accueil", "🏠", "Accueil"],
  ["#/normes", "📚", "Explorer les Normes"],
  ["#/recherche", "🔎", "Recherche"],
  ["#/checklists", "✅", "Check-lists"],
  ["#/quiz", "🧠", "Quiz"],
  ["#/cas", "🎯", "Cas pratiques"],
  ["#/progression", "📊", "Ma progression"],
  ["#/favoris", "⭐", "Mes favoris"],
  ["#/glossaire", "📖", "Glossaire"],
  ["#/assistant", "🤖", "Assistant"],
  ["#/premium", "❤️", "Faire un don"],
  ["#/parametres", "⚙️", "Paramètres"],
];
const BOTTOM = [["#/accueil", "🏠", "Accueil"], ["#/normes", "📚", "Normes"], ["#/recherche", "🔎", "Recherche"], ["#/quiz", "🧠", "Quiz"], ["#/parametres", "👤", "Profil"]];

const $ = (sel) => document.querySelector(sel);
const view = $("#view");

function renderNav(current) {
  $("#nav").innerHTML = NAV.map(([h, i, l]) => `<a href="${h}" class="${current.startsWith(h) && h !== "#/accueil" || current === h ? "active" : ""}"><span class="ico">${i}</span>${l}</a>`).join("");
  $("#bottomnav").innerHTML = BOTTOM.map(([h, i, l]) => `<a href="${h}" class="${current === h ? "active" : ""}"><span class="ico">${i}</span>${l}</a>`).join("");
}

function applyTheme() {
  const t = S.state.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = t;
  $("#theme-btn").textContent = t === "dark" ? "🌙 Dark" : "☀️ Light";
}
window.applyTheme = applyTheme;

function closeDrawer() {
  $("#sidebar").classList.remove("open");
  document.querySelector(".drawer-mask")?.remove();
}

function route() {
  const h = location.hash.replace(/^#/, "") || "/accueil";
  const [path] = h.split("?");
  const p = path.split("/").filter(Boolean);
  closeDrawer();
  renderNav("#/" + (p[0] || "accueil"));
  applyTheme();
  window.scrollTo(0, 0);
  try {
    if (p[0] === "accueil" || p.length === 0) V.home(view);
    else if (p[0] === "normes") V.explore(view);
    else if (p[0] === "domaine") V.domain(view, +p[1]);
    else if (p[0] === "principe") V.principleView(view, +p[1], +p[2]);
    else if (p[0] === "norme") V.standard(view, p[1], p[2] || "syn");
    else if (p[0] === "recherche") V.searchView(view);
    else if (p[0] === "glossaire") V.glossaryView(view, p[1] ? decodeURIComponent(p[1]) : "");
    else if (p[0] === "checklists") V.checklists(view);
    else if (p[0] === "quiz" && p[1] === "run") V.quizRun(view, p[2], p[3]);
    else if (p[0] === "quiz") V.quizHome(view);
    else if (p[0] === "cas") V.casesView(view);
    else if (p[0] === "progression") V.progressView(view);
    else if (p[0] === "favoris") V.favoritesView(view);
    else if (p[0] === "assistant") V.assistantView(view);
    else if (p[0] === "admin") V.adminView(view);
    else if (p[0] === "premium") V.premiumView(view);
    else if (p[0] === "confidentialite") V.privacyView(view);
    else if (p[0] === "parametres") V.settingsView(view);
    else V.home(view);
  } catch (e) {
    view.innerHTML = `<div class="empty"><span class="ico">⚠️</span>Une erreur est survenue : ${V.esc(e.message)}</div>`;
    console.error(e);
  }
  updateAds();
}

// Norme route special: #/norme/2.1 → p = ["norme","2","1"]? No: "2.1" stays one segment. But "#/quiz/run/d2" ok.
// tabs: #/norme/2.1/req handled by p[2]||"syn" — but "2.1" is single segment. Good.

$("#theme-btn").onclick = () => {
  const cur = document.documentElement.dataset.theme;
  S.mutate((s) => { s.theme = cur === "dark" ? "light" : "dark"; });
  applyTheme();
};
$("#menu-btn").onclick = () => {
  const sb = $("#sidebar");
  sb.classList.add("open");
  const mask = document.createElement("div");
  mask.className = "drawer-mask";
  mask.onclick = closeDrawer;
  document.body.appendChild(mask);
};
$("#search-btn").onclick = () => { location.hash = "#/recherche"; };
$("#profile-btn").onclick = () => { location.hash = "#/parametres"; };
window.addEventListener("hashchange", route);

applyTheme();
route();
initAds();
initBilling();
window.updateAds = updateAds;

// PWA — désactivé dans la version native Capacitor (le bundle embarque déjà les assets)
const isNative = typeof window.Capacitor !== "undefined";
if (!isNative && "serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
