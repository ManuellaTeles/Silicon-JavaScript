import React from 'react'
import '../src/App.css'





import TransferReceive from '../components/TransferReceive'
import Reviews from '../components/Reviews'
import BottomSide from '../components/BottomSide'
import HowDoesItWork from '../components/HowDoesItWork'
import Logos from '../components/Logos'
import ShowCase from '../components/ShowCase'
import Nav from '../components/Nav.jsx'
import Features from '../components/Features.jsx'

const App = () => {
  return (
    <>
    
    <Nav />
    <main id="main">
    <ShowCase />
    <Logos />
    <Features />
    <HowDoesItWork />
    <TransferReceive />
    <Reviews />
    <BottomSide />




    </main>
    </>
  )
}

export default App