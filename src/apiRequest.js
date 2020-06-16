import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.REACT_APP_URL;

const buyOrSellRequest = query => {
    return axios.get(`${baseURL}${query}`);
}

export default buyOrSellRequest;
