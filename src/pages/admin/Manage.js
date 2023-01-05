import React, { useEffect } from 'react'
import Sidebar from './Component/SideBar'
import { useSearchParams } from 'react-router-dom'

import Payment from '../../templates/admin/manage/Payment'
import UserManage from '../../templates/admin/manage/UserManage'
export default function Manage() {
  const [viewPage, setViewPage] = React.useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    console.log(searchParams.get('view'))
    let view = searchParams.get('view')
    if (view === 'UserMangement') {
      setViewPage(1)
    } else {
      setViewPage(0)
    }
  }, [searchParams])
  return (
    <div>
      <Sidebar 
      element={viewPage==0?<Payment />:<UserManage/>}
      />
    </div>
  )
}
