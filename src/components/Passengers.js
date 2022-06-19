import React, { Component } from 'react'
import Header from './Header';
import {Container, Row} from 'react-bootstrap';
import './style.css'
import Cardlist from './Cardlist';

class Passengers extends Component {   
    render(){
  return (
    <div className='passengers-container'>
        <Header />
        <Container>
            <Row className='hero'>
                <h3><span>04</span> Meet your passengers in space</h3>
            </Row>
        </Container>
        <div className='passenger-card-container'>
        <Cardlist />
        </div>
    </div>
  )
}
}
export default Passengers;