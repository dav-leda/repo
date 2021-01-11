
clg = console.log.bind(console);


nombre = 'Bepo'
apellido = 'Chocho'
edad = 99
ciudad = 'Fantochina'

persona = {nombre, apellido, edad, ciudad}

clg({persona} )

persona = () => `Mi nombre es ${nombre} ${apellido}, tengo ${edad} años y vivo en ${ciudad}.`



