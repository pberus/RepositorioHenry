function deObjetoAarray(objeto) {
    // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
    // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
    // Estos elementos debe ser cada par clave:valor del objeto recibido.
    // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
    // Tu código:
    var array = [] //Creo un array padre
    var claves = Object.keys(objeto) //Creo otro array para guardar las propiedades de objeto, claves = ["D", "B", "C"]
    for (i=0; i<claves.length; i++){ //Creo un for para iterar por cada propiedad del array claves y pushearlas dentro de otro array
       var letra = claves[i]         //Cada iteracion guardo cada propiedad, o sea, cada letra para despues pushearlas
       array.push([letra, objeto[letra]]) //Dentro del arreglo padre pusheo un arreglo [] con la letra o propiedad y los elementos de esa letra o propiedad usando objeto[letra]
    }
    return array
 }

 //Todos los demas tambien, estan en el otro repositorio