




// En el head del HTML incluir: <script src="src/js/cargarScripts.js"></script>
// En el body del HTML incluir: <body onload="scripts()">

const scripts = () => {

    let listaScripts = ['main', 'header', 'footer', 'navbar', 'modal', 'botones', 'APIcalls', 'loader', 'sliders', 'datatable', 'form', 'tooltips']

    for (let script of listaScripts) {

        let source = 'src/js/'+script+'.js';
        let appendar = document.createElement('script');
        appendar.src = source;
        document.head.append(appendar);
    }
}

