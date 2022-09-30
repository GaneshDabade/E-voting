import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function RightCard() {
  return (
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
  )
}

export default RightCard