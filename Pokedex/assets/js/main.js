const criarPokemon = (poke) => {

    const pokemon = document.createElement('li')
    pokemon.classList.add('pokemon')

    // const number = document.createElement('span')
    // number.classList.add('number')
    // number.textContent = 00

    const name = document.createElement('span')
    name.classList.add('name')
    name.textContent = poke.name

    pokemon.append(name)

    return pokemon

}

const carregarPokemon = async() => {

    const offset = 0
    const limit = 10
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    let response = await fetch(url)
    let data = await response.json()
    let pokemon = await data.results

    console.log(url);

    const pokemons = document.getElementById('pokemons')

    const pokes = pokemon.map(criarPokemon)

    pokemons.replaceChildren(...pokes)
}

carregarPokemon()