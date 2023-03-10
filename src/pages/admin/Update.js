import React ,{useEffect}from 'react'
import Sidebar from './Component/SideBar'
import { useSearchParams } from 'react-router-dom'
import AddScheme from './../../templates/admin/PortalUpdate/AddScheme'
import HotOffer from './../../templates/admin/PortalUpdate/HotOffer'
import NewService from './../../templates/admin/PortalUpdate/NewService'
import ServiceCategory from './../../templates/admin/PortalUpdate/ServiceCategory'
import AdminLayout from '../../templates/admin/Component/AdminLayout.tsx'
import SubCategory from '../../templates/admin/PortalUpdate/SubCategory'

export default function Update() {
  const [viewPage, setViewPage] = React.useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    console.log(searchParams.get('view'))
    let view = searchParams.get('view')
    if (view === 'HotOffer') {
      setViewPage(1)
    } 
    else if(view ==='NewServices'){
      setViewPage(2)
    }
    else if(view ==='ServiceCategory'){
      setViewPage(3)
    }
    else if(view ==='ServiceSubCategory'){
      setViewPage(4)
    }

    else {
      setViewPage(0)
    }
  }, [searchParams])
  return (
    <div>
        <AdminLayout
        element={viewPage===0?<AddScheme/>:viewPage==1?<HotOffer/>:viewPage==3?<ServiceCategory/>:viewPage==4?<SubCategory/>:<NewService/>}
        title="Portal Update"
        />
    </div>
  )
}
