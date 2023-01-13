import React from 'react'
import Header  from '../components/Header'
 import Footer from '../components/Footer'
 import ContactTemplate from '../templates/ContactTemplate'
export default function Contact() {
  return (
    <div className='static'>
      <Header />
      <ContactTemplate/>
      <Footer />
      </div>
  )
}
