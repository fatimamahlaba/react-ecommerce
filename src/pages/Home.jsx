import Slider from '../components/Slider'
import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

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
