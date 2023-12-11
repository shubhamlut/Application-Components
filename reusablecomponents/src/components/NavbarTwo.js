import React from 'react'
import "../styles/NavbarTwo.css"

const NavbarTwo = () => {
  return (
    <div className='Navbar'>
      <div className="NavbarColOne">
        <div>OptOne</div>
        <div>OptTwo</div>
        <div>OptThree</div>
      </div>
      <div className="NavbarColTwo">
        <div className="NavbarSearchBar">
            <input type="text" />
        </div>
      </div>
      <div className="NavbarColThree">
        <div>OptFour</div>
        <div>OptFive</div>
        <div>OptSix</div>
      </div>
    </div>
  )
}

export default NavbarTwo
