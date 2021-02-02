


require('dotenv').config();

const nodemailer = require('nodemailer'); 
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const usuario = process.env.USER;
const clave = process.env.PASS;
const port = process.env.PORT;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mail', function(req, res) {

  let el_email = req.body.email;
  let el_mensaje = req.body.mensaje;

  mail(el_email, el_mensaje).catch(console.error);

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const mail = async (el_email, el_mensaje) => {

  const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: usuario,
          pass: clave
      }
  });

  let info = await transporter.sendMail({
    
    from: 'Contacto <quantacat.app@gmail.com>', 
    to: 'davidleda@icloud.com', 
    subject: 'Mail enviado desde la página de contacto', 
    html: `<p style="font-size: 16px;"> Recibiste un mensaje de ${el_email}:<br><br>${el_mensaje} </p>`

  });

  console.log("Message sent: %s", info.messageId);
    
}


