import React from 'react'
import './Header.css'
import 'animate.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1 class="animate__animated animate__bounceInDown">Note Taking Project</h1>
        <h5>We believe you can learn anything, <br></br> 
            so lets remove the card making, and get to the learning.
        </h5>
      </div>
    </header>
  )
}

export default Header