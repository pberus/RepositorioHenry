// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

// Ver lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Lenght
var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo'); 
//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
colores.unshift('Verde');
//El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
console.log(colores);

// POP y SHIFT
colores.shift();
//El método shift() elimina y devuelve el primer elemento de un arreglo.
colores.pop();
//El método pop() elimina y devuelve el último elemento de un arreglo.
console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');
//El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );
//El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');
//El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');
//El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )
//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );
//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
console.log(masUno);

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Camilo');
}
console.log(arr);