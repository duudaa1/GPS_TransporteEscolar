import axios from "axios";

const Api = axios.create({
    baseURL:"https://api-backend-gpsescolar.onrender.com/api/"
})
export default Api

