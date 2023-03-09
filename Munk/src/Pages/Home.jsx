import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
// import Music from '../Components/Music'

const Home = () => {
  return (
    <div>
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home