import React from 'react'
import './home.css'

import Logo from '../../Images/logo.svg'
import StarTop from '../../Images/starTop.svg'
import EastIcon from '@mui/icons-material/East';
import StarBottom from '../../Images/starBottom.svg'

function Home() {
  return (
    <div className="hero-outer-container">
        <div className="copper-logo-wrapper">
            <img src={Logo} alt="" className='copper-logo'/>
            <h3 className="copper-logo-text">Copper</h3>
        </div>
        <div className="hero-text-wrapper">
            <h1 className="hero-text-one">Your Answering</h1>
            <h1 className="hero-text-two"><img src={StarBottom} alt="" className='star-bottom'/> ENGINE <img src={StarTop} alt="" className='star-top'/></h1>
            <p className="hero-description">A team of dedicated experts 
                and a commitment to innovation, we strive to make AI 
                accessible and valuable to everyone.
            </p>

            <div className="hero-input-wrapper">
                <input type="text" className="hero-input" placeholder='Please enter your Email ID'/>
                <button className="hero-input-btn">JOIN WAITING LIST</button>
            </div>
        </div>
    </div>
  )
}

export default Home