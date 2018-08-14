/**
 * @TODO:
 * - Instanciar um socket server p/ escutar pelas mensagens
 * - Tratar as mensagens por ponto e vírgula
 * - Definir um padrão p/ mensagens
 * - Verificar questão de ler os sensores do Arduino
 */
 
console.log('Inicializando maquete');
 
/**
 * Inicialização e configuração do socket
 */
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

http.listen(3000, () => {
	console.log('Escutando na porta 3000');
});

/**
 * Inicialização e configuração do Arduino por I2C
 */
//let i2c = require('i2c');
//let arduino = new i2c(0x18, {device: '/dev/i2c-1', debug:false});
//arduino.setAddress(0x8);
//arduino.writeByte(0x2, (err) => { console.error(err); });

io.on('connection', (socket) => {
	console.log('Client conectado');
	socket.on('disconnect', () => {
		console.log('Client desconectado');
	});
	
	/**
	 * @TODO:
	 * - Fazer o parse da mensagem recebida aqui 
	 * - Enviar o respectivo comando para o Arduino
	 */
	
	// Enviar mensagem para todos os clients
	socket.emit('Client conectado');
});
