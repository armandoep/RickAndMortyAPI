let boton = document.querySelector(".btnPersonaje")

//Por alguna razon no toma en cuenta el parametro name, aun estoy trabajando en solucionarlo
function fetchCharacters() {
    document.querySelector(".Personaje").style.display = 'none'
    var character1 = document.getElementById("inputPersonaje").value
    let url = `https://rickandmortyapi.com/api/character/?name=${character1}`
    console.log(url)
    console.log(character1)    
        fetch(url)
          .then(response => response.json())
          .then(characters => showCharacters(characters.results));
}


function showCharacters(characters) {
    document.querySelector(".Personaje").style.display = 'block'
    let div = document.querySelector(".listaPersonaje")
    
    characters.forEach(character => {
        
        let personaje = `
            <li>
                <img src="${character.image}" alt="" class="listaPersonajes"/> <br />
                ${character.name} <br />
                ${character.status} <br />
                ${character.gender}
            </li>
        `
        // let image = document.createElement('img')
        // image = character.image
        // personaje.appendChild(image).
        //personaje.innerHTML = `Nombre: ${character.name}`

        div.innerHTML += personaje
    });
}


boton.addEventListener("click", fetchCharacters)