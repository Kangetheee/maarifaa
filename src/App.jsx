import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Story from './components/Story'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      {/* <section className='z-0 min-h-screen bg-blue-200'/> // for testing */}
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />    
    </main>
  )
}

export default App