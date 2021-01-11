ver = (que_ver) => console.log(`%c${que_ver}`,`color: lightyellow; font-weight: bold; background-color: black`);






// Parámetros literales en funciones flecha:

algo = '📦';

función = (paramLiteral, variable) => `Esta función retorna un string literal ${paramLiteral[0]} ${variable}.`

llamada = función `y un parámetro que contiene${algo}`

//ver ( llamada )



objeto = [];

datos = [ ['Neno', 150], ['Koko', 180], ['Tato', 120] ];

agregar = () => objeto.push({}) ;

datos.forEach(agregar);

asignar = (item, index) => {
    objeto[index].nombre = item[0];
    objeto[index].altura = item[1]
}

datos.forEach(asignar)

///ver (JSON.stringify(objeto))




ver = (que_ver) => console.log(`%c${que_ver}`,`color: lightyellow; background-color: black`);


covid = '🦠';

console.log ({covid})

tiene_covid = covid ? 'sí, tiene ' + covid : 'no, no tiene ' + covid;

ver (tiene_covid)



lista_emojis = ['📡','🦠','💊','🔑','🤍','⚓️','💡','💎','👽','🐰','🦋','🍄']

algo_en_la_lista = (unalista, algo) => `elemento ${algo} de la lista: ${unalista[algo-1]}`;

//ver ( algo_en_la_lista (lista_emojis, 5) )



//ver ( lista_emojis.join(' ') )

ente = [];

ente[0] = {
    nombre: 'Pipo',
    altura: 1.50,
    humano: true
}

ente[1] = {
    nombre: 'Koko',
    altura: 1.1,
    humano: false
}

ente[2] = {
    nombre: 'Neno',
    altura: 1.8,
    humano: true
}


function Ser (el_nombre, la_altura, es_humano) {
   
    this.name = el_nombre,
    this.height = la_altura,
    this.human = es_humano
}

datos = [
    ['Pipo', 150, true],
    ['Koko', 110, false],
    ['Neno', 180, true]
];

let seres = [];


// .entries() crea un array de 2 elementos: el index y el dato que proviene del Array.
// dato[0] es el número de index y dato[1] es el contenido de ese elemento en el Array
// dato[1][0] es el contenido del primer elemento del sub-Array

for ( dato of datos.entries() ) {

    seres[dato[0]] = new Ser(dato[1][0], dato[1][1], dato[1][2])    
}


 

let orden = Math.floor(Math.random()*3);

//ver ('numero random: ' + orden)

let { name, height, human } = seres[orden];


mensaje = `Su nombre es ${name}, mide ${height/100} mts y es ${human? '🐵': '👽'}.`

//ver ( mensaje )



alien = '👽';
saturno = '🪐';

literal = (string, param1, param2) => `Hola, mi nombre es ${string[0]}${param1}${string[1]}${param2}! 🥳🥳🥳`;

// En vez de pasar los parámetros de la función dentro de paréntesis
// el template literal permite pasar un string literal como parametro.
// Para diferenciar el string de las variables se indica para el string el número de index [0]

saludo = literal `Nano y soy un ${alien} del planeta ${saturno}`;


ver (saludo)



// ARRAY DE OBJETOS SIN CLASE CONSTRUCTORA:
// Crear un array de objetos (vacío) y un array de datos.
// Con un forEach sumarle al array de objetos tantos objetos vacíos como elementos tenga el array de datos.
// La función que llama el forEach tiene que estar declarada previamente.
// A cada objeto asignarle valores del array de datos.


objetos = [];

datos = [ 
    ['Neno', 150], 
    ['Koko', 180], 
    ['Tato', 120] 
];

agregar = () => objetos.push({}) ;

datos.forEach(agregar);

asignar = (item, index) => {
    objetos[index].nombre = item[0];
    objetos[index].altura = item[1]
}

datos.forEach(asignar)

//ver (JSON.stringify(objetos))

let __ = '.json'
let er = ((Math.exp(2)).toString()).slice(2,14)+'/'+((Math.exp(-1)).toString()).slice(2,18)+__;



//ver (er)

