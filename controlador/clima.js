const axios = require('axios'); //libreria axios: peticiones http devuelve una promesa
const getClima = async(ciudad) => {
    const ciudadURL = encodeURI(ciudad); //codificar para q se pueda utilizar en la URL 
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadURL}&appid=59c4794622a7784d65073545da0ce0ef&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
        getClima
    }
    //en resp se guardda todo el json