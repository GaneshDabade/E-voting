import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import LeftCard from './LeftCard';
import RightCard from './RightCard';

import '../App.css'
import BackgroundImage from '../images/bg.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center text-info">Voting-Chain</h1>
            <p className="main-para text-center word">A Blockchain based E-Voting System,built with trust</p>
            <div className='d-flex align-content-end flex-wrap' style={{marginLeft:'17rem',paddingTop:'1rem'}} >
            <LeftCard/>
            <RightCard/>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100vw",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}