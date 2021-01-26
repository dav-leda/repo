

/* 
  _           _          _                                            _           _                
 (_)  _ __   (_)   ___  (_)   __ _   _ __     _ __ ___     ___     __| |  _   _  | |   ___    ___  
 | | | '_ \  | |  / __| | |  / _` | | '__|   | '_ ` _ \   / _ \   / _` | | | | | | |  / _ \  / __| 
 | | | | | | | | | (__  | | | (_| | | |      | | | | | | | (_) | | (_| | | |_| | | | | (_) | \__ \ 
 |_| |_| |_| |_|  \___| |_|  \__,_| |_|      |_| |_| |_|  \___/   \__,_|  \__,_| |_|  \___/  |___/ 
                                                                                                   

*/

const ver = (que_ver) => console.log(`%c\n ${que_ver} `,`color: navy; background-color: beige`);
const esperar = async (segundos) => new Promise(res => setTimeout(res, segundos * 1000));
const puppeteer = require('puppeteer');
const Galaxy = puppeteer.devices['Galaxy S5'];
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const accountSid = 'xxxxxxxxx';
const authToken = 'xxxxxxxxxxx';
const client = require('twilio')(accountSid, authToken);
const shell = require('shelljs');





/*
                         _                   __  __      _      ___   _
   ___   _ __   __   __ (_)   __ _   _ __   |  \/  |    / \    |_ _| | |
  / _ \ | '_ \  \ \ / / | |  / _` | | '__|  | |\/| |   / _ \    | |  | |
 |  __/ | | | |  \ V /  | | | (_| | | |     | |  | |  / ___ \   | |  | |___
  \___| |_| |_|   \_/   |_|  \__,_| |_|     |_|  |_| /_/   \_\ |___| |_____|

*/

const mail = async (el_html) => {

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'xxxxxxxx',
        pass: 'xxxxxxx'
    }
});

let info = await transporter.sendMail({

    from: 'dav´s robot 🤖 <quantacat.app@gmail.com>', // sender address
    to: 'patriciasalazarcaceres@gmail.com', // list of receivers
    subject: 'Chequeo Locales TOSTADO', // Subject line
    html: `<p style="font-size: 16px;"> Chequeo Locales TOSTADO: </p><br><br>${el_html}`
});

console.log("Message sent: %s", info.messageId);

}




/*
  ____       _      _____      _
 |  _ \     / \    |_   _|    / \
 | | | |   / _ \     | |     / _ \
 | |_| |  / ___ \    | |    / ___ \
 |____/  /_/   \_\   |_|   /_/   \_\

 */

const Locales = {

    Rappi: {

        Av_Cordoba: {
            url: '113952-tostado-cafe-club-buenos-aires-buenos-aires',
            direccion: 'Av Cordoba 1501'},
        Av_Santa_Fe: {
            url: '113925-tostado-cafe-club-buenos-aires-buenos-aires',
            direccion: 'Av Santa Fe 909'},
        Obelisco: {
            url: '114799-tostado-cafe-club-buenos-aires-abs',
            direccion: 'Obel'},
        Belgrano: {
            url: '113924-tostado-cafe-club-buenos-aires-buenos-aires',
            direccion: 'Belgra'},
        Ituzaingo: {
            url: '116244-tostado-cafe-club-provincia-de-buenos-aires-flc',
            direccion: 'Ituzai'},
        Av_Callao: {
            url: '113963-tostado-cafe-club-buenos-aires-aad',
            direccion: 'Cordoba 1800'},
        Nordelta: {
            url: '128403-tostado-cafe-club-provincia-de-buenos-aires-rincon-de-milberg',
            direccion: 'Nordel'},
        Lanús: {
            url: '117869-tostado-cafe-club-provincia-de-buenos-aires-lanus-oeste',
            direccion: 'Lanus'},
        Plaza_Houssay: {
            url: '125562-tostado-cafe-club-buenos-aires-aad',
            direccion: 'Cordoba 2135'},
        Nuñez: {
            url: '113924-tostado-cafe-club-buenos-aires-buenos-aires',
            direccion: 'Nuñez'},
    },

    PedidosYa: {

        Obelisco: {
            url: 'club-obelisco',
            direccion: 'Av Corrientes 999'},
        Obelisco_Café: {
            url: '--obelisco',
            direccion: 'Av Corrientes 999'},
        Av_Cordoba: {
            url: 'club-cordoba',
            direccion: 'Av Cordoba 1501'},
        Av_Cordoba_Café: {
            url: '--cordoba',
            direccion: 'Av Cordoba 1501'},
        Belgrano: {
            url: 'club-juramento',
            direccion: 'Juramento 2103'},
        Belgrano_Café: {
            url: '--juramento',
            direccion: 'Juramento 2103'},
        Av_Santa_Fe: {
            url: 'club-santa-fe',
            direccion: 'Av Santa Fe 909'},
        Av_Santa_Fe_Café: {
            url: '--santa-fe',
            direccion: 'Av Santa Fe 909'},
        Ituzaingo: {
            url: 'club-ituzaingo',
            direccion: 'Juncal 191 Ituzaingo'},
        Ituzaingo_Café: {
            url: '--ituzaingo',
            direccion: 'Juncal 191 Ituzaingo'},
        Av_Callao: {
            url: 'club-callao',
            direccion: 'Av Cordoba 1800'},
        Av_Callao_Café: {
            url: '--callao',
            direccion: 'Av Cordoba 1800'},
        Nordelta: {
            url: 'club-nordelta',
            direccion: 'Av De los Lagos 7008 Nordelta'},
        Lanús: {
            url: 'club-lanus',
            direccion: 'Del Valle Iberlucea 2833 Lanus Oeste9'},
        Lanús_Café: {
            url: '--lanus',
            direccion: 'Del Valle Iberlucea 2833 Lanus Oeste'},
        Rodríguez_Peña: {
            url: 'club-pena',
            direccion: ''},
        Rodríguez_Peña_Café: {
            url: 'pena',
            direccion: ''},
        Plaza_Houssay: {
            url: 'club-plaza-houssay',
            direccion: 'Av Cordoba 2135'},
        Plaza_Houssay_Café: {
            url: 'plaza-houssay',
            direccion: 'Av Cordoba 2135'},
        Canning: {
            url: 'club-canning',
            direccion: ''},
        Canning_Café: {
            url: '--canning',
            direccion: ''}
    }
}


let array_respuestas = [];



/*
                                         _
  _ __    _   _   _ __    _ __     ___  | |_    ___    ___   _ __
 | '_ \  | | | | | '_ \  | '_ \   / _ \ | __|  / _ \  / _ \ | '__|
 | |_) | | |_| | | |_) | | |_) | |  __/ | |_  |  __/ |  __/ | |
 | .__/   \__,_| | .__/  | .__/   \___|  \__|  \___|  \___| |_|
 |_|             |_|     |_|

*/


const chequear_local = async (url, la_app, local, direccion, carpeta, time) => {

/* 
    
    ____               _   _       _                __   __        
   |  _ \    ___    __| | (_)   __| |   ___    ___  \ \ / /   __ _ 
   | |_) |  / _ \  / _` | | |  / _` |  / _ \  / __|  \ V /   / _` |
   |  __/  |  __/ | (_| | | | | (_| | | (_) | \__ \   | |   | (_| |
   |_|      \___|  \__,_| |_|  \__,_|  \___/  |___/   |_|    \__,_|
                                                                   
*/

    if (la_app=='PedidosYa') { 

        let browser = await puppeteer.launch({
            headless: true, // false: se ve el browser.
            slowMo: 100 // delay entre cada comando.
        });

        let page = await browser.newPage();

        await page.goto(url);

        let esCafe = await local.includes('Café');

        let xPath = await esCafe ? '//*[@id="main"]/section/article[1]/span[1]' : '//*[@id="main"]/section[2]/article[1]/span[1]';

        let [index] = await page.$x(xPath);

        let texto = index ? await index.getProperty('textContent') : 'nada';

        ver (texto)

        let textoParse = texto=='nada' ? 'nada' : await texto.jsonValue();

        let incluye = await textoParse.includes('empezar');

        let respuesta = await incluye ? 'ABIERTO' : 'CERRADO';

        ver ( `${la_app}: el local Tostado ${local} se encuentra ${respuesta}.` );

        await page.emulate(Galaxy);

        let el_path = `${carpeta}/screenshot_${la_app}_${local}_${time}.jpg`;

        await page.screenshot({ 
            path: el_path,
            type: 'jpeg',
            fullPage: false
        });

        await browser.close();

        return respuesta;

    }else{

/*
             ____       _      ____    ____    ___
            |  _ \     / \    |  _ \  |  _ \  |_ _|
            | |_) |   / _ \   | |_) | | |_) |  | |
            |  _ <   / ___ \  |  __/  |  __/   | |
            |_| \_\ /_/   \_\ |_|     |_|     |___|

*/
    let browser = await puppeteer.launch({
        headless: true, // false: se ve el browser.
        slowMo: 600 // delay entre cada comando.
    });

    let page = await browser.newPage();

    await page.goto(url);

    await page.waitForSelector('#rappi-address-input');

    await page.type("#rappi-address-input", direccion);

    await page.evaluate(() => {
        let elements = document.getElementsByClassName('result-description');
        let element = elements[0]; element.click();
    });

    await page.waitForSelector('#rappi-address-input');

    await (await page.$('#rappi-address-input')).press('Enter');

    await page.evaluate(() => {
        let elements = document.getElementsByClassName('continue-button');
        let element = elements[0]; element.click();
    });

    let xPath = '//*[@id="category-products-96184"]/div/div/div[1]/div/p';

    let [index] = await page.$x(xPath); ver ('index ' + index);

    let texto = index ? await index.getProperty('textContent') : 'nada';

    ver (texto)

    let textoParse = texto=='nada' ? 'nada' : await texto.jsonValue();

    ver (textoParse)

    let incluye = await textoParse.includes('No');

    let respuesta = await incluye ? 'CERRADO' : 'ABIERTO';

    ver ( `${la_app}: El local Tostado ${local} se encuentra ${respuesta}.` );

    await browser.close();

    return respuesta

    }
};



/*

         _                                                            _                 _                  __ __
   ___  | |__     ___    __ _   _   _    ___    __ _   _ __          | |_    ___     __| |   ___    ___   / / \ \
  / __| | '_ \   / _ \  / _` | | | | |  / _ \  / _` | | '__|         | __|  / _ \   / _` |  / _ \  / __| | |   | |
 | (__  | | | | |  __/ | (_| | | |_| | |  __/ | (_| | | |            | |_  | (_) | | (_| | | (_) | \__ \ | |   | |
  \___| |_| |_|  \___|  \__, |  \__,_|  \___|  \__,_| |_|     _____   \__|  \___/   \__,_|  \___/  |___/ | |   | |
                           |_|                               |_____|                                      \_\ /_/

*/

const chequear_todos = async _ => {

    let horario = new Date();

    let carpeta_screens = horario.toLocaleString("sv-SE");

    let screen_folder = carpeta_screens.replace(/ /g, '_');

    ver (screen_folder);

    let folder = '/Users/davidleda/Dropbox/LocalesTostado/Fecha_' + screen_folder;

    shell.mkdir('-p', folder);

    for (let la_app in Locales) {

        for (let local in Locales[la_app]) {

            let la_url = la_app == 'PedidosYa' ? 'https://www.pedidosya.com.ar/restaurantes/buenos-aires/tostado-cafe-' + Locales[la_app][local].url + '-menu' : 'https://www.rappi.com.ar/restaurantes/' + Locales[la_app][local].url;

            let la_direccion = Locales[la_app][local].direccion;

            let sucursal = local.replace(/_/g, ' ');

            let time_stamp = new Date().toLocaleTimeString();

            await chequear_local (la_url, la_app, local, la_direccion, folder, time_stamp)
                .then( respuesta => {

                    let objeto_respuesta = { la_app, sucursal, respuesta, time_stamp, la_url };
                    array_respuestas.push(objeto_respuesta);
                })
                .catch( error => console.log (error, local, la_app) )
        }
    }

    return array_respuestas;
}



/*

  _   _   _____   __  __   _
 | | | | |_   _| |  \/  | | |
 | |_| |   | |   | |\/| | | |
 |  _  |   | |   | |  | | | |___
 |_| |_|   |_|   |_|  |_| |_____|

*/


const html_email = async (filas) => `
<style>
table.GeneratedTable {
  width: 100%;
  background-color: #ffffff;
border-collapse: separate;
  border-width: 2px;
  border-color: #ffcc00;
  border-style: solid;
  color: #000000;
}

table.GeneratedTable td, table.GeneratedTable th {
  border-width: 2px;
  border-color: #ffcc00;
  border-style: solid;
  padding: 3px;
}

table.GeneratedTable thead {
  background-color: #ffcc00;
}
</style>

<table class="GeneratedTable" style="width: 100%;background-color: #ffffff;border-collapse: separate;border-width: 2px;border-color: #ffcc00;border-style: solid;color: #000000;">
  <thead style="background-color: #ffcc00;">
    <tr>
      <th style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">App</th>
      <th style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">Marca</th>
      <th style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">Local</th>
      <th style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">Estado</th>
      <th style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">Hora</th>
      <th style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">Link</th>
    </tr>
  </thead>
 <tbody>${filas}</tbody></table>
`;



/*
                                       _   _   _____   __  __   _                                                                                 _
   ___   _ __    ___    __ _   _ __   | | | | |_   _| |  \/  | | |        ___    ___    _ __     _ __    ___   ___   _ __    _   _    ___   ___  | |_    __ _
  / __| | '__|  / _ \  / _` | | '__|  | |_| |   | |   | |\/| | | |       / __|  / _ \  | '_ \   | '__|  / _ \ / __| | '_ \  | | | |  / _ \ / __| | __|  / _` |
 | (__  | |    |  __/ | (_| | | |     |  _  |   | |   | |  | | | |___   | (__  | (_) | | | | |  | |    |  __/ \__ \ | |_) | | |_| | |  __/ \__ \ | |_  | (_| |
  \___| |_|     \___|  \__,_| |_|     |_| |_|   |_|   |_|  |_| |_____|   \___|  \___/  |_| |_|  |_|     \___| |___/ | .__/   \__,_|  \___| |___/  \__|  \__,_|
                                                                                                                    |_|

*/


let string_filas_html = '';



const iniciar_puppeteer = async _ => {

    let respuestas = await chequear_todos();

    for (let index in respuestas) {


        // desestructurar el array de objetos respuesta:

        let {la_app, sucursal, respuesta, time_stamp, la_url} = respuestas[index];

        // crear componente HTML fila:

        string_filas_html += nueva_fila(la_app, sucursal, respuesta, time_stamp, la_url);


    }

    let el_html = await html_email(string_filas_html);

    return el_html;

}




/* 
                                                                    _          
   ___    ___    _ __ ___    _ __     ___    _ __     ___   _ __   | |_    ___ 
  / __|  / _ \  | '_ ` _ \  | '_ \   / _ \  | '_ \   / _ \ | '_ \  | __|  / _ \
 | (__  | (_) | | | | | | | | |_) | | (_) | | | | | |  __/ | | | | | |_  |  __/
  \___|  \___/  |_| |_| |_| | .__/   \___/  |_| |_|  \___| |_| |_|  \__|  \___|
   __   _   _             _ |_|   _____   __  __   _                           
  / _| (_) | |   __ _    | | | | |_   _| |  \/  | | |                          
 | |_  | | | |  / _` |   | |_| |   | |   | |\/| | | |                          
 |  _| | | | | | (_| |   |  _  |   | |   | |  | | | |___                       
 |_|   |_| |_|  \__,_|   |_| |_|   |_|   |_|  |_| |_____|                      
                                                                               
*/

const nueva_fila = (la_app, sucursal, respuesta, time, url) => `
<tr>
      <td style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">${la_app}</td>
      <td style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">Tostado</td>
      <td style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">${sucursal}</td>
      <td style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">${respuesta}</td>
      <td style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;">${time}</td>
      <td style="border-width: 2px;border-color: #ffcc00;border-style: solid;padding: 3px;"><a href=${url} target="_blank">Abrir</a></td>
</tr>
`;


/* 

         _                                                                                    
   ___  | |__     ___    __ _   _   _    ___    __ _   _ __                                   
  / __| | '_ \   / _ \  / _` | | | | |  / _ \  / _` | | '__|                                  
 | (__  | | | | |  __/ | (_| | | |_| | |  __/ | (_| | | |                                     
  \___| |_| |_|  \___|  \__, |  \__,_|  \___|  \__,_| |_|                  _   _              
  _ __ ___     __ _   _ __ |_| __| |   __ _   _ __     _ __ ___     __ _  (_) | |             
 | '_ ` _ \   / _` | | '_ \   / _` |  / _` | | '__|   | '_ ` _ \   / _` | | | | |             
 | | | | | | | (_| | | | | | | (_| | | (_| | | |      | | | | | | | (_| | | | | |             
 |_| |_| |_|  \__,_| |_| |_|  \__,_|  \__,_| |_|      |_| |_| |_|  \__,_| |_| |_|   _         
   __ _  __   __ (_)  ___    ___     __      __  _ __     | |_  __      __ (_) | | (_)   ___  
  / _` | \ \ / / | | / __|  / _ \    \ \ /\ / / | '_ \    | __| \ \ /\ / / | | | | | |  / _ \ 
 | (_| |  \ V /  | | \__ \ | (_) |    \ V  V /  | |_) |   | |_   \ V  V /  | | | | | | | (_) |
  \__,_|   \_/   |_| |___/  \___/      \_/\_/   | .__/     \__|   \_/\_/   |_| |_| |_|  \___/ 
                                                |_|                                           
*/

const dav = '65917710';
const lau = 'xxxxxxxx';
const msg_830 = 'Buen día, Lau! Soy el robot de Dav 🤖. Te acabo de enviar un nuevo mail con el estado de los locales 📩';
const msg_1600 = 'Hola Lau 🤖 Te acabo de enviar un nuevo mail 📩';



const enviar_wpp = async (numero, mensaje) => {

    let number = 'whatsapp:+54911' + numero;
    
      client.messages.create ( {
              from: 'whatsapp:+xxxxxxxxx',
              body: mensaje,
              to: number
      }).then(message => console.log(message.sid)
)}


const start = async (wpp1, msg1, wpp2, msg2) => {

    let respuesta_html = await iniciar_puppeteer();

    await mail(respuesta_html);

    await enviar_wpp(wpp1, msg1);
    await enviar_wpp(wpp2, msg2)
   
}

// start(dav, msg_830, lau, msg_830)

start(dav, msg_1600, lau, msg_1600)

// start(dav, msg_1600)

/*
                                               _                  _           _
   ___   _ __    ___    _ __      ___    ___  | |__     ___    __| |  _   _  | |   ___   _ __
  / __| | '__|  / _ \  | '_ \    / __|  / __| | '_ \   / _ \  / _` | | | | | | |  / _ \ | '__|
 | (__  | |    | (_) | | | | |   \__ \ | (__  | | | | |  __/ | (_| | | |_| | | | |  __/ | |
  \___| |_|     \___/  |_| |_|   |___/  \___| |_| |_|  \___|  \__,_|  \__,_| |_|  \___| |_|


*/



const Horarios = [
    '21 17 * * *', '44 15 * * *', '44 15 * * *', '44 15 * * *', '44 15 * * *'
]

cron.schedule('30 08 * * *', () => { start() } , {
   scheduled: true,
   timezone: "America/Sao_Paulo"
});

cron.schedule('40 9 * * *', () => { start() } , {
   scheduled: true,
   timezone: "America/Sao_Paulo"
});

cron.schedule('5 12 * * *', () => { start() } , {
     scheduled: true,
     timezone: "America/Sao_Paulo"
});




/* 
                                                                            _            
   ___   _ __    ___    __ _   _ __     ___    __ _   _ __   _ __     ___  | |_    __ _  
  / __| | '__|  / _ \  / _` | | '__|   / __|  / _` | | '__| | '_ \   / _ \ | __|  / _` | 
 | (__  | |    |  __/ | (_| | | |     | (__  | (_| | | |    | |_) | |  __/ | |_  | (_| | 
  \___| |_|     \___|  \__,_| |_|      \___|  \__,_| |_|    | .__/   \___|  \__|  \__,_| 
                                                            |_|                          


*/


function crear_carpeta(fullpath) {
    let destination_split = fullpath.replace('/', '\\').split('\\')
    let path_builder = destination_split[0]
    $.each(destination_split, function (i, path_segment) {
      if (i < 1) return true
      path_builder += '\\' + path_segment
      if (!fs.existsSync(path_builder)) {
        fs.mkdirSync(path_builder)
      }
    })
}