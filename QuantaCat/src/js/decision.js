


// Genero el contenido de la sección QuantaCoin:

decision = () => {

    borrarContenidos();

    $('#root')
    .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
    .append($('<div/>', {id: 'divHijo2'}));

    $('#divHijo1')
    .append($('<span/>', {class: 'titulo', 
    text: 'Seleccioná un tipo de decisión que querés tomar:'}));

    $('#divHijo2')
    .append($('<button/>',{text: 'Sí / No', class: 'botonV', id: 'botonSioNo'}))
    .append($('<button/>',{text: 'Hacerlo / No hacerlo', class: 'botonV', id: 'botonHacerlo'}))
    .append($('<button/>',{text: 'Ir / No ir', class: 'botonV', id: 'botonIrNoIr'}));
 
    $('#root').fadeIn(1000)

    $('#botonSioNo, #botonHacerlo, #botonIrNoIr').on('click', (event) => {
        if($(event.target).attr('id')=='botonSioNo')
        { window.tipoD = 0; getNumDecidir() } 
            else if($(event.target).attr('id')=='botonHacerlo')
            { window.tipoD = 1; getNumDecidir() } 
                else if($(event.target).attr('id')=='botonIrNoIr')
                { window.tipoD = 2; getNumDecidir() } 
    });   
}    


// Esta función va en busca de un número de la REST API y vuelve 
// con la respuesta a la función decidir() 
// mediante un callback dentro de un switch (ver main.js):

getNumDecidir = () => {generarNumero(1, 1, 'decidir')}
  
decidir = responseAPI => {

    // Le agrego "0x" a la respuesta de la API para que JS lo interprete como HEX:

    let numeroHexString = "0x" + responseAPI.toString()

    let numero = parseInt(numeroHexString);

    let tipoDecision = tipoD;

    let decisiones = [ ["Sí", "Hacerlo", "Ir"], ["No", "No hacerlo", "No ir"] ];

    
    // Si el número de la API (de 0 a 255) es menor a 128, la decisión es positiva (decisiones[0])
    
    numero < 128 ? decide = decisiones[0][tipoDecision] : decide = decisiones[1][tipoDecision];

    borrarContenidos();

    $('#root')
    .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
    .append($('<div/>', {id: 'divHijo2', class: 'divEspacio'}))

    $('<span/>', {class: 'titulo', text: 'La respuesta es: ¡' + decide + '!'})
    .appendTo("#divHijo1");

    $('<button/>',{text: 'Nueva decisión', class: 'botonH', id: 'botonNueva'})
    .appendTo('#divHijo2');

    $('#root').fadeIn(1000);
    $('#botonNueva').on('click', () => { decision() });
}

