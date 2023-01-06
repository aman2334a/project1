import React,{useEffect, useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import {adminLogin} from '../../Services/adminServices/service'
export default function LoginTemplate() {
  const [data, setData] = useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const changeData=(key,value)=>{
    let tmp={...data}
    tmp[key]=value
    setData(tmp)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(data)
    adminLogin(data)
    .then(function (response) {
      console.log(response.data);
      let token=response.data.token
      localStorage.setItem("Token",token)
      navigate('/admin/reports')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(()=>{
    let token=localStorage.getItem('Token')
    if(token){
      navigate('/admin/reports')
    }
  })
  return (
      <div className='container'>

        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3>Admin Login</h3>
              </div>
            </div>
            <label>Email</label>
            <input type="email"  value={data.email} onChange={(e)=>changeData('email',e.target.value)}   />


            <label>Password</label>


            <input type="password" value={data.password} onChange={(e)=>changeData('password',e.target.value)}/>
            <button className="btn btn-dark">
              <b>Login</b>
            </button>
            {/* <span>Forgot Password?</span> */}
            {/* <span><NavLink to='/signup'>Create Account</NavLink></span> */}
          </div>
        </form>
      </div>
  )
}
