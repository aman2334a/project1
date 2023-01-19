import axios from "axios";
// const baseUrl = 'https://fintaxcial-2.onrender.com/v1/'
const baseUrl = 'http://localhost:7000/v1/'
axios.interceptors.request.use((request) => {
    let userData = JSON.parse(localStorage.getItem('fintaxcialUser'))
    request.headers = { 'Authorization': 'Bearer ' + userData?.token }
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

export const getUserProfile = () => {
    var config = {
        method: 'get',
        url: baseUrl + 'getProfile',


    };

    return axios(config)

}

export const forgotPassword=(email)=>{
    var data = {
        "email": email
      };
      
      var config = {
        method: 'post',
        url: baseUrl+'forgotPassword',
        data : data
      };
      
      return axios(config)
      
}

export const validateUser = (token) => {
    var data = {
        "token": token
    }

    var config = {
        method: 'post',
        url: baseUrl + 'validateUser',
        data: data
    };

    return axios(config)

}

export const updatePassword = (token, password) => {
    var data = {
        "password": password,
        "token":token
      };
      
      var config = {
        method: 'post',
        url: baseUrl+'updatePassword',
        data : data
      };
      
      return axios(config)
      
}

export const getAllServiceCategory = () => {
    var config = {
        method: 'get',
        url: baseUrl + 'services',

    };

    return axios(config)

}

export const getAllServiceSubCategory = () => {
    var config = {
        method: 'get',
        url: baseUrl + 'serviceSubCategory',

    };
    return axios(config)



}

export const getAllTransaction=()=>{
    var config = {
        method: 'get',
        url: baseUrl + 'getAllTransaction',

    };
    return axios(config)
}

export const createRequestAPi = (values, id) => {
    let data = {
        reason: values.reason,
        subCategoryId: values.subCategoryId,
        categoryId: id
    }

    var config = {
        method: 'post',
        url: baseUrl + 'newRequest',
        data: data
    };

    return axios(config)


}


export const getAllServiceRequests = () => {
    var config = {
        method: 'get',
        url: baseUrl + 'request',
    };

    return axios(config)


}

export const submitContact=(data)=>{
   
      
      var config = {
        method: 'post',
        url: baseUrl+'submit',
        data : data
      };
      
      return axios(config)
      
}


