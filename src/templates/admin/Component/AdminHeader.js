import React from 'react'
import {
  LoginOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
export default function AdminHeader() {
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate('/admin')
  }
  return (
    <div className='adminHeader'>
    <img src='/assets/images/FTnew.png' className='dashBoardLogo'/>
    <span className='logoutBtn'
    onClick={logout}><LoginOutlined/></span>
    </div>
  )
}
