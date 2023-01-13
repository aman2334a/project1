import React from 'react'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import MembershipTemplate from '../templates/MembershipTemplate'
export default function Membership() {
  return (
    <div className='static'>
      <Header />
      <MembershipTemplate/>
      <Footer />
      </div>
  )
}
