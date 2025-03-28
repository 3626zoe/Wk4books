import Header from '../components/Header'
import Footer from '../components/Footer'
import Productlist from '../components/Productlist'
import React from 'react'
function Home() {

  return (
    <div className="container mx-auto main-layout">
      <Header 
        title="Timeless Masterpieces"
        slogan="Welcome to CHUN's Shop! Where Stories Come to Life!"
      />
      <Productlist/>
      <Footer/> 
    </div>
  )
}
export default Home