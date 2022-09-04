import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import '../App.css'
import BackgroundImage from '../images/bg.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center text-info">Voting-Chain</h1>
            <p className="main-para text-center word">A Blockchain based E-Voting System,built with trust</p>
            <div className='d-flex align-content-end flex-wrap' style={{marginLeft:'17rem',paddingTop:'1rem'}} >
            <div style={{paddingRight:'5rem'}}>
             <Card style={{ width: '18rem' }}>
             <Card.Body className="text-center">
             <Card.Title >Hii</Card.Title>
             <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/login">
                    <button className="primary-button" id="reg_btn"><span>log in</span></button>
        </Link>
      </Card.Body>
    </Card>
    </div>
    <div style={{paddingLeft:'5rem'}}>
    <Card style={{ width: '18rem' }}>
             <Card.Body className="text-center">
             <Card.Title>Card Title</Card.Title>
             <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
            </Link>
      </Card.Body>
    </Card>
         </div>       
                
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}