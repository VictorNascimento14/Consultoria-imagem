import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhoWorks from './components/WhoWorks'
import Contact from './components/Contact'
import SydneyImage from './components/SydneyImage'
import Transformation from './components/Transformation'
import SecondHeroImage from './components/SecondHeroImage'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Animação de fade in ao scrollar
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    }, observerOptions)

    // Observar elementos para animação
    const elementsToObserve = document.querySelectorAll(
      '.service-card, .who-works-content, .contact-content, .transformation'
    )
    
    elementsToObserve.forEach(el => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <WhoWorks />
      <Contact />
      <SydneyImage />
      <Transformation />
      <SecondHeroImage />
      <Footer />
    </div>
  )
}

export default App

