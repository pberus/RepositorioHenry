var suma = 0
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 //El Bucle For es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar. 
 //Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.

 while(suma < 3) {
    suma = suma + 1;
    console.log(suma);
};

//El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución

switch (expresión) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      break;
    case valor2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      break;
    case valorN:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      break;
  }

//La expresión Switch evalúa una condición. 
//Compara su valor con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

do
  sentencia
while (condición);

//El bucle Do-While (hacer mientras) ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. 
//La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

continue [ etiqueta ];

//La declaración continue se utiliza dentro de los Bucles For. 
//Nos permite omitir alguna de las iteraciones si se cumple una condición específica.

break [etiqueta];

//La declaración break se utiliza dentro de los Bucles For. 
//Nos permite "romper" o finalizar el bucle con antelación si se cumple una condición específica.

//Ejercicio complicado de la homework
function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
 }

 //Otro no tan complicado
 function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var contador =0
    var numero = num
    do{
       numero +=5
       contador ++
    } while (contador <8)
    return numero
 }