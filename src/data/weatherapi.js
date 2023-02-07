import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'df09adec0b1b59cee7ea8a803643f101';


export const getWeatherData = async (cityName) => {
    try{ 
         const {data} = await axios.get(baseUrl + `q=${cityName}&appid=${apiKey}`)
         return data;
    }catch(error){
        throw error;
    }
}