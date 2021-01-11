
const css = estilo => $('style').append(estilo);

const ver = que_ver => console.log(`%c\n ${que_ver} `,`color: navy; background-color: beige`);


const html = (id, contenido) => {
    
    let selector = document.getElementById(id);
    selector.innerHTML = contenido

}

const estilo = (id, css) => {
    
    let selector = document.getElementById(id);
    

}
;
css `
body {
    background: lightgrey;
       
}

.content {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
}

.texto {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 50px;
   
}
`

contenido = () => {

  html('root', 'choto')  

}



const función = literal => `Esta es una función ${literal[0]}`

let llamada = función `aunque no lo parezca. 🧐`



alien = '👽';
saturno = '🪐';

literal = (string, param1, param2) => `Hola, mi nombre es ${string[0]}${param1}${string[1]}${param2}! 🥳🥳🥳`;

// En vez de pasar los parámetros de la función dentro de paréntesis
// el template literal permite pasar un string literal como parametro.
// Para diferenciar el string de las variables se indica para el string el número de index [0]

saludo = literal `Nano y soy un ${alien} del planeta ${saturno}`;



