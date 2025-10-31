fetch('https://rickandmortyapi.com/api/character')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let personajes = document.querySelector('.characterList')
        let characters = ""
        for (let i=0; i<data.results.length; i++) {
        characters += `
        <article>
         <img src='${data.results[i].image}'  alt=''>
          <p>Name: ${data.results[i].name} </p>
          <p>Status: ${data.results[i].status} </p>
        </article>`
        }
        personajes.innerHTML = characters
        console.log(characters)
        console.log(data.results.length)
    })
    .catch(function(error){
        console.log(error)
    })