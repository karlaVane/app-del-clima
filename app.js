const clima = require('./controlador/clima')
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv

console.log(argv.ciudad);
//clima.getClima(argv.ciudad)
//    .then(console.log).catch(console.log); //imprimo lo q devuelve

const getInformacion = async(ciudad) => {
    try {
        const temp = await clima.getClima(argv.ciudad);
        return `El clima de ${ciudad} es de ${temp}`;
    } catch (e) {
        return `No se pudo obtener el clima de ${ciudad} ° centígrados`
    }
}

getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log)