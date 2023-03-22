import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel'

export default function HomeTemplate() {
  return (
    <div>
        <Header />
        <HomeCarousel />
        <Outlet />
        <Footer />
    </div>
  )
}
