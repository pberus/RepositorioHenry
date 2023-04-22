//PROTOTIPOS
//Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.
//El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia.
//Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo. 
//Gracias a estos prototipos podremos acceder al constructor de cualquier objeto para modificarlo.

Array.prototype.mayorQueTres = function () {
    var arregloModificado = [];
    for (var i = 0; i < this.length; i++) {
           if (this[ i ] > 3) {
                  arregloModificado.push(false);
           } else {
                  arregloModificado.push(this[ i ]);
           }
    }
    return arregloModificado;
 };
  
 var arreglo = [1, 2, 3, 4, 5];
 var nuevoArreglo = arreglo.mayorQueTres();
 console.log(nuevoArreglo);

//Ejemplo
 class LatinoAmerica {
	constructor() {
		this.paises = [ ];
	};
};
 
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais('México');
console.log(continente.paises);