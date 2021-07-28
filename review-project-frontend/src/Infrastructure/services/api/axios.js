import axios from 'axios';

const clientAxios = axios.create({
    baseURL: 'https://calm-sierra-13847.herokuapp.com/haircutapi/'
});

export default clientAxios;