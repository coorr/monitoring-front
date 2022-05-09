import React, {  } from 'react'
import { Container,Navbar,Nav } from "react-bootstrap";
import styles from '../css/Header.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const  orderHeader = () => {
  const router = useRouter();
  const { itemLength } = useSelector((state) => state.item);
  return (
    <>
    <Navbar  expand="lg"  >
       <Container className={styles.orderHeaderLayout} >
          <Navbar.Brand href="/basket" >
              <IoIosArrowBack size={24} />
          </Navbar.Brand>
            <Navbar.Brand href="/" className={styles.headerTitle}>LOOK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              <Nav.Link onClick={() => router.push("/basket")} id={styles.headerNavLink}><BsBag style={{maringLeft: "5px"}} size={20}/>
              <span className={styles.postHeaderRedRadio} >{itemLength}</span></Nav.Link>
              <Nav.Link onClick={() => router.push("/mypage")} id={styles.headerNavLink}><BiUser size={20}/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default orderHeader