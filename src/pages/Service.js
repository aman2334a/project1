import React from 'react'
import Header from '../components/Header'
import Footer  from '../components/Footer'
import ServiceTemplate from '../templates/ServiceTemplate'
export default function Service() {
  return (
    <div className='static'>
      <Header />
      <ServiceTemplate/>
      <Footer />
      </div>
  )
}
