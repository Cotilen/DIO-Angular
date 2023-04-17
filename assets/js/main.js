const criarCardsCurso = (poke) => {

    const pokemon = document.createElement('li')
    pokemon.classList.add('pokemon')

    const number = document.createElement('span')
    number.classList.add('number')
    number.textContent = 00

    const name = document.createElement('span')
    name.classList.add('name')
    name.textContent = poke.name

    pokemon.append(number, name)

    return pokemon

}

const carregarPokemon = async() => {

    const offset = 0
    const limit = 10
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    let response = await fetch(url)
    let data = await response.json()
    let pokemon = await data.results

    console.log(pokemon);


    const buttons = document.getElementById('boxs')

    const courses = cursos.map(criarCardsCurso)

    buttons.replaceChildren(...courses)
}

carregarPokemon()
console.log('Sucesso!')