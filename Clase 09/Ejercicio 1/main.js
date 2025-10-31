window.addEventListener('load', function() {

    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover",function(){
        let nombre = prompt("¿COMO TE LLAMAS?: ")
        let texto = document.querySelector("#saludo");
        if (nombre == undefined){
            texto.innerText = "Bienvenido Usuario Random"
        }
        else{
            texto.innerText =  "Bienvenido " + nombre
            texto.style.textTransform = "uppercase"
            
        }
        titulo.style.display = "none"
        selectorPersonaje = document.querySelector("#selectPersonaje")
        selectorPersonaje.style.display = "block"

        selectorPersonaje.addEventListener("click", function(){
            document.querySelector(".bienvenida").style.display = "none"
            document.querySelector(".personajes").style.display = "flex"
        })
    });

    let bart = this.document.querySelector("#bart");
    let lisa = this.document.querySelector("#lisa");
    let homero = this.document.querySelector("#homero");
    let marge = this.document.querySelector("#marge");
    let maggie = this.document.querySelector("#maggie");
    let milhouse = this.document.querySelector("#milhouse");
    let burns = this.document.querySelector("#burns");
    let bobPatinio = this.document.querySelector("#bobPatinio");
    let flanders = this.document.querySelector("#flanders");
    let duffman = this.document.querySelector("#duffman");
    let gorgory = this.document.querySelector("#gorgory");
    let nelson = this.document.querySelector("#nelson");

    bart.addEventListener("click",function(){
        this.style.backgroundColor = "yellow"
    })
    lisa.addEventListener("dblclick",function(){
        this.style.backgroundColor = "yellow"
    })
    homero.addEventListener("click",function(){
        this.style.backgroundColor = "yellow"
    })
    marge.addEventListener("mouseover",function(){
        this.style.backgroundColor = "yellow"
    })
    maggie.addEventListener("mouseout",function(){
        this.style.backgroundColor = "yellow"
    })
    milhouse.addEventListener("click",function(){
        this.style.backgroundColor = "yellow"
    })
    burns.addEventListener("mouseover",function(){
        this.style.backgroundColor = "yellow"
    })
    bobPatinio.addEventListener("dblclick",function(){
        this.style.backgroundColor = "yellow"
    })
    flanders.addEventListener("mouseover",function(){
        this.style.backgroundColor = "yellow"
    })
    duffman.addEventListener("dblclick",function(){
        this.style.backgroundColor = "yellow"
    })
    gorgory.addEventListener("mouseover",function(){
        this.style.backgroundColor = "yellow"
    })
    nelson.addEventListener("click",function(){
        this.style.backgroundColor = "yellow"
    })

 }) 