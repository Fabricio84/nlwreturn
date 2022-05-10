import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.0.117:3333'
});

// buscar ip com o comando "ifconfig eno1"