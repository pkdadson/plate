/* eslint-disable eol-last */
import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://api.nugsknust.com', // store.state.baseApi, 23000
        responseType: 'json',
        timeout: 10000,
        // headers: {
        //     'Access-Control-Allow-Origin': 'www.madakoraa.com',
        //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // }
    })
}