
const clg = console.log.bind(console);
const ver = (que_ver) => console.log(`%c\n ${que_ver} `, 'display: inline-block; font-size: 20px; color: navy; margin: 5 px; padding: 8px; border-radius: 4px;background-color: beige');

const fetch = require('node-fetch');


// devolver es una función callback, no una variable parametro

const delay = (devolver) => setTimeout( () => devolver ( 'Respuesta: 👽' ) , 1000);

const promesa = new Promise(delay);

const asincronica = async _ => ver (await promesa);


const url = 'https://jsonplaceholder.typicode.com/todos/2';

const APIcall = async (url) => {

    let respuesta = await fetch(url);
    let data = await respuesta.json(); 
   
    return data.title; // no retornar la promesa entera sino una parte (title)
}

/* APIcall (url)
    .then( data => ver ( `Respuesta de la API: ${data}` ) )
    .catch( error => ver (error) );
 */




const dataUrl = 'https://jsonplaceholder.typicode.com/todos/3';

let items = '';

const fetchData = async _ => {

    
const response = await fetch(dataUrl);
const data = await response.json();
console.log(data);
items = data["articles"];

}


