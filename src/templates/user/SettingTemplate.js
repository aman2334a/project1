import React, { useState } from 'react'
import Profile from './setting/Profile'
import Billing from './setting/Billing'
export default function SettingTemplate() {
  // const [page, setPage] = useState(1)
  return (
    <div className='main-page'>
      <Profile />
      <Billing />
    </div>
  )
}
