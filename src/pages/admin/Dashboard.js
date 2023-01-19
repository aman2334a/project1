import React, { useEffect } from 'react'
import DashboardTemplate from '../../templates/admin/Dashboard'
import Sidebar from './Component/SideBar'
import { useSearchParams } from 'react-router-dom'
import CustomerWise from '../../templates/admin/Reports/CustomerWise'
import ServiceWise from '../../templates/admin/Reports/ServiceWise'
import AdminLayout from '../../templates/admin/Component/AdminLayout.tsx'
export default function Dashboard() {
  const [viewPage, setViewPage] = React.useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(()=>{
    console.log(searchParams.get('view'))
    let view=searchParams.get('view')
    if(view==='CustomerWise'){
      setViewPage(1)
    }else{
      setViewPage(0)
    }
  },[searchParams])
  return (
    <div >
      <AdminLayout
       element={viewPage===0?<ServiceWise/>:<CustomerWise/>}
       title="Reports"
      />
          {/* <Sidebar 
          element={viewPage===0?<CustomerWise/>:<ServiceWise/>}
          /> */}
    </div>
  )
}
