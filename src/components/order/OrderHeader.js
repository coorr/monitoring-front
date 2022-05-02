import React, {  } from 'react'
import { Container,Navbar,Nav } from "react-bootstrap";
import styles from '../css/Header.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { useRouter } from 'next/router';

const  orderHeader = () => {
  const router = useRouter();
  return (
    <>
    <Navbar  expand="lg"  id={styles.orderHeaderMargin} >
        <Container className={styles.orderHeaderLayout} >
          <Navbar.Brand href="/basket" >
              <IoIosArrowBack size={24} />
          </Navbar.Brand>
          <Container style={{textAlign: 'center'}}>
            <Navbar.Brand href="/" className={styles.headerTitle}>COOR</Navbar.Brand>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              <Nav.Link onClick={() => router.push("/basket")} id={styles.headerNavLink}><BsBag size={20}/></Nav.Link>
              <Nav.Link onClick={() => router.push("/mypage")} id={styles.headerNavLink}><BiUser size={20}/></Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default orderHeader