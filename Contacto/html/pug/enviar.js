


const enviar_mail = () => {

    let el_mail = $('#el_mail').val(); 
    let el_mensaje = $('#el_mensaje').val();

    $.post('/mail', { 
        email: el_mail,
        mensaje: el_mensaje
    })

}

