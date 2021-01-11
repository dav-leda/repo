




randomTrip = () => {

  borrarContenidos();

  $('#root')
  .append($('<div/>', { id: 'divHijo1', class: 'div1' }))
  .append($('<div/>', { id: 'divHijo2' }));

  $('<p/>', {class:'titulo'}).appendTo("#divHijo1");
  $('p').html(mensajeGeoLocacion1);

  $('#divHijo2')
  .append($('<button/>', {text: 'Generar posición', class: 'botonH', id: 'botonPosicion'}))

  $('#root').fadeIn(1000)

  $('#botonPosicion').on('click', () => { getLocation() });
}




// Solicitar al usuario el acceso a la geolocación:

getLocation = () => {

  if (navigator.geolocation) {

    mensajeDeEspera('Conectando...');

    navigator.geolocation.getCurrentPosition(parsearPosicion, mostrarError);

    borrarContenidos();

    $('<div/>', { id: 'divHijo1', class: 'div1' }).appendTo("#root");
    $('<p/>', {class:'titulo'}).appendTo("#divHijo1");
    $('p').html(mensajeGeoLocacion2);
    $('#root').fadeIn(200)

  } else {
    borrarContenidos();
    $('<div/>', { id: 'divHijo1', class: 'div1' }).appendTo("#root");
    $('<p/>', { class:'titulo', text: 'Tu navegador no ofrece geolocación.' }).appendTo("#divHijo1");
    $('#root').fadeIn(200)
  }
}


// A las coordenandas de geolocación les dejo solo 2 decimales:

parsearPosicion = posicion => {

  mensajeDeEspera('Conectando...')

  let latitud = posicion.coords.latitude;
  let longitud = posicion.coords.longitude;

  clog("GeoLoc Latitud: " + latitud, "GeoLoc Longitud: " + longitud)

  /* 
  La API de Geolocación devuelve 2 Floats (latitude, longitude)
  pero no siempre tienen la misma cantidad de decimales.
  A veces tienen 5 decimales, otras 7, dependiendo de la precisión del cálculo de geolocación. 
  En cambio, la API de Google Maps requiere que los Floats tengan siempre 6 decimales.
  Primero reduzco los Floats de Geolocación 
  a 2 decimales, para luego completar los 4 que faltan con números aleatorios.    
  No uso toFixed(2) porque no quiero que los redondee.
  Los guardo en variables globales "window" para poder "saltar"
  a la función asincrónica getNumero() sin perder los valores.
  Luego getNumero() llama a calcularPosicion() que toma la respuesta de la REST API por parámetro y 
  después recupera los valores guardados en las variables "window".
  */

  window.latString = reducirDecimales(latitud, 2)
  window.lonString = reducirDecimales(longitud, 2)

  generarNumero(2, 2, 'trip')
}


calcularPosicion = respuestaAPI => {

  // La respuesta de la REST API es un Array de 2 números HEX
  // entre 0000 y FFFF en formato String.
  // Les agrego el 0x adelante para que JS los interprete como HEX.

  let numeroHex1 = "0x" + respuestaAPI[0]
  let numeroHex2 = "0x" + respuestaAPI[1]

  clog("Número 1 API: " + numeroHex1, "Número 2 API: " + numeroHex2)

  // Los convierto a Ints entre 1 y 65536

  let numeroInt1 = parseInt(numeroHex1) + 1
  let numeroInt2 = parseInt(numeroHex2) + 1

  // Los convierto a Floats entre 0.0001 y 0.9999

  let numeroFloat1 = (numeroInt1 * 0.9999 / 65536)
  let numeroFloat2 = (numeroInt2 * 0.9999 / 65536)

  // Los paso de vuelta a String, les quito el "0." y dejo solo los primeros 4 decimales

  let numeroString4digitos1 = (numeroFloat1.toString()).slice(2, 6)
  let numeroString4digitos2 = (numeroFloat2.toString()).slice(2, 6)

  // Le agrego los 4 dígitos aleatorios al final de los números de geolocación

  let latString = window.latString + numeroString4digitos1
  let lonString = window.lonString + numeroString4digitos2

  // Los paso de vuelta a Floats

  let latitud = Number(latString)
  let longitud = Number(lonString)


  borrarContenidos();

  $('#root')
  .append($('<div/>', { id: 'divHijo1', class: 'div1' }))
  .append($('<div/>', { id: 'map', class: 'map' }))
  .append($('<div/>', {class: 'divEspacio' }));
  
  $('#divHijo1')
  .append($('<p/>', {id: 'titulo', text: mensajeGeoLocacion3, class:'texto'}))
  .append($('<p/>', {id: 'texto', text: mensajeGeoLocacion4, class:'texto'}));
  
  $('#root').fadeIn(1000)

  let punto = { lat: latitud, lng: longitud };

  clog("Coordenadas de Google Maps: " + punto.lat, punto.lng)

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: punto,
    styles: [{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },{featureType: "administrative.locality",elementType: "labels.text.fill",stylers: [{ color: "#d59563" }], },{featureType: "poi",elementType: "labels.text.fill",stylers: [{ color: "#d59563" }],},{featureType: "poi.park",elementType: "geometry", stylers: [{ color: "#263c3f" }],},{featureType: "poi.park",elementType: "labels.text.fill",stylers: [{ color: "#6b9a76" }],},{ featureType: "road", elementType: "geometry",stylers: [{ color: "#38414e" }],},{featureType: "road",elementType: "geometry.stroke",stylers: [{ color: "#212a37" }],},{featureType: "road",elementType: "labels.text.fill",stylers: [{ color: "#9ca5b3" }],},{featureType: "road.highway",elementType: "geometry",stylers: [{ color: "#746855" }],},{featureType: "road.highway",elementType: "geometry.stroke",stylers: [{ color: "#1f2835" }], },{featureType: "road.highway",elementType: "labels.text.fill", stylers: [{ color:"#f3d19c" }],},{featureType: "transit",elementType: "geometry", stylers: [{color: "#2f3948" }],},{featureType: "transit.station",elementType: "labels.text.fill",stylers:[{ color: "#d59563" }],},{featureType: "water", elementType: "geometry",stylers: [{color: "#17263c" }], },{ featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }],}, {featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }],},],
  });

  const marker = new google.maps.Marker({
    position: punto,
    map: map,
  });
}



// Función para dejar solo dos decimales sin redondearlos:

reducirDecimales = (numero, decimales) => {

  var numeroString = numero.toString();
  posicionDecimal = numeroString.indexOf('.');
  acortarLargo = posicionDecimal == -1 ? numeroString.length : 1 + posicionDecimal + decimales;
  resultadoCorto = numeroString.substr(0, acortarLargo);
  resultado = isNaN(resultadoCorto) ? 0 : resultadoCorto;

  clog("Reducir decimales: " + resultado);

  // La función devuelve un String con 2 posiciones decimales
  return resultado;
}



// Error handler de geolocación:

mostrarError = error => {

  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "El usuario no dio acceso a la geolocación."
      break;

    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "No hay información de geolocación."
      break;

    case error.TIMEOUT:
      x.innerHTML = "Time Out."
      break;

    case error.UNKNOWN_ERROR:
      x.innerHTML = "Unknown error."
      break;
  }
}

