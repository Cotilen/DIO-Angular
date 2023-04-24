const pokemonOl = document.getElementById('pokemons')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 251
const limit = 8
let offset = 0

function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => pokemonOl.innerHTML += pokemons.map((pokemon) => `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

        <img src=${pokemon.photo} alt="${pokemon.name}">
    </div>
</li>
    `).join(''))
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click',() =>{
    offset += limit

    const qtRecord = offset + limit

    if(qtRecord >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset,newLimit)

        loadMoreButton.parentElement.remove(loadMoreButton)
    }else
    loadPokemonItens(offset,limit)
})