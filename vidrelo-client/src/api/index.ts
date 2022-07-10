import axios from "axios"
import baseURLLocal from "../constants/ConstantsAxios"
const http = axios.create({
    baseURL: baseURLLocal
})

export default http;