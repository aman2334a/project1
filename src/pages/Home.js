import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeTemplate from '../templates/Home'
export default function Home() {
  return (
    <div>
      <Header />
      <HomeTemplate/>
      <Footer/> 
    </div>
  )
}
