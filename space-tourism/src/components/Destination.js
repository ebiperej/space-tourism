import React from 'react'
import Header from './Header'
import './style.css'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Tabcontent from './Tabcontent'
import spaceData from '../data.json'
import moonimg from '../assets/destination/image-moon.png'
import europaimg from  '../assets/destination/image-europa.png'
import marsimg from  '../assets/destination/image-mars.png'
import titanimg from  '../assets/destination/image-titan.png'

const Destination = () => {
  const images = {"moon":moonimg,
                  "europa":europaimg,
                  "mars":marsimg,
                  "titan":titanimg
                  }
 
  return (
    <div className='destination-page'>
      <Header />
      <Container className='destination-container'>
          <Row className='destination-heading'>
            <h3><span>01</span> PICK YOUR DESTINATION</h3>
          </Row>
        <Row>
            <Tabs variant="pills" defaultActiveKey="moon" id="controlled-tab-example" className="mb-5 justify-content-end">
              <Tab eventKey="moon" title="MOON">
                <Tabcontent
                  image={images.moon}
                  name={spaceData.destinations[0].name}
                  description={spaceData.destinations[0].description}
                  distance={spaceData.destinations[0].distance}
                  travel={spaceData.destinations[0].travel}
                  />
              </Tab>
              <Tab eventKey="mars" title="MARS">
                <Tabcontent
                  image={images.mars}
                  name={spaceData.destinations[1].name}
                  description={spaceData.destinations[1].description}
                  distance={spaceData.destinations[1].distance}
                  travel={spaceData.destinations[1].travel}
                  />
                  
              </Tab>
              <Tab eventKey="europa" title="EUROPA">
                <Tabcontent 
                  image={images.europa}
                  name={spaceData.destinations[2].name}
                  description={spaceData.destinations[2].description}
                  distance={spaceData.destinations[2].distance}
                  travel={spaceData.destinations[2].travel}
                  />
              </Tab>
              <Tab eventKey="titan" title="TITAN">
                <Tabcontent
                  image={images.titan}
                  name={spaceData.destinations[3].name}
                  description={spaceData.destinations[3].description}
                  distance={spaceData.destinations[3].distance}
                  travel={spaceData.destinations[3].travel}
                  />
              </Tab>
            </Tabs>
        </Row>
      </Container>
    </div>
  )
}

export default Destination;