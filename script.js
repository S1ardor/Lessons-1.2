const docFrag = document.createDocumentFragment();
const eltext = document.querySelector(".js-text");
const elTemplate = document.querySelector(".js-template").content;

function renderList(pokemons, node) {
  pokemons.forEach((poke) => {
    const copyPokemons = elTemplate.cloneNode(true);

    copyPokemons.querySelector(".js-pokeNum").textContent = poke.num;
    copyPokemons.querySelector(".js-pokeImg").src = poke.img;
    copyPokemons.querySelector(".js-pokeName").textContent = poke.name;
    copyPokemons.querySelector(".js-pokeType").textContent =
      poke.type.join(" ");

    docFrag.appendChild(copyPokemons);
  });
  node.appendChild(docFrag);
}
renderList(pokemons, eltext);
