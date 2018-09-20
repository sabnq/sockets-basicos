var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con servidor');
});
//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Sebastian',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Respuesta servidor: ', respuesta);
});
//Escuchar informacion
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor: ', respuesta);
});