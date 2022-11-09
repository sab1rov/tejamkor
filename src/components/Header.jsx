import React from 'react'
import AboutUs from './pageComponents/AboutUs'
import Info from './pageComponents/Info'
import MainBanner from './pageComponents/MainBanner'
import Services from './pageComponents/Services'

function Header() {
  return (
    <main className='main'>
        <MainBanner />
        <Services />
        <Info />
        <AboutUs />
    </main>
  )
}

export default Header