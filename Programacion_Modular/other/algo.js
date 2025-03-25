const os = require('os');

function Execute() {
    console.log(`Plataforma: ${os.platform()}`);
    console.log(`Arquitectura: ${os.arch()}`);
    console.log(`Memoria libre: ${os.freemem()} bytes`);
    console.log(`Memoria total: ${os.totalmem()} bytes`);

    const cpus = os.cpus();
    console.log(`Número de núcleos de CPU: ${cpus.length}`);
    console.log(`Modelo del primer núcleo: ${cpus[0].model}`);

    console.log(`Usuario: ${os.hostname()}`);
    console.log(`Maquina de red: ${JSON.stringify(os.networkInterfaces(), null, 2)}`);
    console.log(`Tiempo de uso: ${os.uptime()}`);

    console.log(`Nombre de usuario y directorio: ${JSON.stringify(os.userInfo(), null, 2)}`);
}

module.exports = Execute;