// Publicité — application 100 % gratuite financée par la pub (+ dons volontaires).
// En web : bannière d'information. En natif (Capacitor) : bannière AdMob réelle.
import * as S from "./store.js";

export const isNative = () => typeof window.Capacitor !== "undefined";

// IDs AdMob réels — compte "Audit Normes" (admob.google.com).
export const ADMOB_IDS = {
  appId: "ca-app-pub-7718254448313018~2132566598",       // App ID Android
  bannerId: "ca-app-pub-7718254448313018/4170648984",    // Bloc bannière
};

// Initialisation au démarrage de l'app (natif uniquement)
export async function initAds() {
  if (!isNative()) return; // en web, seule la bannière d'information est affichée par updateAds()
  try {
    const { AdMob } = window.Capacitor?.Plugins || {};
    if (!AdMob) return;
    await AdMob.initialize({
      requestTrackingAuthorization: false,
      initializeForTesting: false,
    });
    // La bannière est affichée/masquée à chaque navigation via updateAds()
  } catch (e) {
    console.warn("AdMob init:", e?.message || e);
  }
}

async function showNativeBanner() {
  const { AdMob } = window.Capacitor?.Plugins || {};
  if (!AdMob?.showBanner) return;
  try {
    await AdMob.showBanner({
      adId: ADMOB_IDS.bannerId,
      adSize: "ADAPTIVE_BANNER",
      position: "BOTTOM_CENTER",
      margin: 0,
    });
  } catch (e) {
    console.warn("AdMob showBanner:", e?.message || e);
  }
}

async function hideNativeBanner() {
  const { AdMob } = window.Capacitor?.Plugins || {};
  if (!AdMob?.hideBanner) return;
  try { await AdMob.hideBanner(); } catch { /* ignore */ }
}

// Appelé par le routeur après chaque rendu de page
export async function updateAds() {
  if (isNative()) {
    await showNativeBanner();
    return;
  }
  // — Bannière d'information (web) —
  document.getElementById("ad-root")?.remove();
  const el = document.createElement("a");
  el.id = "ad-root";
  el.className = "ad-banner";
  el.href = "#/premium";
  el.innerHTML = `<span class="ad-ico">📢</span>
    <span class="ad-txt"><b>Application gratuite</b> — financée par la publicité.
    ❤️ <u>Soutenir le projet avec un don</u></span>`;
  document.getElementById("main").appendChild(el);
}

export function removeAds() {
  document.getElementById("ad-root")?.remove();
  if (isNative()) hideNativeBanner();
}
