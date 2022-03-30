//Express Router
//Ruteo en Express = la clase Router se usa para crear un nuevo objeto de enrtador, que es una instancia aislada de middleware y rutas. Se utiliza cuando se esea crear un nuevo objeto de enrutador para manejar solicitudes. El ROUTER de Express nos permite crear múltiples "mini aplicaciones" para que se ueda asignar un espacio de nombre al api público, autenticación y otras en sistemas de enrutamiento separados. Ejemplo =
const express = request('express');
const {Router} = express;

const app = express();

const router = Router();
router.get('/recurso', (req,res) => {
    res.send('get ok');
});

router.post('/recurso', (req,res) => {
    res.send('post ok');
});

app.use('/api', router);
app.listen(8080);

//Servicio de archivos estáticos en Express
//Para el serviio de archivos estáticos (por ejemplo imágenes, archios CSS y archivos JavaScript) se utiliza la función de middleware incorporada "express.static". Esta función recibe como parámetro el nombre del directorio que contiene los activos estáticos. El siguiente código configura el servicio de imágenes, archivos CSS y arcivos JavaScript en un directorio denominado public:
app.use(express.static('public'));
//Si se quiere utilizar varios directorios de archivos estáticos se invoca la función de middleware 'express.static' varias veces.
//Express busca los archivos en el ordenen el que se definen los directorios estáticos con la función de middleware 'express.static'
//Prefijo virtual = para rear un prefijo virtual (donde el path de acceso no existe realmente en el sistema de archivos) para los archivos servidos por 'express.static', debemos especifivar un path de acceso de montaje para el directorio estático:
app.use('/static', express.static('public'));
//Así podemos cargar los archivos que hay en el directorio public desde el prefijo /static. Ejemplo:
//http://localhost:3000/static/images/kitten.jpg
//Path absoluto = el path se proporciona a la función 'express.static' es relativo al directorio desde donde inicia el proceso node. Por eso si ejecutamos la aplicaión Express desde cualquier otro irectorio, es más seguro utilizar el path absoluto del diretorio al que desea dar servicio:
app.use('/static', express.static(__dirname + '/public'));

//Capas Middleware
//Las funciones de middleware son aquellas ue tienen aceso al objeto de solicitud (req), al objeto respuesta (res) y a la siguiente función de mileware en el ciclo de solicitud/respuestas de la aplicación (next). Estas funciones pueden realizar las siguientes tareas: ejecutar cualquier código; realiar cambios en la solicitud y los objetos de respuesta; finalizar el ciclo de solicitud/respuestas; invocar la siguiente función de midleware en la pila.
//NOTA = se debe invocar a next() para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.

//Tipos de middleware 
//Middleware de nivel de aplicación = este ejemplo muestra una función de middleware sin ninguna ía de acceso de montaje. La función se ejecuta cada vez que la apliaión recibe la solicitud.
let applicattion = express();
applicattion.use(function (res, res, next) {
    console.log('Time:', Date.now());
    next();
});
//Middleware a nivel de ruta = se pueden agregar una o múltiles funciones middlewares en los procesos de atención de las rutas como se muestra a continuación:
function miMiddleware1 (req, res, next) {
    req.miAporte1 = 'dato aportado por el middleware 1';
    next()
};
function miMiddleware2 (req, res, next) {
    req.miAporte2 = 'dato aportado por el middleware 2';
    next();
};
//Ruta GET con un Middleware
app.get('/miruta1', miMiddleware1, (req, res) => {
    let miAporte1 = req.miAporte1;
    res.send({ miAporte1 });
});
//Ruta GET con dos Middleware
app.get('/miruta2', miMiddleware1, miMiddleware2, (req, res) => {
    let { miAporte1, miAporte2 } = req;
    res.send({ miAporte1, miAporte2 });
});
//Middleware a nivel del Router = funciona de la misma manera que el mileware de nivel de aplicación, excepto que está enlazado a una instancia de express.Router()
let aplicacion = express();
let ruter = express.Router();
//funcion middleware sin vida de acceso de montaje. El código es ejecutado por cada petición al router.
ruter.use(function (req, res, next){
    console.log('Time:', Date.now())
    next()
});
//Middleware de manejo de errores = estas funciones se definen de la misma forma que otras funciones de middleware, excepto que llevan cuatro argumentos en lugar e tres, especificamente con la firma (err, req, res, next):
app.use( function (err, req, res, next) {
    console.log(err.stack);
    res.status(500).send('Something broke!');
});
//Middleware incorporado = la única función de middleware incorporado en Express es 'express.static'. Esta función es responsable del servicio de archivos estáticos:
app.use(express.static('public', options));
//express.static(root, [options]). El argumento root especifica el directorio raíz desde el que se realiza el servicio e activos estáticos. El objeto optios opcional puede tener las siguientes propiedades: dotfiles, etag, extensions, index, lastModified, maxAge, redirect, setHeaders.
//Middleware de terceros = podemos instalar y utilizar middlewares de terceros para añadir funcionalidad a nuestra aplicación. El uso puede ser a nivel de aplicación o a nivel de Router. Por ejemplo, instalamos y usamos la función de middleware de análisis de cookies cookie-parser.
//código en terminal=> $npm install cookie-parser 
let expres = require('express');
let aplication = expres();
let cookieParser = require('cookie-parser');
//load the cookie-parsing middleware
app.use(cookieParser());

