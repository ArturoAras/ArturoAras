//JavaScript en el backend


//Tipos de variables
//Tipo primitivo = incluyen cadenas de texto (strings), variables booleanas y números. Además hay dos tipos primitivos especiales que son Null y Undefine. La copia es por valor.
//Tipo Objeto = incluyen a los objetos (Object), a los arrays (Array) y funciones. La copia es por referencia.


//Declaraciones y variables hasta ECMAScript6
//Palabra clave "let" para variables y "const" para constantes.
//Las constantes no pueden ser reasignadas pero si pueden mutar
//  NO REASIGNABLE != INMUTABLE
//Mutabilidad
const user = { name: "Juan"};
user.name = "Mauro";                      //Esto es posible
consolelog(user.name);

const usuario = "Juan";
usuario = "Mauro";                       //Esto no es posible
console.log(usuario);                    //TypeError: Assignment to constant


//Funciones
//Anónimas = cuando se define sin un nombre se la conoce como anónima. Se almacena en la memoria pero el tiempo de ejecución no crea automáticamente una referencia a la misma. Ejemplo =
let variable = function(parametro1, parametro2) {
    let resultado = parametro1 + parametro2;
    return resultado;
}

//IIFE = las expresiones de funcion ejecutadas inmediatamente (Inmediately Invoked Function Expressions), son funciones que se ejecutan apenas se definen.
//Se componen de dos clases: a)funcion anónima con alcance léxico encerrado por el operador de agrupación(). b)expresión de función cuya ejecución es inmediata. Ejemplo = 
(function saludar(){
    console.log("¡Hola a todos!");
})();

//Closure = es una función que guarda referencias del estado adyacente. En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JS, las clausuras se crean cada vez que una función es creada.
//Un closure es un tipo especial de objeto que combina dos cosas: una función y el entorno en el que se creó el closure. En este caso, GritarCH es un closure que incorpora la función anónima, junto con el parámetro nombre y el strin "!!!". Ejemplo = 
function crearGritarNombre(nombre){
    const signos = "!!!";
    return function(){
        console.lod(`${nombre}${signos}`);
    }
}
const GritarCH = crearGritarNombre('Coderhouse');


//Callbacks = en JS es posible asignar una función a una variable. Esto es porque internamente, las funciones también son objetos. Es or esto que JS nos permite hacer que una función reciba como parámetro una referencia a otra función. Convenciones =
// a)El callback siempre es el último parámetro.
// b)El callback suele ser una función que recibe dos parámetros.
// c)Si la operación fue exitosa, la función llamará al callback pasando null como rimer parámetro y si generó algún resultado este se pasará como segundo parámetro.
// d)Si la operación resultó en un error, la función llamará al callback pasando el error obtenido como primer parámetro.