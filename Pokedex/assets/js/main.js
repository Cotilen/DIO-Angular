function pokemonToLi(pokemon) {

    const name = pokemon.name[0].toUpperCase() + pokemon.name.substring(1).toLowerCase()
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${name}</span>

    <div class="detail">
        <ol class="types">
        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>

        <img src=${pokemon.photo} alt="${name}">
    </div>
</li>
         `

}

const pokemonOl = document.getElementById('pokemons')


pokeApi.getPokemons()
    .then((pokemons = []) => pokemonOl.innerHTML = pokemons.map(pokemonToLi).join(''))