import axios from "axios";
const baseUrl = 'http://localhost:7000/v1/'
axios.interceptors.request.use((request) => {
    let token = localStorage.getItem('Token')

    request.headers = { 'Authorization': 'Bearer ' + token }
    return request
})

export const userSignUp = (data) => {

    var config = {
        method: 'post',
        url: baseUrl + '/signup',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)


}

export const userSingin = (data) => {
    var config = {
        method: 'post',
        url: baseUrl + 'signin',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
       
}

export const  getUserProfile=()=>{
    var config = {
        method: 'get',
        url: baseUrl+'getProfile',
       
      };
      
     return axios(config)
      
}