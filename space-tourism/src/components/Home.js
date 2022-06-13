import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Home = () => {
  return (
    <div className='home-page'>
        <Header className="text-decoration-underline"/>
        <Container className='home-container'>
          <Row>
            <Col sm={8} className='home-col1'>
              <h3>so, you want to travel to</h3>
              <h1>SPACE</h1>
              <p>Let’s face it; if you want to go to space, you might as
                 well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </Col>
            <Col sm={4} className='home-col2'>
              <Link to="/destination">
              <Button>EXPLORE</Button>
              </Link>
            </Col>
          </Row>
        </Container>

    </div>
  )
}

export default Home;