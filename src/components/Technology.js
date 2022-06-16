import React from 'react'
import Header from './Header'
import './style.css'
import {Tab, Row, Nav, Col, Container} from 'react-bootstrap';
import Techcontent from './Techcontent';
import Data from '../data.json';
import launchvehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceport from '../assets/technology/image-spaceport-portrait.jpg'
import spacecapsule from '../assets/technology/image-space-capsule-portrait.jpg'

const Technology = () => {
  return (
    <div className='technology-page'>
      <Header />
      <Container>
        <Row className='hero'>
        <h3><span>03</span> SPACE LAUNCH 101</h3>
        </Row>
      </Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
         <Col sm={2}>
            <Nav variant="pills" className="flex-column tech-tab">
              <Nav.Item>
              <Nav.Link eventKey="1">1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="2">2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">3</Nav.Link>
              </Nav.Item>
            </Nav>
         </Col>
         <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <Techcontent 
              name={Data.technology[0].name}
              description={Data.technology[0].description}
              image={launchvehicle}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <Techcontent 
              name={Data.technology[1].name}
              description={Data.technology[1].description}
              image={spaceport}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              <Techcontent 
              name={Data.technology[2].name}
              description={Data.technology[2].description}
              image={spacecapsule}
              />
            </Tab.Pane>
          </Tab.Content>
         </Col>
        </Row>
      </Tab.Container>

    </div>
  )
}
export default Technology;