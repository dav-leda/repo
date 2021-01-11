ver = que_ver => console.log(`%c${que_ver} 🥳`, 'display: inline-block; font-size: 20px; color: navy; margin: 5 px; padding: 8px; border-radius: 4px;background-color: beige');

log = algo => `mira ${algo}`;


clg = console.log.bind(console);


frutas = [

    manzana = { cantidad: 1, imagen: '🍎' } ,
    banana = { cantidad: 3, imagen: '🍌' } ,
    cereza = { cantidad: 2, imagen: '🍒' } ,
]

//clg ({frutas})

canasto = []

for (fruta of frutas) {
    for (i=0; i<fruta.cantidad; i++) {canasto.push(fruta.imagen)}
}

//console.table ({canasto})

