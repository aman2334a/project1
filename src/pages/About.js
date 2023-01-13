import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutTemplate from '../templates/AboutTemplate'
export default function About() {
  return (
    <div className='static'>
      <Header />
      <AboutTemplate />
      <Footer />
    </div>
  )
}
