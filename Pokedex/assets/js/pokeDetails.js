
const id = 1
const pokemon = document.getElementById('pokemon')

const apiToPokeDetail = function(id){

    pokeApi.getPokemonsDetails(id)
    .then((pokes) => pokemon.innerHTML =+ pokes.map((pokeDetail) => `
    <div class="title ">
        <span>${pokeDetail.name}</span>
        <p>${pokeDetail.number}</p>
    </div>
    <div class="img">
        <img src=${pokeDetail.photo} alt="${pokeDetail.name}">
    </div>
    <ol class="types">
        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>

    `).join(''))


}

apiToPokeDetail(1)