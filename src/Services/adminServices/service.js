import axios from 'axios'
// const baseUrl = 'https://fintaxcial-2.onrender.com/v1/'
// const baseUrl = 'http://localhost:7000/v1/'
const baseUrl = 'https://oyster-app-5t2jx.ondigitalocean.app/v1/'

axios.interceptors.request.use((request) => {
  let userData = JSON.parse(localStorage.getItem('fintaxcialUser'))
  request.headers = { 'Authorization': 'Bearer ' + userData?.token }
  return request
})

export const adminLogin = (loginData) => {
  var config = {
    method: 'post',
    url: `${baseUrl}admin/signin`,
    data: loginData
  };

  return axios(config)

}
export const addSchemeApi = (data) => {
  var config = {
    method: 'post',
    url: baseUrl + 'admin/scheme',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjI4NzM2NTQ5NjlmMDAyNzM2ZjA1OSIsInJvbGUiOjAsImlhdCI6MTY3MzAyNDA1M30.LCRFU1cVqO8SLfFCzxvToQ3HwDDjT4InLU2Q_u9jQfI',
      'Content-Type': 'application/json'
    },
    data: data
  };

  return axios(config)

}
export const getSchemeApi = () => {
  var config = {
    method: 'get',
    url: baseUrl + 'admin/scheme',
  };

  return axios(config)

}

export const getSchemeById = (id) => {
  var config = {
    method: 'get',
    url: baseUrl + 'admin/scheme/' + id,
  };

  return axios(config)

}

export const updateScheme = (id, data) => {
  var config = {
    method: 'put',
    url: baseUrl + 'admin/scheme/' + id,

    data: data
  };

  return axios(config)

}

export const deleteSchemeApi = (id) => {
  var config = {
    method: 'delete',
    url: baseUrl + 'admin/scheme/' + id,

  };

  return axios(config)

}

export const addOffer = (data) => {
  var config = {
    method: 'post',
    url: baseUrl + 'admin/offer',
    data: data
  };

  return axios(config)

}

export const getOfferApi = () => {
  var config = {
    method: 'get',
    url: baseUrl + 'admin/offer',
  };

  return axios(config)


}

export const getOfferById = (id) => {
  var config = {
    method: 'get',
    url: baseUrl + 'admin/offer/' + id,
  };

  return axios(config)

}

export const updateOffer = (id, data) => {
  var config = {
    method: 'put',
    url: baseUrl + 'admin/offer/' + id,

    data: data
  };

  return axios(config)

}

export const deleteOfferApi = (id) => {
  var config = {
    method: 'delete',
    url: baseUrl + 'admin/offer/' + id,

  };

  return axios(config)

}

export const getAllCategory = () => {
  var config = {
    method: 'get',
    url: baseUrl + 'admin/category',

  };

  return axios(config)

}

export const addCategory = (data) => {

  var config = {
    method: 'post',
    url: baseUrl + 'admin/category',

    data: data
  };

  return axios(config)
}

export const getCategoryById = (id) => {

  var config = {
    method: 'get',
    url: baseUrl + 'admin/category/' + id,

  };

  return axios(config)


}

export const updateCategory = (id, data) => {

  var config = {
    method: 'put',
    url: baseUrl + 'admin/category/' + id,
    data: data
  };

  return axios(config)
}

export const deleteCategory = (id) => {

  var config = {
    method: 'delete',
    url: baseUrl + 'admin/category/' + id,

  };

  return axios(config)


}

export const getAllServiceRequests = () => {

  var config = {
    method: 'get',
    url: baseUrl + 'admin/serviceRequest',

  };

  return axios(config)
    

}

export const addSubCategory = (data) => {

  var config = {
    method: 'post',
    url: baseUrl + 'admin/subcategory',

    data: data
  };

  return axios(config)
}

export const getSubCategoryById = (id) => {

  var config = {
    method: 'get',
    url: baseUrl + 'admin/subcategory/' + id,

  };

  return axios(config)


}

export const updateSubCategory = (id, data) => {

  var config = {
    method: 'put',
    url: baseUrl + 'admin/subcategory/' + id,
    data: data
  };

  return axios(config)
}

export const deleteSubCategory = (id) => {

  var config = {
    method: 'delete',
    url: baseUrl + 'admin/subcategory/' + id,

  };

  return axios(config)


}
export const getAllSubCategory=()=>{
  var config = {
    method: 'get',
    url: baseUrl + 'admin/subcategory',

  };

  return axios(config)


}





export const  getAllUser=()=>{
  var config = {
    method: 'get',
    url: baseUrl+'admin/user',
  };
  
  return axios(config)
 
}

export const deleteUserApi=(id)=>{
  var config = {
    method: 'delete',
    url: baseUrl+'admin/user/'+id,
   
  };
  
  return axios(config)
  
}
export const  getAllTransaction=()=>{
  var config = {
    method: 'get',
    url: baseUrl+'admin/transactions',
  };
  
  return axios(config)
 
}


export const  getRequestByStatusApi=(status)=>{
  let data={
    "status":status
  }
  var config = {
    method: 'post',
    url: baseUrl+'admin/requestbyStatus',
   
    data : data
  };
  
  return axios(config)
  
}

export const getRequestByCustomerWiseAPi=()=>{
  var config = {
    method: 'get',
    url: baseUrl+'admin/serviceRequests/customerWise',
   
  };
  
  return axios(config)
  
}


export const updateRequestStatusApi=(id,status)=>{
  console.log(id,status)
  let data={
    "status":status
  }
  var config = {
    method: 'post',
    url: baseUrl+'admin/updateRequestStatus/'+id,
    data : data
  };
  
  return axios(config)
  
}


