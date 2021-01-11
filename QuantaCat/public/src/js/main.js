

// Esta variable es para no tener que escribir "console.log" una y otra vez.
// En vez de eso pongo "clog":

window.clog = console.log.bind(console);


// Función para obtener un número de la REST API 
// del generador de números aleatorios cuánticos de la ANU:

getNumero = (cantidad, extension) => {

  let length = cantidad.toString()

  let size = extension.toString()

  let url = "https://qrng.anu.edu.au/API/jsonI.php?length=" + length + "&type=hex16&size=" + size
    
  return axios.get(url)

  .then( response => {return response.data.data} )
    .catch(error => {
      console.log(error);
      return Promise.reject(error)} )
}


generarNumero = (cuantos, extension, paraQue) => {

  mensajeDeEspera('Conectando con la computadora cuántica...');

  // Llamar a la REST API

  getNumero(cuantos, extension).then(response => {
  
      clog('Respuesta de la API: ' + response)

      // Para qué voy a usar el número?
  
      switch (paraQue) {
          case 'adivinar': parsearNumero1al10(response);
        break;
          case 'decidir': decidir(response);
        break;
          case 'trip': calcularPosicion(response);
        break;
          default:
        clog("Para nada");
      }
  });
}



mostrarEstadisticas = () => {

  borrarContenidos();

  mensajeDeEspera('Conectando con la base de datos...');

  // Leer data de Firebase

    let ref = firebase.database().ref("/resultados")

    ref.once("value", function(snapshot) {

      var data = snapshot.val();

      let testeos = data.testCount
      let coincidencias = data.coincide
      let porcentajeCoincide;

      // Este if es para evitar que si testeos es 0 el resultado sea Not a Number

      testeos == 0 ? porcentajeCoincide = 0 : porcentajeCoincide = coincidencias * 100 / testeos;

      let porcentaje = Math.round(porcentajeCoincide)

      borrarContenidos();

      $('#root')
      .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
      .append($('<div/>', {id: 'divHijo2', class: 'div1'}))
      .append($('<div/>', {id: 'divEspacio', class: 'divEspacio'}));

      $('#divHijo1')
      .append($('<p/>', {class: 'titulo', text: 'Estadísticas:'}))
      .append($('<p/>', {class: 'texto', text: mensajeEstadisticas1}))
      .append($('<p/>', {class: 'titulo', text: 'Coincidencias: ' + porcentaje + '%'}))
      .append($('<p/>', {class: 'titulo', text: 'Cantidad de testeos: ' + testeos}));
      
      $('#divHijo2')
      .append($('<p/>', {class: 'texto', text: mensajeEstadisticas2}));
      
      $('#root').fadeIn(1000)
    });
}



sobreLaApp = () => {

  borrarContenidos();

  $('#root')
  .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
  .append($('<div/>', {id: 'divHijo2'}));
  
  $('#divHijo1')
  .append($('<p/>', {id: 'titulo', class: 'titulo', text: 'Sobre esta aplicación:'}))
  .append($('<p/>', {id: 'texto', class: 'texto'}));

  $('#texto').html(faq);

  $('#divHijo2')
  .append($('<img />', { id: 'imagen', class: 'imagen', src: './src/imagenes/quantacat.png'}));

  $('#root').fadeIn(1000)
}


mostrarInicio = () => {
  
  borrarContenidos();

  $('#root')
  .append($('<div/>', {id: 'divEspacio', class: 'divEspacio'}))
  .append($('<div/>', {id: 'divHijo2', css:{'text-align': 'center'}}));

  $('#divHijo2')
  .append($('<img />', { id: 'imagen', class: 'imagen', src: './src/imagenes/quantacat.png'}));

  $('#root').fadeIn(1400)
}



// Loader mientras carga la data de la API:

mensajeDeEspera = texto => {

  borrarContenidos();

  $('#root')
  .append($('<div/>', {id: 'divHijo1', class: 'div1'}))
  .append($('<div/>', {id: 'divHijo2', class: 'divEspacio'}))
  .append($('<div/>', {id: 'divHijo3', class: 'loader'}));

  $('<p/>', {class: 'titulo', text: texto} ).appendTo("#divHijo1");

  $('#root').fadeIn(500)
}


borrarContenidos = () => {
  $('#root').empty();
  $('#root').css({display: 'none'});
  document.getElementById('collapsibleNavbar').classList.remove('show')
}

