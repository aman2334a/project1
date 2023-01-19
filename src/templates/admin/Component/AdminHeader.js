import React from 'react'
import {
  LoginOutlined,
} from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
export default function AdminHeader() {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className='adminHeader'>
   <NavLink to='/'> <img src='/assets/images/FTnew.png' className='dashBoardLogo'/></NavLink>
    <span className='logoutBtn'
    onClick={logout}><LoginOutlined/></span>
    </div>
  )
}
