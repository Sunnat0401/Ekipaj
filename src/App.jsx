import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Services from './Page/Services/Services'
import Footer from './Components/Footer/Footer'
import Forms from './Components/Forms/Forms'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Forms  />
      <Footer/>
    </div>

  )
}

export default App
