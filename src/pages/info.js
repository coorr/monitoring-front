import React, { useEffect , useState} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap'

const help = () => {
  


    return (
      <>
      <Header />
      <div className="middle_space_screen" />
      <Container style={{maxWidth: '1020px'}} className="font_family">
      <Row>
        <Col xs={12} md={6}>
          <div style={{textAlign: 'left'}}>
            <p>LOOK : COMMON ORIGINS</p>
            <p>look seeks for simple and harmonious beauty.</p>
            <p>look is a contemporary brand that captures naturalness.</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{textAlign: 'left'}}>
            <span>Email</span><br/>
            <a ><sapn style={{color: 'skyblue'}}>wlsdiqkdrk@gmail.com</sapn></a>
            <br/><br/>
            <span>Github</span><br />
            <a target="_blank" style={{borderBottom: '1px solid skyblue'}} href="https://github.com/coorr"><sapn style={{color: 'skyblue'}}>https://github.com/coorr</sapn></a>
            <br/><br/>
            <span>Blog</span><br/>
            <a target="_blank"  style={{borderBottom: '1px solid skyblue'}} href="https://coor.tistory.com"><sapn style={{color: 'skyblue'}}>https://coor.tistory.com</sapn></a>
          </div>
       </Col >
      </Row>
      </Container>
      <Footer />
      </>
  )
}

export default help;

