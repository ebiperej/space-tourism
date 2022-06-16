import React from 'react'
import Header from './Header'
import { Carousel, Container, Row, Col} from 'react-bootstrap';
import crewdata from '../data.json';
import commander from '../assets/crew/image-douglas-hurley.png';
import mission from '../assets/crew/image-mark-shuttleworth.png';
import pilot from '../assets/crew/image-victor-glover.png';
import engineer from '../assets/crew/image-anousheh-ansari.png'

const Crew = (props) => {
  return (
    <div className='crew-page'>
      <Header />
      <Container>
        <Row className='hero'>
          <h3><span>02</span> Meet your crew</h3>
        </Row>
          <Carousel controls={true} className='carousel'>
            <Carousel.Item>
              <Row>
                <Col sm={6} className='crew-col-1'>
                  <span>{crewdata.crew[0].role}</span>
                  <h3>{crewdata.crew[0].name}</h3>
                  <p>{crewdata.crew[0].bio}</p>
                </Col>
                <Col sm={6} className='crew-col-2'>
                  <img src={commander} alt={'crew member'} />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={6} className='crew-col-1'>
                  <span>{crewdata.crew[1].role}</span>
                  <h3>{crewdata.crew[1].name}</h3>
                  <p>{crewdata.crew[1].bio}</p>
                </Col>
                <Col sm={6} className='crew-col-2'>
                  <img src={mission} alt={'crew member'} />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={6} className='crew-col-1'>
                  <span>{crewdata.crew[2].role}</span>
                  <h3>{crewdata.crew[2].name}</h3>
                  <p>{crewdata.crew[2].bio}</p>
                </Col>
                <Col sm={6} className='crew-col-2'>
                  <img src={pilot} alt={'crew member'} />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col sm={6} className='crew-col-1'>
                  <span>{crewdata.crew[3].role}</span>
                  <h3>{crewdata.crew[3].name}</h3>
                  <p>{crewdata.crew[3].bio}</p>
                </Col>
                <Col sm={6} className='crew-col-2'>
                  <img src={engineer} alt={'crew member'} />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
      </Container>
    </div>
  )
}
export default Crew;