const wallets = [
  { name: "Visa", current: "RUB", class: "red" },
  { name: "Visa", current: "RUB", class: "purple" },
  { name: "Visa", current: "RUB", class: "green" },
  { name: "Visa", current: "RUB", class: "blue" },
  { name: "Visa", current: "RUB", class: "yellow" },
  { name: "Visa", current: "RUB", class: "orange" },
  { name: "Visa", current: "RUB", class: "pink" }
];

const newWallets = wallets.map(w => ({ name: w.name, current: w.current, class: w.class }));

const transactions = Array.from({ length: 7 }, () => ({
  id: "1232312",
  card: "Visa",
  category: "Автомобиль",
  amount: "414,000,000",
  when: "4 дня назад"
}));

const createWalletElement = ({ name, current, class: className }) => {
  const div = document.createElement("div");
  div.className = `wallet ${className}`;
  div.innerHTML = `<span class="card-type">${name}</span><span class="currency">${current}</span>`;
  return div;
};

const createTransactionRow = ({ id, card, category, amount, when }) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td data-label="ID">${id}</td>
    <td data-label="Кошелёк">${card}</td>
    <td data-label="Категория">${category}</td>
    <td data-label="Сумма">${amount}</td>
    <td data-label="Когда">${when}</td>`;
  return tr;
};

const render = () => {
  const wContainer = document.getElementById("wallets-container");
  const tBody = document.getElementById("transactions-body");
  if (!wContainer || !tBody) return console.error("Контейнеры не найдены!");
  
  wContainer.innerHTML = "";
  tBody.innerHTML = "";
  
  newWallets.forEach(w => wContainer.appendChild(createWalletElement(w)));
  transactions.forEach(tx => tBody.appendChild(createTransactionRow(tx)));
};

render();