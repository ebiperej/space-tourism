import React from 'react'
import './style.css';
import { Col, Container, Row } from 'react-bootstrap';
import './Technology'
import space from '../assets/technology/image-space-capsule-landscape.jpg'

const Techcontent = (props) => {
  return (
    <div>
        <Container>
            <Row>
                <Col sm={5} className='technology-col-1'>
                   <h5>THE TERMINOLOGY…</h5>
                   <h3>{props.name}</h3>
                   <p>{props.description}</p> 
                </Col>
                <Col sm={5} className='technology-col-2'>
                    <img src={props.image} alt={'technology'} />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
export default Techcontent;
