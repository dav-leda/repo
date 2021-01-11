



// Genero el contenido de la sección RandoMancia:

adivinar = () => {

    borrarContenidos();

    $('#root')
    .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
    .append($('<div/>', {id: 'divHijo2', class: 'divEspacio'}));

    $('<span/>', {class: 'titulo', text: pensa} ).appendTo("#divHijo1");

    $('#divHijo2')
    .append($('<button/>', { text: 'Generar número', class: 'botonH', id: 'botonGenerar' }));
    
    $('#root').fadeIn(1000)
     
    $('#botonGenerar').on('click', () => { getNumAdivinar() });
}

// Esta funciona va en busca de un número de la REST API y vuelve 
// con la respuesta a la función parsearNumero1al10(respuestaAPI)
// mediante un callback dentro de un switch (ver main.js):

getNumAdivinar = () => {generarNumero(1, 1, 'adivinar')}

parsearNumero1al10 = respuestaAPI => {

    borrarContenidos();

    // La respuesta de la REST API es un array de un solo numero HEX (00 a FF).
    // Primero paso el array a String, le agrego un 0x y luego paso el String a Int
    // y le sumo 1 para que sea de 1 a 256.

    let numeroHexString = "0x" + respuestaAPI.toString()

    let numeroInt = parseInt(numeroHexString) + 1

    // Convertir en un número del 1 al 10

    let numero = Math.ceil(numeroInt * 10 / 256);

    $('#root')
    .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
    .append($('<div/>', {id: 'divHijo2'}));

    $('#divHijo1')
    .append($('<p/>', {class: 'titulo', text: 'Número aleatorio:'}))
    .append($('<p/>', {class: 'titulo2', text: numero}))
    .append($('<p/>', {class: 'titulo', text: '¿Es el número que habías pensado?'}));
    
    $('#divHijo2')
    .append($('<button/>', { text: 'Sí', class: 'botonSiNo', id: 'botonSi' }))
    .append($('<button/>', { text: 'No', class: 'botonSiNo', id: 'botonNo' }));

    $('#root').fadeIn(1000)

    $('#botonSi, #botonNo').on('click', (event) => {
        if($(event.target).attr('id')=='botonSi')
        {leerDataFirebase(true)} 
            if($(event.target).attr('id')=='botonNo')
            {leerDataFirebase(false)} 
    });   
}


leerDataFirebase = bool => {

    let ref = firebase.database().ref("/resultados")
    
    ref.once("value", function(snapshot) {
      var data = snapshot.val();
      
      // El método de lectura de Firebase es una función asincrónica
      // por lo cual le paso como parámetro la función siguiente
      // incluyendo los datos obtenidos (data) y la respuesta del usuario (bool).

      updateDataFirebase(data.testCount, data.coincide, bool)
    });  
}


// Según la respuesta del usuario actualizo la data de Firebase para generar las estadísticas:

updateDataFirebase = (numTesteos, numCoincide, siOno) => {

    let updateTesteos = numTesteos + 1
    let updateCoincide;

    siOno ? updateCoincide = numCoincide + 1 : updateCoincide = numCoincide;

    let ref = firebase.database().ref("/resultados")

    ref.update({"testCount": updateTesteos, "coincide": updateCoincide});

    adivinar()
}


