// ——— Soutenir le projet (dons) ———
// L'application est 100 % gratuite : aucun achat intégré.
// Financement : publicité (AdMob/AdSense) + dons volontaires via un bouton
// PayPal hébergé ("Hosted Button") créé depuis le compte PayPal du développeur.
// Le code ci-dessous est celui fourni par PayPal (bouton XG7NF366MDFAG).

export const PAYPAL_DONATE = {
  clientId: "BAASc2yn9Ov_jwp5k8cdv9Y5FEvwtYmXMutbQSHzxRZnrZkFrTci3MwcnWqnCU-7bxNVzA758gFJGPhYiI",
  hostedButtonId: "XG7NF366MDFAG",
  currency: "USD",
  // Lien de secours (format classique des boutons hébergés PayPal)
  fallbackUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XG7NF366MDFAG",
};

let sdkPromise = null;
function loadSdk() {
  if (window.paypal?.HostedButtons) return Promise.resolve();
  if (!sdkPromise) {
    sdkPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_DONATE.clientId}&components=hosted-buttons&disable-funding=venmo&currency=${PAYPAL_DONATE.currency}`;
      s.onload = resolve;
      s.onerror = () => { sdkPromise = null; reject(new Error("sdk-load-failed")); };
      document.head.appendChild(s);
    });
  }
  return sdkPromise;
}

// Rend le bouton de don PayPal dans le conteneur fourni.
// Retourne true si le bouton PayPal s'affiche, false sinon (utiliser fallbackUrl).
export async function renderDonateButton(containerEl) {
  try {
    await loadSdk();
    if (!window.paypal?.HostedButtons) throw new Error("sdk-missing");
    await window.paypal.HostedButtons({ hostedButtonId: PAYPAL_DONATE.hostedButtonId }).render(containerEl);
    return true;
  } catch (e) {
    console.warn("PayPal donate:", e?.message || e);
    return false;
  }
}

// Compat : les achats ont été retirés (tout est gratuit).
export async function initBilling() { /* aucun achat intégré */ }
