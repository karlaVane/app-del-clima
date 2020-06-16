const clima = require('./controlador/clima')
const colors = require("colors");
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'nombre de la ciudad para obtener el clima',
        demand: true
    },
    opciones: {
        alias: 'o',
        desc: 'opciones para consultar: p -> La presión atmosférica, h -> humedad'
    }
}).argv


let mensaje
const getInformacion = async(ciudad) => {
    try {
        const data = await clima.getClima(argv.ciudad);
        mensaje = "---------------------------------------\n".rainbow
        mensaje += `Ciudad: `.cyan + `${ciudad}`.toUpperCase() + `\nTemperatura: `.cyan + `${data.temp} ° centígrados\n`;
        if (argv.opciones == 'h') {
            mensaje += `Humedad: `.cyan + `${data.humedad}\n`
        } else if (argv.opciones == 'p') {
            mensaje += `Presión: `.cyan + `${data.presion}\n`
        }
        mensaje += "---------------------------------------".rainbow
        return mensaje
    } catch (e) {
        return `No se pudo obtener información de ${ciudad}.`
    }
}

getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log)