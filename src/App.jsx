import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AOS from 'aos'
import "aos/dist/aos.css";

const App = () => {
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      })
    })
    
    

  return (<div>
    <Hero />
  </div>
  )
}

export default App
