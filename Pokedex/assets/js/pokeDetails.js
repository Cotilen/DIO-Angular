//Função para fazer o fetch 
const fetchPokeDetail = async function(id) {

        let url = `https://pokeapi.co/api/v2/pokemon/${id}`

        let response = await fetch(url)
        let data = await response.json()

        const details = () => {
                const pokemon = document.getElementById('pokemon').innerHTML = `
        <div class="title">
            <span>${data.name}</span>
            <p>#${data.id}</p>
        </div>
        <div class="img">
            <img src=${data.sprites.other.dream_world.front_default} alt="${data.name}">
        </div>
        <ol class="types">
        ${data.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
        </ol>
    `
        }

        const about = () =>{

            // let urlAbout = `https://pokeapi.co/api/v2/pokemon-species/${id}`

            // let responseAbout = await fetch(urlAbout)
            // let dataAbout = await responseAbout.json()


        }


details()
        
}

fetchPokeDetail(1)