//Módulo nativo FILE SYSTEM
//fs es la abreiatura en inglés para file system o sistema de archivos y es, además, uno de los módulos básicos y útiles en NodeJS. En NodeJS es posible manipular archivos a través de fs (crear, leer, modificar, etc). La mayoría de las funciones que contiene este módulo pueden usarse tanto e manera sincrónica como asincrónica.
//Para poder usar este módulo solo debemos importarlo con la función REQUIRE al comienzo de nuestro archivo fuente =
const fs = require('fs');


//Operaciones sincrónicas
//Son operaciones bloqueantes que devuelven un resultado. Las funciones sincrónicas terminan con "Sync". Lista de funciones = 
//fs.readFileSync(path, encoding) = lectura de un archivo de forma sincrónica. El primer parámetro es un string con la ruta del archivo que queremos leer, el segundo parámetro indica el formato e codificación e caracteres con que fue escrito el dato que estamos leyendo ('utf-8' es el que se utiliza con mayor frecuencia).
//fs.writeFilSync(ruta, datos) = sobreescribe archivo. El primer parámetro es un string con la ruta del archivo que queremos escribir (si la ruta es válida pero el archivo no existe la función creará uno nuevo con el nombre previsto) y el segundo indica lo que queremos escribir. La función admite un tercer parámetro opcional para indicar el formato de codificación de caracteres con que queremos escribir el texto: por defecto 'utf-8'.
//fs.appendFileSync(ruta, datos) = agrega contenido al archivo. El primer parámetro e un string con la ruta del archivo al que se le quiere agregar contenido (si la ruta es válida pero el nombre no existe, la función creará un nueo archivo con el nombre provisto), el segundo parámetro indica lo que queremos agregar. La función admite un tercer parámetro opcional para indicar el formato de codificación de caracteres con que queremos escribir el texto: por defecto 'utf-8'.
//fs.unlinkSync(ruta) = el único parámetro es un string con la ruta del archivo que queremos borrar.
//fs.mkdirSync(ruta) = creación de una carpeta.

//Manejo de errores = ante una situación de error, las excepciones se lanzan inmediatamente y se pueden manejar usando try..catch. Esta forma de capturar errores se puede utilizar en todas las funciones sincrónicas de acceso al sistema de archivos.


//Funciones asincrónicas vía callbacks
//Las funciones asincrónicas tiene el mismo nombre que sus versiones sincrónicas, pero sin la palabra "Sync" al final. Son operaciones no bloquantes que reciben un nuevo último parámetro: un callback. Estos callbacks pueden recibir un primer parámetro destinado al error (si lo hubiere) para saber cómo manejarlo y un segundo parámetro, en caso que la función en cuestión devuelva algún resultado, para indicar qué hacer con el mismo. Para manejar los errores que pueden surgir de su ejecución, no será necesario ejecutarlas utilizando try/catch.
//fs.readFile(ruta, encoding, callback) = lectura de un archivo en forma asincrónica.
//fs.writeFile(ruta, datos, callback) = sobreescribe un archivo.
//fs.appendFile(ruta, datos, callback) = agrega contenido a un archivo.
//fs.unlink(ruta, callback) = borra un archivo.
//fs.mkdir(ruta, callback) = crea una carpeta.
//fs.readdir(ruta, callback) = leer el contenido de una carpeta.
//Todas las funciones rebicen los mismos parámetros que su versión sincrónica, más el callback. La función se encarga internamente de abrir y cerrar el archivo una vez finalizado su uso.


//FS con Promesas
//En una actualización de este módulo se agregaron versiones de funciones asincrónicas que en lugar de recibir callbacks, operan mediante promesas con then/catch. Porsteriormente se incluyó una sintaxis simplificada utilizando las nuevas palabras reseradas "async" y "await". Ejemplo =
//Leer un archivo con then/catch
function leerTC() {
    fs.promises.readFile('ruta/al/archivo', 'utf-8')
    .then( contenido => console.log(contenido))
    .catch( error => console.log('Error de lectura!', error))
};
leerTC()

//Leer un archivo con async/await
async function leerAA() {
    try{
        const contenido = await fs.promisesreadFile('ruta/al/archivo', 'utf-8')
        console.log(contenido)
    }catch(error){
        console.log('Error de lectura', error)
    }
}
//En el caso de querer hacer algo con la variable fuera del bloque try/catch, la declaración debería hacerse fuera del mismo. Reordar que hay que anteponer la palabra "await" al llamado de la función para que esta se comporte de manera bloqueante. Si se omite la palabra await la instrucción "console.log(contenido)" se ejecutaría antes de que a la variable contenido se le asigne el resultado de la operación de lectura del archivo.
