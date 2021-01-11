
const clg = console.log.bind(console);

const ver = que_ver => console.log(`%c\n ${que_ver} `,`color: navy; background-color: beige`);

const delay = segundos => new Promise(res => setTimeout(res, segundos * 1000));

const esperar = (funcion, segundos) => setTimeout( () => typeof(funcion)==='function'? funcion() : ver('error'), segundos * 1000)


const inn = (selector, contenido) => document.querySelector(selector).innerHTML(contenido);

export { ver, clg, inn };


const frutas = {

manzana: '🍎',
durazno: '🍑',
frutilla: '🍓',
naranja: '🍊',
pera: '🍐'

}

//console.table ({frutas})

let duraznos = []
let manzanas = []
let canasto_grande = []

const llenar_canasto = (que_canasto, con_que_fruta, cuantas) => {
    que_canasto.length = cuantas;
    que_canasto.push ( con_que_fruta )
}


const llenar_canasto_grande = (con_que_fruta, cuantas) => {

    for(veces = 0; veces < cuantas; veces++) {
        canasto_grande.push(con_que_fruta)
    }

}



//console.table ({canasto_grande} )



const función = literal => `Esta es una función ${literal[0]}`

let llamada = función `aunque no lo parezca. 🧐`



const holo = async (nombre) => `hola ${nombre}`;


// let saludar = holo('bipo').then( (retorno) => ver ( retorno ) )


const esperar_y_saludar = (segundos, nombre) => {
    ver ('start');
    return new Promise ( () => {
        setTimeout( () => {resolve `hola ${nombre}`}, segundos * 1000)
    })
}

let algo = '';

const hola = async () => {
    algo = await esperar_y_saludar(1, 'bopo'); 
    ver ('que'+algo)
};


