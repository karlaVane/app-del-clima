const axios = require('axios'); //libreria axios: peticiones http devuelve una promesa
const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad); //codificar para q se pueda utilizar en la URL 
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL}&appid=59c4794622a7784d65073545da0ce0ef&units=metric`)
        //en resp se guardda todo el json
    const temp = resp.data.main.temp;
    const humedad = resp.data.main.humidity;
    const presion = resp.data.main.pressure;
    return { temp, humedad, presion };
}
module.exports = {
    getClima
}