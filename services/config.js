import axios from "axios";

export const http = axios.create({
    baseURL: 'https://ondish.webserverapi.online/api'
})