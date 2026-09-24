// ——— Achats sécurisés (PayPal, capture côté serveur) ———
// Trois produits, un seul tunnel :
//  • premium_lifetime    : Premium 12,99 € à vie (zéro pub, tout inclus)
//  • checklist_quiz_pack : check-lists + quiz illimités, 2,99 €
//  • export_single       : 1 export PDF/Excel, 0,99 €
// Les ordres sont créés et capturés par l'API de licences Supabase
// (dossier supabase/functions/) — aucune donnée de carte ne passe par l'app.
// Le même tunnel est utilisé en web et dans l'app Android (PayPal, pas de
// Google Play Billing tant que le plugin n'est pas ajouté).
import * as S from "./store.js";
import { isNative } from "./ads.js";

export const PREMIUM_PRODUCT_ID = "premium_lifetime";
export const PREMIUM_PRICE = "12,99 €";

// URL de l'API de licences — projet Supabase déployé.
export const API_BASE_URL = "https://yfmnopkxshkopwzofgdh.supabase.co/functions/v1";

// Slugs des fonctions déployées (create-order v1 : état gateway corrompu, v2 active).
const CREATE_ENDPOINT = "create-order-v2";
const CAPTURE_ENDPOINT = "capture-order";

// Client ID de l'app PayPal (developper.paypal.com → Apps & Credentials → Live).
// App "Audit Normes" — clés Live réelles (le secret côté serveur est dans les
// secrets Supabase : PAYPAL_CLIENT_ID / PAYPAL_SECRET).
export const SDK_CLIENT_ID = "BAAlWJwu0jQ90qG4XiselI6wK7jtUqWe_-lLZhmHCkYFws3zLWAMNpCRPoqGU2uQMcJYiLbmWwky0MsyLU";

// Catalogue client (miroir du catalogue serveur dans create-order-v2).
export const PRODUCTS = {
  premium_lifetime: { label: "Premium — accès à vie", price: "12,99 €" },
  checklist_quiz_pack: { label: "Check-lists & quiz illimités", price: "2,99 €" },
  export_single: { label: "Export PDF / Excel", price: "0,99 €" },
};

// Lance le tunnel d'achat (compatible web + app Android).
// Retourne : null (succès), "cancelled", ou un code d'erreur.
export async function purchasePremium() {
  return openCheckout("premium_lifetime");
}
export async function purchasePack() {
  return openCheckout("checklist_quiz_pack");
}
export async function purchaseExport() {
  return openCheckout("export_single");
}

// ——— Déverrouillage commun ———
function applyEntitlement(productId) {
  if (productId === "premium_lifetime") S.grantPremium();
  else if (productId === "checklist_quiz_pack") S.grantPack("checklistQuiz");
  else if (productId === "export_single") S.addExportCredits(1);
  window.updateAds && window.updateAds();
}

// ——— PayPal Checkout (boutons Smart Payment, capture serveur) ———
let checkoutOpen = false;
async function openCheckout(productId) {
  if (!API_BASE_URL) return "checkout-unavailable";
  if (checkoutOpen) return "busy";
  const prod = PRODUCTS[productId];
  if (!prod) return "unknown-product";
  checkoutOpen = true;
  const root = document.querySelector("#modal-root");
  root.innerHTML = `
  <div class="prem-modal-mask">
    <div class="card pad prem-modal">
      <b>💳 Achat sécurisé — ${prod.price}</b>
      <p class="small" style="margin:6px 0 2px"><b>${prod.label}</b></p>
      <p class="small muted" style="margin:6px 0 12px">Paiement sécurisé via PayPal (compte PayPal ou carte bancaire). Aucune carte n'est partagée avec l'application.</p>
      <div id="paypal-buttons"></div>
      <button class="btn soft" id="pp-cancel" style="margin-top:12px">Annuler</button>
    </div>
  </div>`;
  const close = () => { checkoutOpen = false; root.innerHTML = ""; };
  root.querySelector("#pp-cancel").onclick = close;
  root.querySelector(".prem-modal-mask").onclick = (e) => { if (e.target.classList.contains("prem-modal-mask")) close(); };

  // Charge le SDK PayPal une seule fois.
  if (!window.paypal) {
    await new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `https://www.paypal.com/sdk/js?client-id=${SDK_CLIENT_ID}&currency=EUR&components=buttons`;
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    }).catch(() => {});
  }
  if (!window.paypal) { close(); return "sdk-missing"; }
  const mask = root.querySelector(".prem-modal-mask");
  window.paypal.Buttons({
    style: { layout: "vertical", shape: "rect", color: "gold", height: 45 },
    createOrder: async () => {
      const r = await fetch(`${API_BASE_URL}/${CREATE_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId })
      });
      if (!r.ok) throw new Error("create-order " + r.status);
      const d = await r.json();
      return d.orderId;
    },
    onApprove: async (data) => {
      const r = await fetch(`${API_BASE_URL}/${CAPTURE_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: data.orderID, productId })
      });
      if (!r.ok) throw new Error("capture-order " + r.status);
      const d = await r.json();
      if (!d.licensed) throw new Error("not-licensed");
      applyEntitlement(productId);
      close();
      alert("Paiement confirmé — merci ! 🎉");
      location.reload(); // re-rend toute l'interface avec le nouvel accès
    },
    onCancel: () => { close(); },
    onError: (err) => { console.warn("PayPal:", err); close(); alert("Le paiement n'a pas abouti. Vérifiez votre connexion et réessayez."); }
  }).render(mask.querySelector("#paypal-buttons")).catch(() => { close(); });
  return null;
}

// ——— Google Play Billing (préparé pour un futur passage sur le Play Store) ———
// Le plugin n'est pas encore installé : l'app Android utilise le tunnel PayPal
// ci-dessus, identique au web. Ce bloc s'activera automatiquement si le plugin
// Capacitor "GooglePlayBilling" est ajouté un jour.
export async function initBilling() {
  if (!isNative()) return;
  const billing = window.Capacitor?.Plugins?.GooglePlayBilling;
  if (!billing) return; // plugin absent → PayPal est utilisé
  try { await billing.initialize({ debugMode: false }); } catch (e) { console.warn("Billing init:", e?.message || e); return; }
  try {
    await billing.getProducts({ productIds: [PREMIUM_PRODUCT_ID], productType: "inapp" });
  } catch (e) {
    console.warn("Billing getProducts:", e?.message || e, "— créer le produit « premium_lifetime » dans la Play Console.");
  }
}
