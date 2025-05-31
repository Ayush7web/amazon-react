import React from 'react'
import './homescreen.css'
import HomeBanner from './HomeBanner/homebanner'
import HomeDetails from './HomeDetails/homedetails'
import Footer from '../../component/Footer/footer'


const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
      <HomeBanner />
      <HomeDetails />
      <Footer/>

    </div>
  )
}

export default HomeScreen
