import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='row'>
        <div className='col-lg-6 mb-5 mb-lg-0 '>
          <img
            style={{ margin: "2%" }}
            src='./assets/images/FTnew.png' />
        </div>
        <div className='col-lg-6 mb-5 mb-lg-0 text-center'>
          <div className='Links'>
            <div className='row'>
              <div className='col-lg-2 mb-5 mb-lg-0 '>
                <span><NavLink to='/'>Home</NavLink></span>
              </div>
              <div className='col-lg-2 mb-5 mb-lg-0 '>
                <span><NavLink to='/about'>About</NavLink></span>
              </div>
              <div className='col-lg-2 mb-5 mb-lg-0 '>
                <span><NavLink to='/contact'>Contact</NavLink></span>
              </div>
              <div className='col-lg-2 mb-5 mb-lg-0 '>
                <span><NavLink to='/membership'>Membership</NavLink></span>
              </div>
              <div className='col-lg-2 mb-5 mb-lg-0 '>
                <span><NavLink to='/services'>Services</NavLink></span>
              </div>
              <div className='col-lg-2 mb-5 mb-lg-0 '>
                <span><NavLink to='/login'>Login</NavLink></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header