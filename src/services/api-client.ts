import axios from "axios";


//this is the api client created
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '8a55b74213e44bf6817f15b3770cf641'
    }
})