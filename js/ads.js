// Publicité — application 100 % gratuite financée par la pub (+ dons volontaires).
// En web : bannière d'information. En natif (Capacitor) : bannière AdMob réelle.
import * as S from "./store.js";

export const isNative = () => typeof window.Capacitor !== "undefined";

// IDs AdMob réels — compte "Audit Normes" (admob.google.com).
export const ADMOB_IDS = {
  appId: "ca-app-pub-7718254448313018~2132566598",       // App ID Android
  bannerId: "ca-app-pub-7718254448313018/4170648984",    // Bloc bannière
};

// Google AdSense — site web (adsense.google.com). Script + meta déjà dans index.html.
export const ADSENSE_CLIENT = "ca-pub-2797254259993125";
// Numéro data-ad-slot à copier ici après création du bloc d'annonce dans AdSense.
export const ADSENSE_AD_SLOT = "";

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
  // — Publicité web : Google AdSense (affichage réel dès que le compte est validé) —
  document.getElementById("ad-root")?.remove();
  const wrap = document.createElement("div");
  wrap.id = "ad-root";
  wrap.className = "ad-banner";
  if (ADSENSE_AD_SLOT) {
    // Bloc d'annonce display responsive (AdSense) — inséré comme le ferait AdSense.
    wrap.innerHTML = `<ins class="adsbygoogle" style="display:block;width:100%;max-width:728px;height:60px"
      data-ad-client="${ADSENSE_CLIENT}" data-ad-slot="${ADSENSE_AD_SLOT}"
      data-ad-format="horizontal" data-full-width-responsive="true"></ins>`;
    document.getElementById("main").appendChild(wrap);
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense push:", e?.message || e);
    }
  } else {
    // Tant que le compte AdSense n'est pas validé : bannière d'information.
    const el = document.createElement("a");
    el.href = "#/premium";
    el.innerHTML = `<span class="ad-ico">📢</span>
      <span class="ad-txt"><b>Application gratuite</b> — financée par la publicité.
      ❤️ <u>Soutenir le projet avec un don</u></span>`;
    wrap.appendChild(el);
    document.getElementById("main").appendChild(wrap);
  }
}

export function removeAds() {
  document.getElementById("ad-root")?.remove();
  if (isNative()) hideNativeBanner();
}
