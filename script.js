/* ─── данные и отрисовка кошельков без транзакций ────────────── */
const wallets = [
  { name: "Visa", current: "RUB", class: "red" },
  { name: "Visa", current: "RUB", class: "purple" },
  { name: "Visa", current: "RUB", class: "green" },
  { name: "Visa", current: "RUB", class: "blue" },
  { name: "Visa", current: "RUB", class: "yellow" },
  { name: "Visa", current: "RUB", class: "orange" },
  { name: "Visa", current: "RUB", class: "pink" }
];

function createWalletElement({ name, current, class: className }) {
  const div = document.createElement("div");
  div.className = `wallet ${className}`;
  div.innerHTML = `
    <span class="card-type">${name}</span>
    <span class="currency">${current}</span>`;
  return div;
}

function renderWallets() {
  const container = document.getElementById("wallets-container");
  if (!container) return console.error("Нет контейнера .wallets-container!");
  container.innerHTML = "";
  wallets.forEach(w => container.appendChild(createWalletElement(w)));
}

document.addEventListener("DOMContentLoaded", renderWallets);
