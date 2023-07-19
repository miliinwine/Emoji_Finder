import { data } from "./data/data.js";

const list = document.querySelector(".conteiner");
function showCard(data) {
  list.innerHTML = "";
  data.forEach((el) => list.append(createCard(el)));
}
showCard(data);

function createCard(obj) {
  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<p class="card_symbol">${obj.symbol}</p>
                    <p class="card_title">${obj.title}</p> 
                    <p class="card_keywords">${[...func(obj.keywords)].join(" ")}</p>`;
  return card;
}

const search = document.querySelector(".input");
search.addEventListener("input", searchTitle);
function searchTitle() {
  let filter = search.value.toLowerCase().trim();
  let filteredData = data.filter(
    (elem) =>
      elem.keywords.toLowerCase().includes(filter) ||
      elem.title.toLowerCase().includes(filter)
  );
  showCard(filteredData);
}

function func(string) {
  const uniq = string.split(" ");
  return new Set(uniq);
}