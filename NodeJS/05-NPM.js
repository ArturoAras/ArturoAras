//¿Qué es NODE.JS? = es un entorno de tiempo de ejecución de JavaScript que fue creado por los desarrolladores originales de JS e incluye todo los que se necesita para ejecutar un programa escrito en JS por fuera del navegador. Se basa en el motor de tiempo de ejecución JS V8, el mismo que usa Chrome para convertir el JS en código máquina. Node.js está escrito en C++ y dispone de módulos nativos.

//Módulos nativos en Node = un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar. Node.js posee varios módulos incorporados (nativos)compilados en binario. Estos módulos básicos están definidos en el código fuente de Noe en la carpeta lib/. Los módulos básicos tienen la preferencia de cargarse primero si su identificador es pasado desde require().

//Administraores de Paquetes (Package Managers) = sirven para no tener que descargar, instalar y mantener las dependencias de un proyeto a mano. Estas aplicaciones facilitan la escarga e instalación de las librerías que utiliza el proyecto. Se requiere conocer el nombre exacto de la librería (y versión deseada si es necesario) y contar con conexión a internet. Mediante un comando se descargará de un repositorio centralizado la versión correcpondiente de la dependencia especificada y se agregará al proyecto.

//NPM = es el administrador de paquetes propio de NodeJS (NodeJS Package Manager). Las dependencias pueden instalarse en forma global o local. Si instalamos una dependencia en forma global, todos nuestros programas desarrollados en NodeJS contarán con esa librería, y con la versión que haya sido instalada. En cambio, si instalamos en forma local, podremos elegir exactamente qué librería y con qué versión contará cada proyecto que desarrollemos.
//La instalaión local de dependencias es la opcion más recomendable para poder tener múltiples proyectos usando distintas versiones de una misma libraría sin generar problemas de compatibilidad al actualizar una nueva versión que no sea retrocompatible con las anteriores.
//Sin embargo muchas veces es útil instalar en forma global librerías utilitarias para facilitar las tareas de programación y revisión durante la etapa de desarrollo.

//Package.json = es un archivo de configuración en formato JSON que es parte de un proyecto Node.js. Podemos crearlo mediante la instrucción "npm init". Podemos especificar en este archivo la lista de dependencias, que son las librerías que usa el proyecto para funcionar o para realizar distintos tipos de testing.
//Siempre que hayamos especificado nuestras dependencias en el archivo de configuración (package.json) podremos actualizar y mantener e forma fácil y segura las dependencias del royecto con el comendo "npm install". Además podemos hacer que npm agregue como dependencia al package.json un módulo que estamos instalando. Si lo queremos como dependencia del proyecto, al comendo 'install', le agregamos el nombre del módulo: 'npm install <algún módulo>'. Si sólo es una dependencia del entorno de desarrollo, le agregamos --save-dev o -D. 'npm install --save-dev <algún-módulo-dev> o npm install -D <algún-módulo-dev>.

//Manejo avanzado del versionado = cada una de las versiones de las dependencias está precedida por un símbolo (~^*) que indica la forma en la que deeamos que se actualice ese módulo cada vez que ejecutemos npm install.
//~ (solo patches) => si escribimos en nuestro package.json: ~0.13.0; cuando salga la versión 0.13.1 se actualizará en nuestro proyecto, ya que es un Patch; cuando salga la version 0.14.0 no se actualizará ya que es una Minor Release; cuando salga la version 1.1.0 no se actualizará ya que es una Major Release.
//^ (patches y actualizaciones menores)
//* (todas las actualizaciones)
//Más símbolos =
// > descargar/actualizar a cualquier versión posterior a la dada
// >= descargar/actualizar a cualquier versión igual o posterior a la dada
// <= descargar/actualizar a cualquier versión igual o anterior a la dada
// < descargar/actualizar a cualquier versión anterior a la dada

//Finalmente, si no se pone singún símbolo, se acepta únicamente la versión especificada. Si en lugar de escribir una versión, se escribe 'latest', se descargará o actualizará siempre a la última versión disponible. Adicionalmente se pueden crear combinaciones con los criterios anteriores. Por ejemplo: 1.0.0 || >=1.1.0 < 1.2.0 usará la versión 1.0.0 (si la encuentra) o alguna a partir de 1.1.0, pero anteriores a 1.2.0