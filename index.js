console.log('Inicializando maquete');
 
/**
 * Inicialização e configuração do socket
 */
let io = require('socket.io-client'),
    socket = io('http://localhost:5000');

let i2c = require('i2c');

try {
    var arduino = new i2c(0x18, { device: '/dev/i2c-1', debug: true });
    arduino.setAddress(0x8);
} catch (e) {
    console.error('Erro ao inicializar a comunicação I2C com o Arduino');
    throw e;
}
return;
socket.on('statusSensores', function(data) {
    console.log(data);
    // montar string p/ enviar pro Arduino
    let msgi2c = '' +
        data.leds[0].status + ';' +
        data.leds[1].status + ';' +
        data.leds[2].status + ';' +
        data.porta.status + ';' +
        data.ar.status + ';' +
        (data.ar.temperatura < 10 ? '0' : '') + data.ar.temperatura
    ;

    console.log(msgi2c); 

    //arduino.write(msgi2c);
    //arduino.read(15, (err, res) => {
    //    console.log(res);
    //});
});

/**
 * Inicialização e configuração do Arduino por I2C
 */




// Formato: Led1;Led2;Led3;Porta;Ar;TempAr(00 a 99);TempAmbiente(00 a 99)