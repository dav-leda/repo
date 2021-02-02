



$('#enviar').on('click', () => {

    let el_mail = $('#el_mail').val(); 
    let el_mensaje = $('#el_mensaje').val();

    // $.post('/mail', { 
    //    email: el_mail,
    //    mensaje: el_mensaje
    // })

    console.log(el_mail + ' ' + el_mensaje);

    $('#formulario').hide();
    $('#mensaje').show();

});


$('#volver').on('click', () => {

    $('#el_mail').val(''); 
    $('#el_mensaje').val('');

    $('#mensaje').hide();
    $('#formulario').show();
    
})


