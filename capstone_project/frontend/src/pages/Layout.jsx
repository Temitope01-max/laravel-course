import React from 'react'
import Navigation from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Navigation />
    {children}
    <Footer />
    </>
  )
}

export default Layout