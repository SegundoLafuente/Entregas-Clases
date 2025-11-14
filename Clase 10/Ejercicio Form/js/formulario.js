let formulario = document.querySelector('.contact-form')
let nombre = document.querySelector("#fullName")
let mail = document.querySelector('#email')
let tel = document.querySelector('#phone')
let contra = document.querySelector('#password')
let reContra = document.querySelector('#rePassword')

let errorN = document.querySelector('.fullName')
let errorM = document.querySelector('.email')
let errorT = document.querySelector('.phone')
let errorC = document.querySelector('.password')
let errorRC = document.querySelector('.rePassword')

formulario.addEventListener('submit',function(event){
    event.preventDefault()
    if(nombre.value == '' || mail.value == '' || (tel.value).length < 8 || (contra.value).length < 3 || contra.value != reContra.value){
        if(nombre.value == ''){
            errorN.innerHTML = "<p>No puede estar vacio</p>"
            errorN.style.display = 'block'
        }
        if(mail.value == ''){
            errorM.innerHTML = "<p>No puede estar vacio</p>"
            errorM.style.display = 'block'
        }
        if((tel.value).length < 8){
            errorT.innerHTML = '<p> el telefono debe tener 8 caracteres como minimo </p>'
            errorT.style.display = 'block'
        }
        if((contra.value).length < 3 ){
            errorC.innerHTML = '<p> minimo 3 caracteres </p>'
            errorC.style.display = 'block'
        }
        if(reContra.value != contra.value){
            errorRC.innerHTML = '<p>debe ser igual a la contraseña</p>'
            errorRC.style.display = 'block'
        }
        
        if(nombre.value != ''){
             errorN.style.display = 'none'
        }
        if(mail.value != ''){
            errorM.style.display = 'none'
        }
        if((tel.value).length >= 8){
            errorT.style.display = 'none'
        }
        if((contra.value).length >= 3 ){
            errorC.style.display = 'none'
        }
        if(reContra.value == contra.value){
            errorRC.style.display = 'none'
        }
    }

    else{
        this.submit()
    }
    
})