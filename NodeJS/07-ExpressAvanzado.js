//Cuando hablamos de APLICACIONES RESTFUL, nos referimos a aplicaciones que operan en forma de servicios web, respondiendo consultas a otros sistemas a través de internet. Dichas aplicaciones lo hacen respetando algunas reglas y convenciones.

//HTTP (Hypertext Transfer Protocol o Protocolo de Transferencia de HiperTexto) es, como su nombre lo dice, un protocolo (conjunto e reglas y especificaciones) que se utiliza a la hora de intercambiar datos a través de internet. El protocolo se basa en un esquema de petición-respuesta. Existen clientes que realizan soliitudes de transmisión e datos, y un serior que atiende las peticiones. HTTP establece varios tipos de peticiones, sieno las principales: POST, GET, PUT y DELETE. Pasos =
//1) El cliente hace la solicitud de protocolo HTTP a un servidor.
//2)En respuesta a la solicitud, el seridor HTTP envía el código para una página web.
//3)El navegador interpreta el código HTML y muestra una página web.
//Código de estado = cada mensaje de respuesta de HTTP tiene un código de estado numérico de tres cifras que indica el resultado de la petición. Código = 
// 1xx(Informativo): la petición fue recibida, y continúa su procesamiento.
// 2xx(Éxito): La petición fue recibida con éxito, comprendida y procesada.
// 3xx(Redirección): más acciones son requeridas para completar la petición.
// 4xx(Error del cliente): la petición tiene algún error, y no puede ser procesada.
// 5xx(Error del servidor): el servidor falló al intentar procesar una petición aparentemente válida.
//Códigos de Estado más comunes = 200(OK, todo salió como lo esperado), 400(Bad Request, la petición no cumple con lo esperado), 404(Not found, el recurso buscado no existe -URL inválido-), 500(Internal Server Error, error genérico el servidor al procesar una petición válida).

//API REST
//¿Qué es una API? = una API es un conjunto de reglas y especifiaiones que describen la manera en que un sistema puede comunicarse con otros. Definir una API en forma clara y explícita abilita y facilita el intercambio de mensajes entre sistemas. Permite la colaboración e interoperabilidad entre los sistemas desarrollados en distintas plataformas e incluso en distintos lenguajes. La API puede tener interfaz gráfica o ser de uso interno y tiene que estar acompaada con la documentación detallada que escriba su operacion y el formato de interaccion con la misma.
//REST = viene del inglés "REpresentational State Transfer" (o en español: Transferencia de Estado Representacional). Por Representación se refiere a un modelo o esturctura con la que representamos algo, por Estado de una representación, hablamos de los datos que contiene esemodelo estructura. Transferir un Estado de Representación implica el envío de datos (con una determinada estructura) entre dos partes. Los dos formatos más utilizados para este tipo de transferencias de datos son XML y JSON.
//API REST es un tipo de API que no dispone de interfaz gráfica. Se utilia exclusiamente para comunicación entre sistemas, mediante el protocolo HTTP. Para que una API se considere REST, debe cumplir con las siguientes características: arquitectura Cliente-Servidor sin estado; caheable; operaciones comunes; interfaz uniforme; utilización de hipermedios.
//Características API REST
//Arquitectura Cliente-Seridor sin estado = cada mensaje HTTP contiene toda la información necesaria para comprender la petición. Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes. Esta restricción mantiene al cliente y al servidor débilmente acoplados: el cliente no necesita conocer los detalles de implementación del servidor y el servidor se "despreocupa" de cómo son usados los datos que envía al cliente.
//Cacheable = debe admitir un sistema de almacenamiento en caché. La infraestructura de red debe soportar una caché de varios nieles. Este almacenamient evita repetir varias conexiones entre el servidor y el cliente, en casos en que peticiones idénticas fueran a generar la misma respuesta.
//Operaciones comunes = Todos los recursos detrás de nuestra API eben poder ser consumidos mediante peticiones HTTP, preferentemente sus principales (POST, GET, PUT y DELETE). Con frecuencia estas operaciones se equiparan a las operaciones CRUD en bases de datos (Create-Read-Update-Delete). AL tratarse de peticiones HTTP, estas deberán devolver con sus respuestas los correspondientes códigos de estado, informando el resultado de las mismas.
//Interfazuniforme = en un sistema REST, cada acción (más correctamente, cada recurso) debe contar con una URI (Uniform Resource Identifier), un identificador único. Ésta nos facilita el acceso a la información, tanto para consultarla, como para modificarla o eliminarla, pero también para compartir su ubicación exacta a terceros.
//Utilización de hipermedios = cada vez que se hace una petición al servidor y este devuelve una respuesta, parte de la información devuelta pueden ser también hipervínculos de naegación asociada a otros recursos del cliente. Como resultado de esto, es posible navegar de un recurso REST a muchos otros, simplemente siguiendo enlaes sin requerir el uso de registros u otra infraestructura adicional.

//APLICACIÓN RESTFUL
//Principios = una aplicación RESTful requiere un enfoque de diseño distinto a la forma típica de pensar en un sistema:lo contrario a RCP. RCP (Remote Procedure Calls) basa su funcionamiento en las operaciones que puede realizar el sistema (acciones, usualmente verbos -Ej: getUsuario()-). En REST, por el contrario, el énfasis se pone en los recursos (usualmente sustantivos -Ej: Usuarios-), especialmente en los nombres que se le asigna acada tipo de recurso. Cada funcionalidad relacionada con este reurso tendría sus propios identificadores y petiiones en HTTP.

//Manejo de peticiones HTTP con Express
//Atención de peticiones = para definir cómo se debe manjar cada tipo de petición usaremos los métodos nombrados de acuerdo al tipo de petición que manejan: get(), post(), put() y delete(). Todos reciben como prmer argumento la ruta que van a estar escuchando, y solo manejarán peticiones que coincidan en ruta y en tipo. Luego, el segundo argumento será el callback con que se manejara la petición. Esta tendrá dos parámetros: el rimero con la petición (request) en si y el segundo con la respuesta (response) que espera devolver.
//Ejemplo de petición GET = cada tipo de petición puede tener diferentes aracterísticas. Por ejemplo, algunas peticiones no requieren el envío de ningún dato exta en particular para obtener el recurso buscado. Ete es el caso de la petición GET. Como respuesta a la petición, devolverá el resultado deseado en forma de objeto.
app.get('/api/mensajes', (req, res) => {
    console.log('requeste recibido');
    //acá debería obtener todos los recursos de tipo 'mensaje'
    res.json({
        msg: 'Hola mundo!'
    });
});
//Ejemplo GET con parámetros de búsqueda = las peticiones pueden incorporar detalles sobre la búsqueda que se quiere realizar. Estos parámetros se agregan al final de la URL, mediante un signo e interrogación '?' y enmerando pares 'clave=valor' separados por un ampersand '&' si hay más de uno. Al recibir los parámetors, los mismos se encontrarán en el objeto 'query' dentro del objeto petición (req)
app.get('/api/mensajes', (req, res) => {
    console.log('GET request recibido');

    if (Object.entries(req.query).length > 0) {
        res.json({
            result: 'get with params: ok',
            query: req.query
        })
    }else{
        res.json({
            result:'get all: ok'
        })
    }
})
//Ejemplo GET con identificador = en caso de que se quiera acceder a un recurso en particular ya conocido, es necesario enviar un identificador unívoco en la URL. Para enviar este tipo de parámetros, el mismo se esribirá luego del nombre del recurso (en la URL), separado por una barra. EJ: http://miservior.com/api/mensajes/1 (En este ejemplo se quiere acceder al mensaje 1 de nuestros recursos). Para acceder al campo identificador desde el lado del servior, Express utiliza una sintaxis que permite indicar anteponiendo 'dos puntos' antes del nombre del campo identificador, al especificar la ruta escuchada. Luego, para acceder al valor del mismo de hará a través del campo 'params' del objeto petiión (req) recibido en el callback.
app.get('/api/mensajes/:id', (req, res) => {
    console.log('GET request recibido');
    //acá debería hallar y devolver el recurso con id === req.params.id
    res.json(elRecursoBuscado);
});
//Otras peticiones
//Petición POST (Enviar) = algunas peticiones requieren el envío de algún dato desde el liente hacia el servidor. Por ejemplo, al crear un nuevo registro. Este es el caso de la petición POST. Para acceder al cuerpo del mensaje, incluído en la petición, lo haremos a través el campo 'body' del objeto petición recibido en el callback. En este caso, estamos devolviendo como respuesta el mismo registro que se envió en la petición.
app.post('/api/mensajes', (req,res) => {
    console.log('POST request recibido');
    //acá ebería crear y guardar un nuevo recurso
    //const mensaje = req.body
});
//Petición PUT (Actualizar) = también es posible mezclar varios meanismos de pasaje de datos/parámetros, como es el caso e las peticiones de tipo PUT, en las que se desea actualizar un registro con uno nuevo. Se debe proveer el identificador del registro a reemplazar y el dato con el que se lo quiere sobreescribir.
app.put('/api/mensajes-json/:id', (req,res) => {
    console.log('PUT request recibido');
    //acá debo hallar al recurso con id == reqparams.id y luego reemplazarlo con el registro recibido en req.body
    res.json({
        result:'ok',
        id: req.params.id,
        nuevo: req.body
    })
})
//Petición DELETE (Borrar) = si quisiéramos eliminar un recurso, ebemos identificar unívocamente sobre cuál de todos los disponibles se desea realiar la operacion.
app.delete('/api/mensajes/:id', (req,res) => {
    console.log('DELETE request recibido');
    //acá debería eliminar el recurso con id == req.params.id
    res.json({
        result: 'ok',
        id: req.params.id
    })
})

//¡¡¡¡¡¡¡CONFIGURACIÓN EXTRA!!!!!!!!!!!!!!
//Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON en formato URLENCODED al recibirlos, ebemos inicarlo en forma explícita, agregando las siguientes líneas luego de crearlo:
app.use(express.json())
app.use(express.urlenoded({ extended : true }))
//Aclaración: {extended:true} precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo cadenas. ¡SIN ESTA LÍNEA, EL SERVIDOR NO SABRÁ CÓMO INTERPRETAR LOS OBJETOS RECIBIDOS!

//POSTMAN
//¿QUÉ ES? = nace como una herramienta que principalmente nos permite crear peticiones obre APIs de una forma muy sencilla y de esta manera, probar las APIs.
//El usuario de Postman puede ser un desarrollador que esté comprobando el funcionamiento de una API para desarrollar sobre ella o un operador que esté realizando tareas de monitorización sobre una API.
//Instalación = https://www.postman.com/downloads/
//Alternativas = existen varias alternativas a postman, incluso algunas incluyen extensiones para el VSCode, como es el caso de Thunder Client (https://www.thunderClient.io), el cual pueden descargar desde el VSCode mismo,y utilizar de manera muy similar a Postman. Sus funcionalidades son algo más reducidas, pero para operaciones sencillas es más que suficiente.