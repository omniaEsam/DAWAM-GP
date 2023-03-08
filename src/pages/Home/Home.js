import React from 'react'
import About from './Components/About/About'
import Counter from './Components/Counter/Counter'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'

export default function Home() {
  return (
    <div>
     <Header/>
     <About/>
     <Counter/>
     <Search/>
     <Footer/>
    </div>
  )
}
