import axios from "axios"

const Api_test = axios.create({
    baseURL:"https://reqres.in/api/"
})
export default Api_test