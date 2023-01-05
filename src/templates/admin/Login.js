import React from 'react'
import { NavLink } from 'react-router-dom'
export default function LoginTemplate() {
  return (
      <div className='container'>

        <form>
          <div className="form_input">
            <div className='row'>
              <div className='col-md-12 text-center'>
                <h3>Admin Login</h3>
              </div>
            </div>
            <label>Email</label>
            <input type="text" />


            <label>Password</label>


            <input type="password" />
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
