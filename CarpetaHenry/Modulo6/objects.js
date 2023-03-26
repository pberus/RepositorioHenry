//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };
 var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };

 // ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
//Es lo mismo, solo cambia sin comillas(ej siguiente)
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

//BRACKET NOTATION PERO SIN COMILLAS
//(Solo para guardar una variable externa como propiedades de objetos)
var comidas = {}
var diferenciaDeNotaciones = function (propUno,propDos){
    comidas[propUno] = ["Frutas", "Vegetales"]
    comidas[propDos] = ["Hamburguesa", "Papas Fritas"]
}
diferenciaDeNotaciones("Saludable", "No saludable")
console.log(comidas)



// HAS OWN PROPERTY
//El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. 
//En cada caso devolverá true o false.
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
//El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

//BUCLE FOR IN
//El bucle For-In nos permite iterar sobre un objeto utilizando dos variables pivot. 
//Una representa el objeto que recorremos, y la otra la propiedad en la que se está realizando la iteración. 
//Utilizando ambos valores podremos acceder al valor de cada propiedad del objeto.
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

 //THIS
 //Este nos permite manipular el contexto en el que las funciones y la información está siendo ejecutada. 
 //De esta forma podremos tener un alcance más preciso dentro de nuestro código.
 //Si no pongo this, me sale que raza no esta declarada. Por eso se pone cuando esta todo dentro del mismo objeto.
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };