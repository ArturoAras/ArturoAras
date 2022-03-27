//Nodemon nos ayuda en el desarrollo, relanzando la ejecución de Node.js en el caso de que algún archivo de nuestro proyecto cambie. La librería se instala desde una terminal ejecutando: "npm i -g nodemon".

//Módulo HTTP: es un módulo nativo de Node.js que trabaja con el protocolo HTTP, que es el que se utilia en Internet para transferir datos en la Web. Nos va a servir para crear un servidor HTTP que acepte solicitudes desde un cliente web. Para podes utilizarlo en nuestro código, tenemos que requerirlo mediante la instrucción "require('http')" y guardarlo en una variable para su posterior uso.
const http = require('http');
//A partir de este momento tenemos una variable http (que en realidad es un objeto) sobre la que podemos invocar métodos que estaban en el módulo requerido. Por ejemplo, una de las tareas implementadas en el módulo HTTP es la de crear un servidor, que se hace con el módulo "createServer()". Este método recibirá un callback que se ejecutará cada vez que el servidor reciba una petición.
//La función callback que enviamos a createServer() recibe dos parámetros que son la petición y la respuesta.
const server = http.createServer( (peticion, repuesta) => {
    respuesta.end('Hola mundo!')
});
//La petición por ahora no la usamos, pero contiene datos de la petición realizada. La respuesta la usaremos para enviarle datos al cliente que hizo la petición. De modo que 'respuesta.end()' sirve para terminar la petición y enviarle datos al cliente.
const connectedServer = server.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
});
//Con esto le decimos al servidos que escuche en el puerto 8080, aunque podríamos haber puesto cualquier otro puerto.'listen' recibe también una función callback que realmente no sería necesaria, pero que nos sirve para hacer cosas cuando el seridor se haya iniciado y esté listo. Simplemente, en esa función callback indico que estoy listo y escuchando en el puerto configurado. Listen, ademas, euelve un objeto que contiene datos del servidor conectado.
//Con estas tres variables que acabamos e crear generemos un servidor web que está escuchando en un puerto dado. Ahora podemos guardar ese archivo con extensión .js.

//Para poner en ejecución el archivo con Node.js para iniciar el seridor vamos desde la línea de comandos a la carpeta donde guardamos el archivo servior.js y ejecutamos el comando "node" seguido del nombre del archivo que pretendemos ejecutar: node servidor.js
//En la consola de comandos aparecerá el mensaje que informa que nuestro servidor está escuchando en el puerto 8080. El moo de comprobar si realmente el seridor está escuchando a solicitudes de clientes en dicho puerto es acceder con un naegador a la dirección: http://localhost:8080. En la vista del navegador se mostrará el mensaje "Hola mundo!" devuelto por el servidor.


//Implementación de un servidor http en Express
//NodeJS cuenta con módulos nativos para manejar el envío y recepción de peticiones de tipo http/s, sin embargo, usaremos para nuestra aplicación un módulo externo llamado express. Algunas de sus características son: es muy popular y fácil de usar, facilita la tarea de cerar los istintos puntos de entrada de nuestro servior, permite personalizar la manera en que se maneja cada peticon en forma más simple y rápida.
//Express es un framework web minimalista,con posibilidad de ser utilizado tanto para aplicaciones/páginas web como para aplicaciones de servicios. Como todo módulo, lo primero que debemos realizar es agregarlo como dependencia en nuestro proyecto. Instalción desde consola: npm install express

//Espress como framework soporte para servidores REST
//Express permite definir qué acciones tomar para cada tipo de petición HTTP que llegue a una determinada URL meidante la defición de un callback para cada caso que consideremos necesario incluir en nuestra API. Para poder usar el módulo, lo primero que debemos hacer es importarlo al comienzo de nuestro archivo. El objeto obtenido luego del import es una función. Al ejecutarla, nos devolverá la aplicación servidor que configuraremos posteriormente con los detalles de nuestra aplicación. Ejemplo:
const express = require('express');
const app = express();
//Conexión: hay que indicar en qué puerto e nuestra computadora queremos que nuestra aplicación comience a escucar petiiones. Este puerto será de uso exlsivo de nuestro servidor, y no podrá ser compartio con otras aplicaciones. Ejemplo:
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Seridor http está ecuchando en el puerto ${server.address().port}`)
}); //Si el puerto elegido es el 0 express elegirá un puerto al azar entre los disponibles del SO en ese momento.
server.on('error', error => consolelog(`Error en servidor ${error}`))
//Manejo de errores de conexión: para indicar una situación de error en la puesta en marcha del servidor, poemos configurar el eentro'error' a través del método 'on' sobre la salida de 'listen'.
//Configuración petición GET = cuando queremos obtener algún tipo de informacion del servidor utilizamos peticiones de tipo GET. Este tipo de peticiones son las más comunes. Entonces, configuraremos en nuestro servidor un manejador para esa peticiones. Como respuesta, deoleremos el resultado deseado en forma de objeto. Ejemplo:
app.get('/', (req, res) => {
    res.send({mensaje:'hola mundo!'})
});
