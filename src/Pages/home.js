import React from 'react'
import ResponsiveContainer from '../Components/home/container'
import AboutUs from '../Components/home/aboutUs'
import Footer from '../Components/__partials/footer'

const HomepageLayout = () => (
  <ResponsiveContainer>
    <AboutUs/>
    <Footer/>
  </ResponsiveContainer>
)

export default HomepageLayout