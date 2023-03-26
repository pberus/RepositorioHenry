//Formas iguales de declarar una funcion:
//Primera
function sumaTres (x){
  return x + 3;
}
//Segunda
var sumaTres = function (x){
  return x + 3;
}
//Tercera
var sumaTres = (x) => {
    return x + 3;
  }

  //Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

  //Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c);

