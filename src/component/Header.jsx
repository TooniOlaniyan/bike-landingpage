import React from 'react'
import Lottie from "lottie-react";
import headerLottie from '../assets/lottie/headerLottie.json'

function Header() {
  return (
    <div>
        <Lottie animationData={headerLottie}/>
    </div>
  )
}

export default Header