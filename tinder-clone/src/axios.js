import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://back-tinder.herokuapp.com'
})

export default instance;