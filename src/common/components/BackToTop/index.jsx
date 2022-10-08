import React from 'react'
import './style.css'
import {FaAngleUp} from 'react-icons/fa'
function BackToTop() {
  return (
    <div className='scrollToTop'>
        <FaAngleUp className='scrollToTop-icon' />
    </div>
  )
}

export default BackToTop