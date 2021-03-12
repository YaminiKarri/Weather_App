import axios from 'axios';

const URL="http://api.openweathermap.org/data/2.5/weather";
const API_Key ='fae43262eec6fbd6953f7983f41b5225';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });

    return data;
}
