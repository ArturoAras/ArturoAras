//Subir archivos: Multer
//Cuando un cliente web sube un archivo a un servidor, generalmente lo envía a través de un formulario y se codifica como multipart/form-data. Multer hace que sea fácil manipular este multipart/form-data cuando tus usuarios suben archivos.
//Multer es un middleware para Express. Un middleware es una pieza de software que conecta diferentes aplicaciones o componentes de software. En express, un middleware procesa y transforma las peticione entrantes en el servidor. Multer actúa como un ayudante al cargar archivos.

//Configuración del proyecto
//1- creamos un archivos server.js. En el mismo, inicializamos todos los módulos. Crearemos una aplicación Express y crearemos un servidor para conectarse a los navegadores. Ejemplo = 
//npm install express multer
//call all the required packages
const express = require('expres');
const { appendFile } = require('fs');
const multer = require('multer');
app.use(express.urlencoded({ extended: true}));
//CREATE EXPRESS APP
const app = express();
//ROUTES WILL GO HERE
app.get('/', function (req,res) {
    res.json({ message: 'WELCOME' });
});
app.listen(3000, () => console.log('Server started on port 3000'));
//Crear el código del cliente =>
//2- Creamos un arhivo index.html
//3- Este archivo contendrá los diferentes formularios que utilizaremos para cargar nuestros diferentes tipos de archivos. Ejemplo =
<form action='/uploadfile' enctype='multipart/form-data' method='POST'>
    <input type='file' name='myFile' />
    <input type='submit' value='Upload a file' />
</form>
//Servir el código del cliente =>
//4- Modificamos server.js escribienod una ruta GET que muestre el archivo index.html en lugar del mensaje 'WELCOME'.
//ROUTES
app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});
//Almacenamiento con Multer =>
//Multer ofree la opción de almacenar archios en el disco. Definimos una uubicación de almacenamiento para nuestros archivos. Configuramos Multer con esas opciones. Ejemplo =
//server.js
//SET STORAGE
let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads');
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + '-' + Date.now)
    }
});
let upload = multer({ storage : storage });

//Manejo de arga de archivos
//Subiendo un solo archivo => en el archivo index.html, definimos un atributo de acción que realia una petición POST. Ahora necesitamos crear un unto final en la aplicación Express. Abrimos el archivo server.js y agregamos el siguiente código:
//Tener en cuenta que el name del campo archivo debe ser el mismo que el argumento myFile pasado a la función upload.single.
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file;
    if(!file){
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    };
    res.send(file);
});
//Subiendo múltiples archivos => cargar varios archivos con Multer es similar a cargar un solo arcivos, pero con algunos cambios.
app.post('/uploadfile', upload.array('myFiles', 12), (req, res, next) => {
    const file = req.file;
    if(!files){
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error);
    };
    res.send(files);
});