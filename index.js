let i2c = require('i2c');
let arduino = new i2c(0x18, {device: '/dev/i2c-1', debug:false});
arduino.setAddress(0x8);
arduino.writeByte(0x2, function(err) { console.error(err); });

