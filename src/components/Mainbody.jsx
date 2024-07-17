import React from 'react'
import Navbar from './Navbar'
import Contact from '../pages/Contact'

const Mainbody = () => {
  return (
    <div className="main-conatainer">
      {/* <NewContactForm/> */}
       <Navbar/>
       <Contact/>
    </div>
  )
}

export default Mainbody