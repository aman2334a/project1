import axios from 'axios'
const baseUrl='http://localhost:7000/v1/' 
axios.interceptors.request.use((request)=>{
  let token=localStorage.getItem('Token')
  
  request.headers={'Authorization': 'Bearer '+token}
  return request
})
export const adminLogin=(loginData)=>{
      var config = {
        method: 'post',
        url: `${baseUrl}admin/signin`,
        data : loginData
      };
      
      return axios(config)
      
}
export const addSchemeApi=(data)=>{
  var config = {
    method: 'post',
    url: baseUrl+'admin/scheme',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjI4NzM2NTQ5NjlmMDAyNzM2ZjA1OSIsInJvbGUiOjAsImlhdCI6MTY3MzAyNDA1M30.LCRFU1cVqO8SLfFCzxvToQ3HwDDjT4InLU2Q_u9jQfI', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return axios(config)
  
}
export const getSchemeApi=()=>{
  var config = {
    method: 'get',
    url: baseUrl+'admin/scheme',
  };
  
  return axios(config)
  
}

export const addOffer=(data)=>{
  var config = {
    method: 'post',
    url: baseUrl+'admin/offer',
    data : data
  };
  
  return axios(config)
  
}

export const getOfferApi=()=>{
  var config = {
    method: 'get',
    url: baseUrl+'admin/offer',
  };
  
  return axios(config)
  
  
}
