//Una promesa es un objeto que encapsula una operación, y que permite definir acciones a tomar luego de finalizada dicha operación, según el resultado de la misma. Para ello, permite asociar manejadores que actuarán sobre un eventual valor (resultado) en caso de éxito, o la razón de falla (error) en caso de una falla.
//Al igual que los callbacks este mecanismo permite definir desde afuera de una funión un bloque de código que se ejecutará dentro de esa función dependiendo del resultado. A diferencia de los callbacks, en este caso se definiran dos manejadores en lugar de uno solo.
//Estados: 1-Pendiente / 2-Cumplida:la operación salió bien, y su resultado será manejado por el callback asignado mediante el método .then() / 3-Rechazada:la operación falló y su error será manejado por el callback asignado mediante el método .catch()
function dividir(dividendo, divisor){
    return new Promise( (resolve, reject) => {
        if(divisor == 0){
            reject('No se puede dividir por cero');
        }else{
            resolve(dividendo/divisor)
        }
    })
};
dividir(10, 2) //Promesa sale bien
    .then( resultado => {
        console.log(`resultado: ${resultado}`);
    })
    .catch( error => {
        console.log(`Error: ${error}`)
    });
dividir(10, 0) //Promesa sale mal
    .then( resultado => {
        console.log(`resultado: ${resultado}`);
    })
    .catch( error => {
        console.log(`Error: ${error}`)
    });