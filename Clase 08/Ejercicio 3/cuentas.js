let num1A = prompt("Numero 1: ")
let num2A = prompt("Numero 2: ")

function multiplicar(num1,num2){
    let cuenta = num1 * num2
    let mensaje = "El resultado de multiplicar " + num1 + " y " + num2 + " es: " + cuenta
    return mensaje 
}
console.log(multiplicar(num1A,num2A))

