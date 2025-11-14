fetch("https://rickandmortyapi.com/api/character")
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {

        let seccion = document.querySelector(".characterList")
        let characters = ""

    console.log(data);
    for(let i = 0; i<data.results.length; i++){
        characters = characters + `
    <article>
        <img src=${data.results[i].image} alt="">
        <a href="./detalle.html?id=${data.results[i].id}"><p>Name: ${data.results[i].name}</p></a>
        <p>Status: ${data.results[i].status}</p>
    </article>`

        console.log(characters)
    }
    seccion.innerHTML = characters
    })
    .catch(function(error) {
    console.log("Error: " + error);
    })