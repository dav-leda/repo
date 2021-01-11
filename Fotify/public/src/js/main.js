
// Esta variable es para no tener que escribir "console.log" una y otra vez.
// En vez de eso pongo "clog":

const clog = console.log.bind(console);


// Busco la lista de fotos favoritas guardada en Local Storage
// y la parseo para poder accederla como un array de objetos:

window.listaFavoritas = JSON.parse(localStorage.getItem("favoritas"));

if (!listaFavoritas) {listaFavoritas = []};




//      _    _                      _               
//     | |  | |                    | |              
//     | |__| |   ___    __ _    __| |   ___   _ __ 
//     |  __  |  / _ \  / _` |  / _` |  / _ \ | '__|
//     | |  | | |  __/ | (_| | | (_| | |  __/ | |   
//     |_|  |_|  \___|  \__,_|  \__,_|  \___| |_|   
//                                                  
//                                                  

// Creo los elementos del header con JQuery:

crearHeader = () => {

    // Creo el header con el logo, el input de texto, los botones:

    

    $('#root')
    .fadeOut(1)
    .append($('<div/>', {id: 'header'}));

    $('#header')
    .append($('<p/>', {class: 'mensaje-dm', text: ' Cliqueá en el logo para ver en modo DARK '} ))
    .append($('<img/>', {id: 'logo', src: './src/images/-logo-negro.png', class: 'logo'}))
    .append($('<p/>', {id: 'que', text: '¿Qué querés ver?'} ))
    .append($('<form/>', {id: 'form'}));

    $('form').append($('<input/>', {class: 'centerV', type: 'text', id: 'input'} ));

    $('form').on ('submit', () => {
        
        let inpt = $("#input").val(); 
        traducir(inpt);
        event.preventDefault;
        $('#input').val('');
        return false
    });

    $('#root').append($('<div/>', {id: 'botones', class: 'contenedorH'}));

    $('#botones')
    .append($('<input/>', {class: 'button', type: 'button', id: 'buscar', value: ' Buscar '}))
    .append($('<input/>', {class: 'button', type: 'button', id: 'favs', value: ' Favoritas '}));

    $('#botones').on('click', (event) => {

        if($(event.target).attr('id')=='buscar') {  
        
            let inpt = $("#input").val(); 
            traducir(inpt)
        }
        else if($(event.target).attr('id')=='favs') { 
            mostrarFavoritas()    
        }
    })


//      _____                   _        __  __               _        
//     |  __ \                 | |      |  \/  |             | |       
//     | |  | |   __ _   _ __  | | __   | \  / |   ___     __| |   ___ 
//     | |  | |  / _` | | '__| | |/ /   | |\/| |  / _ \   / _` |  / _ \
//     | |__| | | (_| | | |    |   <    | |  | | | (_) | | (_| | |  __/
//     |_____/   \__,_| |_|    |_|\_\   |_|  |_|  \___/   \__,_|  \___|
//                                                                     
//                                                                     

    // Toggle entre Dark Mode y Light Mode usando el plugin 'Color Animation' para JQuery:

    $('#logo').on('click', () => { 
        if($('#logo').attr('src')=='./src/images/-logo-negro.png') {

            $('.mensaje-dm').fadeOut(600, () => {
                $('.mensaje-dm').text(' Cliqueá en el logo para ver en modo LIGHT ')
                .css({'color': '#fafafa'})
                .fadeIn(1200);
            });

            $('#logo').fadeOut(400, () => {
                $('#logo').attr('src', './src/images/logo-blanco.png')
            });

            $('#logo').fadeIn(800);

            $('p').fadeOut(200)
            .css({'color': '#fafafa'})
            .fadeIn(1400);

            $('body').animate( {backgroundColor: '#111111'} ) 
            
        }else{
            $('.mensaje-dm').fadeOut(600, () => {
                $('.mensaje-dm').text(' Cliqueá en el logo para ver en modo DARK ')
                .css({'color': '#fafafa'})
                .fadeIn(1200);
            });

            $('#logo').fadeOut(400, () => {
                $('#logo').attr('src', './src/images/-logo-negro.png')
            });

            $('#logo').fadeIn(800);

            $('p').fadeOut(200)
            .css({'color': '#222222'})
            .fadeIn(1400);

            $('body').animate({backgroundColor: '#fafafa'});
        }
    });
   

    // Tooltip indicándole al usuario cómo pasar a Dark Mode:

    $('#logo').hover( () => {
        $('.mensaje-dm').css({'display': 'block'})
    }, () => {
        $('.mensaje-dm').css({'display': 'none'})
    })


    $('#root').fadeIn(2000)
}




//      _                            _               
//     | |                          | |              
//     | |        ___     __ _    __| |   ___   _ __ 
//     | |       / _ \   / _` |  / _` |  / _ \ | '__|
//     | |____  | (_) | | (_| | | (_| | |  __/ | |   
//     |______|  \___/   \__,_|  \__,_|  \___| |_|   
//                                                   
//                                                   

// Mostrar un loader de espera mientras carga la data de las APIs:

loader = () => {

    $('#container').empty();  
    let loaderComponent = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    $('#container').append($('<div/>', {id: 'loader', class: 'contenedorH'} ));
    $('#loader').html(loaderComponent)
}




//       _____          _       _      _____           _                 __          
//      / ____|        (_)     | |    / ____|         | |               /_/          
//     | |  __   _ __   _    __| |   | |  __    __ _  | |   ___   _ __   _    __ _   
//     | | |_ | | '__| | |  / _` |   | | |_ |  / _` | | |  / _ \ | '__| | |  / _` |  
//     | |__| | | |    | | | (_| |   | |__| | | (_| | | | |  __/ | |    | | | (_| |  
//      \_____| |_|    |_|  \__,_|    \_____|  \__,_| |_|  \___| |_|    |_|  \__,_|  
//                                                                                   
//                                                                                   
                                                  

/*
Este array me permite crear un grid de CSS en forma dinámica.
Cada celda tiene una posición y un tamaño distinto.
La variable window.cuantosGrids indica cuantas veces se repite el patrón del grid.
En la carpeta images incluyo un diagrama del patrón utilizado.
Por ejemplo: si son 4 grids se generan 48 celdas.
De esta manera evito tener que hardcodear 48 clases distintas en el archivo .css
Los valores de cada uno de los 12 sub-arrays de 4 números son: 
Start Column, Start Row, End Column, End Row.
*/

let grid = [
    [1,1,3,4],[3,1,5,3],[5,1,9,5],
    [1,4,3,6],[3,3,5,6],[5,5,9,8],
    [1,6,5,9],[5,8,7,10],[7,8,9,11],
    [1,9,5,13],[5,10,7,13],[7,11,9,13]
];

window.cuantosGrids = 4;




//       _____          _       _      _____                                                              _   
//      / ____|        (_)     | |    / ____|                                                            | |  
//     | |  __   _ __   _    __| |   | |        ___    _ __ ___    _ __     ___    _ __     ___   _ __   | |_ 
//     | | |_ | | '__| | |  / _` |   | |       / _ \  | '_ ` _ \  | '_ \   / _ \  | '_ \   / _ \ | '_ \  | __|
//     | |__| | | |    | | | (_| |   | |____  | (_) | | | | | | | | |_) | | (_) | | | | | |  __/ | | | | | |_ 
//      \_____| |_|    |_|  \__,_|    \_____|  \___/  |_| |_| |_| | .__/   \___/  |_| |_|  \___| |_| |_|  \__|
//                                                                | |                                         
//                                                                |_|                                         


// Componente de HTML para cada celda del Grid:

crearImagen = (source, style, autor, URLautor, id) => {
  return `
  <figure style="${style}" class="figure" id="figure-${id}" ondblclick="modal('${source}', '${autor}', '${URLautor}')">
    <img src="${source}" class="gallery__img" alt="imagen">
    <div class="overlay" id="overlay-${id}" ontouchend="modalTouch('${source}', '${autor}', '${URLautor}', '${id}')">
      <a href="javascript:modal('${source}', '${autor}', '${URLautor}', '${id}')" class="icon">
        <i id="icon-modal-${id}" class="fas fa-external-link-alt">
        </i>
      </a>
      <a href="javascript:agregarAfavs('${id}', '${source}','${autor}','${URLautor}')" class="icon">
        <i id="icon-heart-${id}" class="far fa-heart">
        </i>
      </a>
    </div>
  </figure>`
}




//                 _____    _____     _____                                                         _____   _                     
//         /\     |  __ \  |_   _|   |  __ \                                                       / ____| | |                    
//        /  \    | |__) |   | |     | |__) |   ___   ___   _ __     ___    _ __    ___    ___    | |      | |   __ _   ___   ___ 
//       / /\ \   |  ___/    | |     |  _  /   / _ \ / __| | '_ \   / _ \  | '_ \  / __|  / _ \   | |      | |  / _` | / __| / __|
//      / ____ \  | |       _| |_    | | \ \  |  __/ \__ \ | |_) | | (_) | | | | | \__ \ |  __/   | |____  | | | (_| | \__ \ \__ \
//     /_/    \_\ |_|      |_____|   |_|  \_\  \___| |___/ | .__/   \___/  |_| |_| |___/  \___|    \_____| |_|  \__,_| |___/ |___/
//                                                         | |                                                                    
//                                                         |_|                                                                    


// Clase constructora para mapear la respuesta de la API:

class RespuestaAPI {
    constructor(elID, laImagen, elAutor, linkAutor) {
        this.id = elID
        this.urlImagen = laImagen
        this.autor = elAutor
        this.urlAutor = linkAutor
    }
}




//       _____           _                 __          
//      / ____|         | |               /_/          
//     | |  __    __ _  | |   ___   _ __   _    __ _   
//     | | |_ |  / _` | | |  / _ \ | '__| | |  / _` |  
//     | |__| | | (_| | | | |  __/ | |    | | | (_| |  
//      \_____|  \__,_| |_|  \___| |_|    |_|  \__,_|  
//                                                     
//                                                     


// Crear galería de fotos:

crearArrayFotos = (data, queBuscar) => {

    $('#container').empty();  

    if (!data.photos.length) {
        let noHay = 'Lo siento, no tenemos fotos de ' + queBuscar + '. 😔'
        $('#container').append($('<p/>', {id: 'noHay', text: noHay} ));
    }else{

        $('#container').empty(); $('#input').val('');

        let respuesta = new RespuestaAPI([],[],[],[]);

        // Mapear la respuesta de la API dentro de una instancia del objeto RespuestaAPI
        // el cual contiene una serie de Arrays: 

        data.photos.forEach(photo => {
            respuesta.id.push(photo.id);
            respuesta.urlImagen.push(photo.src.large);
            respuesta.autor.push(photo.photographer);
            respuesta.urlAutor.push(photo.photographer_url)
        })

        // Si la API no encuentra suficientes resultados
        // para completar todas las celdas del grid 
        // repito los resultados hasta completar todas las celdas:

        if (respuesta.urlImagen.length < cuantosGrids * 12) {
            let largo = respuesta.urlImagen.length;
            let veces = Math.round(cuantosGrids * 12 /largo);
        
            for (v=0; v<veces; v++) {
                for (i=0; i<largo; i++) {
                    respuesta.id.push(respuesta.id[i]);
                    respuesta.urlImagen.push(respuesta.urlImagen[i]);
                    respuesta.autor.push(respuesta.autor[i]);
                    respuesta.urlAutor.push(respuesta.urlAutor[i]) }
            }
        } 

        $('#container').append($('<div/>', {id: 'gallery', class: 'gallery'}));
        $('#gallery').css("display", "none");

        // Creo las 48 celdas del grid en 4 series de 12 celdas, cada una con forma o posición distinta,
        // llamando a la función crearImagen que retorna un componente de HTML:

        for (b=0; b < cuantosGrids; b++) {
        
            for (i=0; i < 12; i++) {

                let id = respuesta.id[ i + b * 12 ];
                let source = respuesta.urlImagen[ i + b * 12 ];
                let rowStart = grid[i][1] + b * 12;
                let rowEnd = grid[i][3] + b * 12;

                let style = 
                    'grid-column-start:' + grid[i][0] + 
                    ';grid-column-end:' + grid[i][2] + 
                    ';grid-row-start:' + rowStart + 
                    ';grid-row-end:' + rowEnd
                ;

                let autor = respuesta.autor[i]; URLautor = respuesta.urlAutor[i];
            
                $('#gallery').append( crearImagen(source, style, autor, URLautor, id) );
            }
        }
        
        // Chequeo si alguna de las fotos con las que responde la API
        // ya fue likeada por el usuario anteriormente
        // en cuyo caso le cambio el ícono del corazón a solid ('fas fa-heart'):

        for (i=0; i<data.photos.length; i++) {
            if (listaFavoritas.length) {
                for (f=0; f<listaFavoritas.length; f++) {
                    if (listaFavoritas[f].id==respuesta.id[i]) {
                        $('#icon-heart-' + respuesta.id[i]).removeClass('far fa-heart');
                        $('#icon-heart-' + respuesta.id[i]).addClass('fas fa-heart');
                    }
                }
            }
        }
        
        // FOOOTER
        $('#container').append($('<p/>', {id: 'footer'}));
        $('#footer').html(`<br><br><br>© 2020 <a style='color: #444444' target='_blank' href='https://instagram.com/dav.led.a'>Dav Leda</a> <br><br><br>`);
        $('#gallery').fadeIn(400)
    }
}




//      ______                                  _   _                 
//     |  ____|                                (_) | |                
//     | |__      __ _  __   __   ___    _ __   _  | |_    __ _   ___ 
//     |  __|    / _` | \ \ / /  / _ \  | '__| | | | __|  / _` | / __|
//     | |      | (_| |  \ V /  | (_) | | |    | | | |_  | (_| | \__ \
//     |_|       \__,_|   \_/    \___/  |_|    |_|  \__|  \__,_| |___/
//                                                                    
//                                                                    



// Clase para mapear la meta-data de cada foto favorita:

class Favorita {
    constructor(elID, laImagen, elAutor, linkAutor) {
  
      this.id = elID
      this.urlFoto = laImagen
      this.autor = elAutor
      this.urlAutor = linkAutor
    }
  }
  
  favFoto = new Favorita();
  
  


//                                                                ______                 
//         /\                                                    |  ____|                
//        /  \      __ _   _ __    ___    __ _    __ _   _ __    | |__      __ _  __   __
//       / /\ \    / _` | | '__|  / _ \  / _` |  / _` | | '__|   |  __|    / _` | \ \ / /
//      / ____ \  | (_| | | |    |  __/ | (_| | | (_| | | |      | |      | (_| |  \ V / 
//     /_/    \_\  \__, | |_|     \___|  \__, |  \__,_| |_|      |_|       \__,_|   \_/  
//                  __/ |                 __/ |                                          
//                 |___/                 |___/                                           

  // Función para agregar fotos a la lista de favoritas:
  
  agregarAfavs = (mainID, URLimg, author, authorURL) => {
  
    if ($('#icon-heart-'+mainID).hasClass('fas')) { 
  
      // Si la foto ya fue likeada anteriormente, entonces borrarla:
  
      buscarYborrar(mainID) 
  
    }else{
      let cuantasFavoritas = listaFavoritas.length;
      favFoto[cuantasFavoritas] = new Favorita(mainID, URLimg, author, authorURL, mainID);
  
      $('#icon-heart-' + mainID).removeClass('far fa-heart');
      $('#icon-heart-' + mainID).addClass('fas fa-heart');
  
      // Agrego la foto a la lista, incluyendo toda la meta-data de la foto, y la guardo en Local Storage:
  
      listaFavoritas.push(favFoto[cuantasFavoritas]); guardar(listaFavoritas)
    }
  }
  
  

//      __  __                 _                             ______                 
//     |  \/  |               | |                           |  ____|                
//     | \  / |   ___    ___  | |_   _ __    __ _   _ __    | |__      __ _  __   __
//     | |\/| |  / _ \  / __| | __| | '__|  / _` | | '__|   |  __|    / _` | \ \ / /
//     | |  | | | (_) | \__ \ | |_  | |    | (_| | | |      | |      | (_| |  \ V / 
//     |_|  |_|  \___/  |___/  \__| |_|     \__,_| |_|      |_|       \__,_|   \_/  
//                                                                                  
//                                                                                  

  mostrarFavoritas = () => {
  
    $('#container').empty();
  
    // Primero creo el grid para la sección "Favoritas":
     
    crearNuevaFilaGridFavoritas(100);
  
    // Un if para comprobar que haya algo en la lista de favoritas:
  
    if (!listaFavoritas.length) {
      let noHay = `<p>Aún no seleccionaste ninguna foto favorita. 🤔</p>`
      $('#container').html(noHay);
    }else{
  
      // Creación de la galería de favoritas:
  
      $('#container').append($('<div/>', {id: 'gallery', class: 'gallery'}));
      $('#gallery').css("display", "none");
      
      listaFavoritas.forEach(appendarEnGrid);
  
      $('#gallery').fadeIn(400)
    }
  }
  
  appendarEnGrid = (_, i) => {
  
    let source = listaFavoritas[i].urlFoto;
  
    let style = 
    'grid-column-start:' + gridFavoritas[i][0] + 
    ';grid-column-end:' + gridFavoritas[i][2] + 
    ';grid-row-start:' + gridFavoritas[i][1] +
    ';grid-row-end:' + gridFavoritas[i][3];
  
    let author = listaFavoritas[i].autor;
    let authorURL = listaFavoritas[i].urlAutor;
    let unID = listaFavoritas[i].id;
    let ordenArrayFavs = i;
  
    $('#gallery').append( crearFavs(source, style, author, authorURL, unID, ordenArrayFavs) );
  }
  


//      ______                      _____                                                              _   
//     |  ____|                    / ____|                                                            | |  
//     | |__      __ _  __   __   | |        ___    _ __ ___    _ __     ___    _ __     ___   _ __   | |_ 
//     |  __|    / _` | \ \ / /   | |       / _ \  | '_ ` _ \  | '_ \   / _ \  | '_ \   / _ \ | '_ \  | __|
//     | |      | (_| |  \ V /    | |____  | (_) | | | | | | | | |_) | | (_) | | | | | |  __/ | | | | | |_ 
//     |_|       \__,_|   \_/      \_____|  \___/  |_| |_| |_| | .__/   \___/  |_| |_|  \___| |_| |_|  \__|
//                                                             | |                                         
//                                                             |_|                                         

  // Componente de HTML para cada celda de fotos favoritas:
  
  crearFavs = (source, style, autor, URLautor, mainID, ordenID) => {
    return `
    <figure style="${style}" class="figure" id="figure-fav-${ordenID}" ondblclick="modal('${source}', '${autor}', '${URLautor}')">
      <img src="${source}" class="gallery__img" alt="imagen">
      <div class="overlay" id="overlay-${mainID}" ontouchend="modalTouch('${source}', '${autor}', '${URLautor}', '${mainID}')">
        <a href="javascript:modal('${source}', '${autor}', '${URLautor}', '${mainID}')" class="icon">
          <i id="icon-modal-${mainID}" class="fas fa-external-link-alt">
          </i>
        </a>
        <a href="javascript:borrarFavEnFavoritas('${ordenID}', '${mainID}')" class="icon">
          <i id="icon-heart-${mainID}" class="fas fa-heart">
          </i>
        </a>
      </div>
    </figure>`
  }
  

  


//      ____                                           ______                 
//     |  _ \                                         |  ____|                
//     | |_) |   ___    _ __   _ __    __ _   _ __    | |__      __ _  __   __
//     |  _ <   / _ \  | '__| | '__|  / _` | | '__|   |  __|    / _` | \ \ / /
//     | |_) | | (_) | | |    | |    | (_| | | |      | |      | (_| |  \ V / 
//     |____/   \___/  |_|    |_|     \__,_| |_|      |_|       \__,_|   \_/  
//                                                                            
//                                                                            

  // Función para borrar una foto de la lista de favoritas estando en la sección "Favoritas":
  
  borrarFavEnFavoritas = (ordenID, mainID) => {
  
    // Primero quiero que el ícono del corazón se vacíe 
    // y después que la foto se borre, no al mismo tiempo.
    // Para eso uso un callback dentro del fadeOut:
  
    if ($('#figure-fav-'+ordenID)!=null) {
      setTimeout( () => { 
        $('#figure-fav-'+ordenID).fadeOut('slow', () => {
          $('#figure-fav-'+ordenID).remove() 
      })
      }, 300)
    }
  
    buscarYborrar(mainID)
  }
  
  
  buscarYborrar = mainID => {
  
    $('#icon-heart-' + mainID).removeClass('fas fa-heart');
    $('#icon-heart-' + mainID).addClass('far fa-heart');
  
    // El método .entries() genera un array de dos elementos: index[0] e index[1].
    // index[0] es el número de index del elemento en el array, index[1] es el contenido de ese elemento en el array.
  
    for ( index of listaFavoritas.entries() ) {
      if (listaFavoritas[index[0]].id == mainID)
        { listaFavoritas.splice(index[0], 1) }
    }
    guardar(listaFavoritas)
  }
  
  guardar = queGuardar => localStorage.setItem("favoritas", JSON.stringify(queGuardar));
  
  
  
  
/* 

                         _                                                        _           _  
 __   __   ___   _ __   | |_    __ _   _ __     __ _      _ __ ___     ___     __| |   __ _  | | 
 \ \ / /  / _ \ | '_ \  | __|  / _` | | '_ \   / _` |    | '_ ` _ \   / _ \   / _` |  / _` | | | 
  \ V /  |  __/ | | | | | |_  | (_| | | | | | | (_| |    | | | | | | | (_) | | (_| | | (_| | | | 
   \_/    \___| |_| |_|  \__|  \__,_| |_| |_|  \__,_|    |_| |_| |_|  \___/   \__,_|  \__,_| |_| 
                                                                                                 
                                                                                                 
*/
  // Creación de la ventana modal para ver la foto en grande.
  // Se puede abrir tanto desde el grid de búsqueda como desde la sección "Favoritas".
  // Si el usuario está viendo la versión Desktop la modal tiene este formato:
  
  modal = (imagenURL, autor, URLautor, mainID) => {
  
    $('#overlay-'+mainID).off(); $('#ventanaModal').empty();
  
    $('#ventanaModal')
    .append($('<img/>', {id: 'imagen', src: imagenURL, class: 'modal-content'}))
    .append($('<img/>', {id: 'close-icon', src: './src/images/close-icon.png', class: 'close-icon'}))
    .append($('<div/>', {id: 'autor', class: 'autor'}));
  
    // Link a la página del fotógrafo:
  
    let fotografo = `Autor: <a style='color: #fafafa' target='_blank' href='${URLautor}'>${autor}</a>`;
  
    $('#imagen').attr("src", imagenURL);
    $('#autor').html(fotografo);
    $('#ventanaModal').fadeIn(500);   
  
    $('#close-icon').on('click', () => { $('#ventanaModal').fadeOut(500);  })
  }
  



//      __  __               _           _     _______                          _     
//     |  \/  |             | |         | |   |__   __|                        | |    
//     | \  / |   ___     __| |   __ _  | |      | |      ___    _   _    ___  | |__  
//     | |\/| |  / _ \   / _` |  / _` | | |      | |     / _ \  | | | |  / __| | '_ \ 
//     | |  | | | (_) | | (_| | | (_| | | |      | |    | (_) | | |_| | | (__  | | | |
//     |_|  |_|  \___/   \__,_|  \__,_| |_|      |_|     \___/   \__,_|  \___| |_| |_|
//                                                                                    
//                                                                                    

  // Esta función es para registrar el doble tap en pantallas touch:
  
  modalTouch = (imagenURL, autor, URLautor, mainID) => {
  
    $('#overlay-'+mainID).doubletap( () => { abrirModal(imagenURL, autor, URLautor, mainID) });
  }
  
  
  // Si el usuario está viendo la versión móvil la modal se abre con este formato:
  
  abrirModal = (imagenURL, autor, URLautor, mainID) => {
  
    $('#overlay-'+mainID).off();
  
    $('#ventanaModal').empty();
  
    let heartID = 'heart-' + mainID;
  
    $('#ventanaModal')
    .append($('<img/>', {id: heartID, src: './src/images/heart-empty.png', class: 'heart-icon'}))
    .append($('<img/>', {id: 'imagen', src: imagenURL, class: 'modal-content'}))
    .append($('<img/>', {id: 'close-icon', src: './src/images/close-icon.png', class: 'close-icon'}))
    .append($('<div/>', {id: 'autor', class: 'autor'}));
  
    // Si la modal es abierta desde la sección de búsqueda
    // debe chequear si la foto ya fue agregada a favoritas, y en ese caso mostrar el ícono del corazón full.
    // Para eso itero sobre la lista de favoritas:
  
    for ( index of listaFavoritas.entries() ) {
      if (listaFavoritas[index[0]].id === mainID)
        { 
          $('#heart-'+mainID).attr('src','./src/images/heart-full.png')
        }
    }
  
    // Footer para mostrar el link de la página del fotógrafo:
  
    let fotografo = `Autor: <a style='color: #fafafa' target='_blank' href='${URLautor}'>${autor}</a>`;
    
    $('#autor').html(fotografo);
  
    // Cuando está todo cargado hago un fade in de la modal:
  
    $('#ventanaModal').fadeIn(500);   
  
    // Evento para dar like a la foto desde la ventana modal:
  
    $('.heart-icon').on('touchend', () =>{
  
      if ($('#heart-'+mainID).attr('src')=='./src/images/heart-empty.png') {
  
        $('#heart-'+mainID).attr('src','./src/images/heart-full.png');
      
        agregarAfavs(mainID, imagenURL, autor, URLautor);
  
      }else{
  
        $('#heart-'+mainID).attr('src','./src/images/heart-empty.png');
        
        // Si el usuario toca el corazón y la foto ya estaba en favoritas, se borra de favoritas:
  
        buscarYborrar(mainID);
  
        // Reseteo el grid de favoritas con la nueva lista:
  
        mostrarFavoritas()      
      }
    });
  
    // Evento para cerrar la ventana modal con tacto:
  
    $('#close-icon').on('touchend', () => { $('#ventanaModal').fadeOut(500);  })
  }
  
  



//       _____          _       _     ______                                  _   _                 
//      / ____|        (_)     | |   |  ____|                                (_) | |                
//     | |  __   _ __   _    __| |   | |__      __ _  __   __   ___    _ __   _  | |_    __ _   ___ 
//     | | |_ | | '__| | |  / _` |   |  __|    / _` | \ \ / /  / _ \  | '__| | | | __|  / _` | / __|
//     | |__| | | |    | | | (_| |   | |      | (_| |  \ V /  | (_) | | |    | | | |_  | (_| | \__ \
//      \_____| |_|    |_|  \__,_|   |_|       \__,_|   \_/    \___/  |_|    |_|  \__|  \__,_| |___/
//                                                                                                  
//                                                                                                  


  // Grid de CSS para las fotos favoritas. Todas las filas son iguales.
  
  let gridFavoritas = [ [1,1,3,3],[3,1,5,3],[5,1,7,3],[7,1,9,3] ];
  
  crearNuevaFilaGridFavoritas = cuantas => {
  
    for (f = 1; f<cuantas+1; f++) {
  
      for (i=0; i<4; i++) {
  
        let celdaGrid = 
          [ 
            gridFavoritas[i][0],
            gridFavoritas[i][1] + 2 * f,
            gridFavoritas[i][2],
            gridFavoritas[i][3] + 2 * f,
          ]
          gridFavoritas.push(celdaGrid);
      }
    }
  }
  






//                 _____    _____     _______                      _                  _                  
//         /\     |  __ \  |_   _|   |__   __|                    | |                | |                 
//        /  \    | |__) |   | |        | |     _ __    __ _    __| |  _   _    ___  | |_    ___    _ __ 
//       / /\ \   |  ___/    | |        | |    | '__|  / _` |  / _` | | | | |  / __| | __|  / _ \  | '__|
//      / ____ \  | |       _| |_       | |    | |    | (_| | | (_| | | |_| | | (__  | |_  | (_) | | |   
//     /_/    \_\ |_|      |_____|      |_|    |_|     \__,_|  \__,_|  \__,_|  \___|  \__|  \___/  |_|   
//                                                                                                       
//                                                                                                       

// Llamada a la API de traducción:

traducir = queTraducir => {

  loader();

  let ref = firebase.database().ref("/zzz/traductor")

  ref.once("value", function(snapshot) {

       let arrayTraduccion = [];

       let options = {

           method: 'POST',
           url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
           params: {
           to: 'en',
           'api-version': '3.0',
           from: 'es',
           profanityAction: 'NoAction',
           textType: 'plain'
           },
           headers: {
           'content-type': 'application/json',
           'x-rapidapi-key': snapshot.val(),
           'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com'
           },
           data: [{Text: queTraducir}]
       };
     
       axios.request(options).then(response => {

           response.data[0].translations.forEach(translation => {
           
               arrayTraduccion.push(translation.text)
               
               let traduccion = arrayTraduccion.toString(); clog(traduccion);

               buscarImagenes(traduccion)
           })
           
       }).catch(error => { console.error(error) } )

  })
}




//                 _____    _____       _____                         _       
//         /\     |  __ \  |_   _|     |  __ \                       | |      
//        /  \    | |__) |   | |       | |__) |   ___  __  __   ___  | |  ___ 
//       / /\ \   |  ___/    | |       |  ___/   / _ \ \ \/ /  / _ \ | | / __|
//      / ____ \  | |       _| |_      | |      |  __/  >  <  |  __/ | | \__ \
//     /_/    \_\ |_|      |_____|     |_|       \___| /_/\_\  \___| |_| |___/
//                                                                            
//                                                                            


// Llamada a la API de Pexels:

const buscarImagenes = queBuscar => {

   if (!queBuscar) {
       $('#container').empty();
       let ingresa = 'Por favor ingresá algo para buscar. ☝🏻'
       $('#container').append($('<p/>', {text: ingresa} ));

   }else{

       loader();

       let ref = firebase.database().ref("/zzz/buscafotos")

       ref.once("value", function(snapshot) {

           let cuantasFotos = cuantosGrids * 12;

           const url = "https://api.pexels.com/v1/search?query="+queBuscar+"&per_page="+cuantasFotos+"&page=1"
           
           const APIkey = snapshot.val();
           
           $.ajax(
               {
                   method: 'GET',
                   url,
                   headers: {
                       "Authorization": APIkey
                   },
                   data: {
                       q : queBuscar,
                   }
               })
           .done( (data) => {
               crearArrayFotos(data, queBuscar)})
           .fail( (error) => {
               clog(error)}) 
       })
   }
}





//      _        _____   ____    _____               _____    _____   ______    _____     
//     | |      |_   _| |  _ \  |  __ \      /\     |  __ \  |_   _| |  ____|  / ____|  _ 
//     | |        | |   | |_) | | |__) |    /  \    | |__) |   | |   | |__    | (___   (_)
//     | |        | |   |  _ <  |  _  /    / /\ \   |  _  /    | |   |  __|    \___ \     
//     | |____   _| |_  | |_) | | | \ \   / ____ \  | | \ \   _| |_  | |____   ____) |  _ 
//     |______| |_____| |____/  |_|  \_\ /_/    \_\ |_|  \_\ |_____| |______| |_____/  (_)
//                                                                                        
//                                                                                        




//      _____                    _       _            _______                 
//     |  __ \                  | |     | |          |__   __|                
//     | |  | |   ___    _   _  | |__   | |   ___       | |      __ _   _ __  
//     | |  | |  / _ \  | | | | | '_ \  | |  / _ \      | |     / _` | | '_ \ 
//     | |__| | | (_) | | |_| | | |_) | | | |  __/      | |    | (_| | | |_) |
//     |_____/   \___/   \__,_| |_.__/  |_|  \___|      |_|     \__,_| | .__/ 
//                                                                     | |    
//                                                                     |_|    


(function($) {

  // Based on https://gist.github.com/asgeo1/1652946

  /**
   * Bind an event handler to a "double tap" JavaScript event.
   * @param {function} handler
   * @param {number} [delay=300]
   */
  $.fn.doubletap = $.fn.doubletap || function(handler, delay) {
    delay = delay == null ? 300 : delay;
    this.bind('touchend', function(event) {
      var now = new Date().getTime();
      // The first time this will make delta a negative number.
      var lastTouch = $(this).data('lastTouch') || now + 1;
      var delta = now - lastTouch;
      if (delta < delay && 0 < delta) {
        // After we detect a doubletap, start over.
        $(this).data('lastTouch', null);
        if (handler !== null && typeof handler === 'function') {
          handler(event);
        }
      } else {
        $(this).data('lastTouch', now);
      }
    });
  };

})(jQuery);





//       _____           _                                       _                       _     _                 
//      / ____|         | |                      /\             (_)                     | |   (_)                
//     | |        ___   | |   ___    _ __       /  \     _ __    _   _ __ ___     __ _  | |_   _    ___    _ __  
//     | |       / _ \  | |  / _ \  | '__|     / /\ \   | '_ \  | | | '_ ` _ \   / _` | | __| | |  / _ \  | '_ \ 
//     | |____  | (_) | | | | (_) | | |       / ____ \  | | | | | | | | | | | | | (_| | | |_  | | | (_) | | | | |
//      \_____|  \___/  |_|  \___/  |_|      /_/    \_\ |_| |_| |_| |_| |_| |_|  \__,_|  \__| |_|  \___/  |_| |_|
//                                                                                                               
//                                                                                                               

/**!
 * @preserve Color animation 1.6.0
 * http://www.bitstorm.org/jquery/color-animation/
 * Copyright 2011, 2013 Edwin Martin
 * Released under the MIT and GPL licenses.
 */

(function($) {
	/**
	 * Check whether the browser supports RGBA color mode.
	 *
	 * Author Mehdi Kabab <http://pioupioum.fr>
	 * @return {boolean} True if the browser support RGBA. False otherwise.
	 */
	function isRGBACapable() {
		var $script = $('script:first'),
				color = $script.css('color'),
				result = false;
		if (/^rgba/.test(color)) {
			result = true;
		} else {
			try {
				result = ( color != $script.css('color', 'rgba(0, 0, 0, 0.5)').css('color') );
				$script.css('color', color);
			} catch (e) {
			}
		}

		return result;
	}

	$.extend(true, $, {
		support: {
			'rgba': isRGBACapable()
		}
	});

	var properties = ['color', 'backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'outlineColor'];
	$.each(properties, function(i, property) {
		$.Tween.propHooks[ property ] = {
			get: function(tween) {
				return $(tween.elem).css(property);
			},
			set: function(tween) {
				var style = tween.elem.style;
				var p_begin = parseColor($(tween.elem).css(property));
				var p_end = parseColor(tween.end);
				tween.run = function(progress) {
					style[property] = calculateColor(p_begin, p_end, progress);
				}
			}
		}
	});

	// borderColor doesn't fit in standard fx.step above.
	$.Tween.propHooks.borderColor = {
		set: function(tween) {
			var style = tween.elem.style;
			var p_begin = [];
			var borders = properties.slice(2, 6); // All four border properties
			$.each(borders, function(i, property) {
				p_begin[property] = parseColor($(tween.elem).css(property));
			});
			var p_end = parseColor(tween.end);
			tween.run = function(progress) {
				$.each(borders, function(i, property) {
					style[property] = calculateColor(p_begin[property], p_end, progress);
				});
			}
		}
	}

	// Calculate an in-between color. Returns "#aabbcc"-like string.
	function calculateColor(begin, end, pos) {
		var color = 'rgb' + ($.support['rgba'] ? 'a' : '') + '('
				+ parseInt((begin[0] + pos * (end[0] - begin[0])), 10) + ','
				+ parseInt((begin[1] + pos * (end[1] - begin[1])), 10) + ','
				+ parseInt((begin[2] + pos * (end[2] - begin[2])), 10);
		if ($.support['rgba']) {
			color += ',' + (begin && end ? parseFloat(begin[3] + pos * (end[3] - begin[3])) : 1);
		}
		color += ')';
		return color;
	}

	// Parse an CSS-syntax color. Outputs an array [r, g, b]
	function parseColor(color) {
		var match, quadruplet;

		// Match #aabbcc
		if (match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color)) {
			quadruplet = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];

			// Match #abc
		} else if (match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color)) {
			quadruplet = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];

			// Match rgb(n, n, n)
		} else if (match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) {
			quadruplet = [parseInt(match[1]), parseInt(match[2]), parseInt(match[3]), 1];

		} else if (match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color)) {
			quadruplet = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10),parseFloat(match[4])];

			// No browser returns rgb(n%, n%, n%), so little reason to support this format.
		} else {
			quadruplet = colors[color];
		}
		return quadruplet;
	}

	// Some named colors to work with, added by Bradley Ayers
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/
	var colors = {
		'aqua': [0,255,255,1],
		'azure': [240,255,255,1],
		'beige': [245,245,220,1],
		'black': [0,0,0,1],
		'blue': [0,0,255,1],
		'brown': [165,42,42,1],
		'cyan': [0,255,255,1],
		'darkblue': [0,0,139,1],
		'darkcyan': [0,139,139,1],
		'darkgrey': [169,169,169,1],
		'darkgreen': [0,100,0,1],
		'darkkhaki': [189,183,107,1],
		'darkmagenta': [139,0,139,1],
		'darkolivegreen': [85,107,47,1],
		'darkorange': [255,140,0,1],
		'darkorchid': [153,50,204,1],
		'darkred': [139,0,0,1],
		'darksalmon': [233,150,122,1],
		'darkviolet': [148,0,211,1],
		'fuchsia': [255,0,255,1],
		'gold': [255,215,0,1],
		'green': [0,128,0,1],
		'indigo': [75,0,130,1],
		'khaki': [240,230,140,1],
		'lightblue': [173,216,230,1],
		'lightcyan': [224,255,255,1],
		'lightgreen': [144,238,144,1],
		'lightgrey': [211,211,211,1],
		'lightpink': [255,182,193,1],
		'lightyellow': [255,255,224,1],
		'lime': [0,255,0,1],
		'magenta': [255,0,255,1],
		'maroon': [128,0,0,1],
		'navy': [0,0,128,1],
		'olive': [128,128,0,1],
		'orange': [255,165,0,1],
		'pink': [255,192,203,1],
		'purple': [128,0,128,1],
		'violet': [128,0,128,1],
		'red': [255,0,0,1],
		'silver': [192,192,192,1],
		'white': [255,255,255,1],
		'yellow': [255,255,0,1],
		'transparent': [255,255,255,0]
	};
})(jQuery);