/*if(condicion logica){
todas las lineas de codigo si se cumple la condicion logica
}*/

// crear un programa que solicite al usuario ingresar su edad y mostrar si es mayor de edad o no.

const edad = parseInt(prompt('ingrese su edad'));
// nan is not a number
console.log(edad)
//si la edad es mayor o igual a 18 años soy mayor de edad
if(edad = 18){
    document.write('edad ingresada '+ edad +', sos mayor de edad');
}else{
    document.write('edad ingresada '+ edad +', no sos mayor de edad');
}