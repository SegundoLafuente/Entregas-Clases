let queryString = location.search
console.log(queryString)
let queryStringObj = new URLSearchParams(queryString)
console.log(queryStringObj)
let resultado = queryStringObj.get('id')
console.log(resultado)

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)
    .then(function(response) {
    return response.json()
    })
    .then(function(data){
        console.log(data)
        let seccion = document.querySelector("#seccion")
        seccion.innerHTML = `
        <article>    
            <h1>${data.name}</h1>
            <p>Status:${data.status}</p>
            <p>Especie:${data.species}</p>
            <img src="${data.image}" alt="">
        </article>`
        
    })