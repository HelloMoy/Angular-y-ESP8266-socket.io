var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var num = 0;

io.on('connection', (socket) =>{
    console.log('Cliente conectado');
    //Datos RGB Angular
    socket.on('rgbAngular', (data) => {
        console.log(data.body);
        io.emit('rgbESP', data.body);
    });

    //Datos toggle Angular
    socket.on('toggleAngular', (data) => {
        console.log(data.body);
        io.emit('toggleESP', data.body);
    });

    //Datos de sensor THC ESP8266
    socket.on('thcESP', (data) => {
        console.log(data);
        io.emit('thcAngular', data);
    });

    //Datos recibidos push ESP8266
    socket.on('pushESP', (data) => {
        console.log(data);
        io.emit('pushAngular', data);
    });
});

//Enviar contador al cliente
//setInterval( () => { 
   // io.emit('contador', num++); 
//}, 1000);

server.listen(5000, () => {
    console.log('Servidor en puerto 5000');
});