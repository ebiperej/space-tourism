import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Destcontent = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className='tab-col-left' sm={8}>
            <img src={props.image} alt='planet' className='planet-img'/>
          </Col>
          <Col className='tab-col-right' sm={4}>
            <Row>
              <h2>{props.name}</h2>
               <p>
                 {props.description}
               </p>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h6>AVG. DISTANCE</h6>
                <h3>{props.distance}</h3>
              </Col>
              <Col>
                <h6>EST. TRAVEL TIME</h6>
                <h3>{props.travel}</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Destcontent;