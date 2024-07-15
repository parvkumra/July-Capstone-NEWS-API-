import React from 'react'
import Navbar from './Navbar'
import Display from './Display'
import News from './News'
import Contacts from './Contacts'

function Home() {
  return (
   <main>
    <Navbar/>
    <Display/>
    <News/>
    <Contacts/>
   </main>
  )
}

export default Home
