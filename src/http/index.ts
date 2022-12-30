import axios from "axios";

const http = axios.create({
    baseURL:"/api",
    timeout:6000,
})


export default http