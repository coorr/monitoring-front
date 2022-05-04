import React, { useState,useCallback,useEffect } from 'react'
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import styles from './css/Header.module.css'
import AuthService from '../../service/user/Auth.service';
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Link from 'next/link';
import next from 'next';
import {  useRouter } from 'next/router';
import ItemService from '../../service/item/Item.service';



const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [admin, setAdmin ]  = useState('');
  const [userId, setUserId ]  = useState('');
  const [currentUser, setCurrentUser ]  = useState(false);
  const [basket, setBasket ]  = useState(false);
  const [ userItemLength, setUserItemLength] = useState('')
  const {  currentItem, itemLength  } = useSelector((state) => state.item)

  useEffect(() => {
    const adminData = AuthService.getCurrentUser();
    console.log("11");
    if(admin === '' && adminData !== null) {
      setCurrentUser(true)
      setAdmin(null)
      setUserId(adminData.id)
      if(adminData.roles[0] === 'ROLE_ADMIN') {
        setAdmin(adminData)
      } 
    }
    
  }, [userId,currentUser,admin])

  useEffect(() => {
    const basketLocal = ItemService.getCurrentItem();
    console.log("22");
    if(userId === '' && !basket && basketLocal !== null) {
      setBasket(basketLocal)
    } 
  },[userId, basket])

  useEffect(() => {
    const itemLength = ItemService.getItemLength();
    console.log("33");

    if(userItemLength === '' && userId !== ''  && itemLength !== null) {
      setUserItemLength(itemLength)
    }
  },[userId,userItemLength])
    
  const showDropdown = useCallback(() => {
    setShow(true)
  },[show]);
  const hideDropdown = useCallback(() => {
    setShow(false)
  },[show]);
  

  const logOut = useCallback(() => {
    AuthService.logout();
    dispatch({
      type: LOG_OUT_REQUEST,
    })
    setCurrentUser(false)
    // router.push("/")
    window.location.reload();
  });

  const login = useCallback(() => {
    console.log("login 시도 중");
    router.push("/user/login")
  });

  const onClickTest = useCallback(() => {
    router.push("/help")
  })
  console.log(userId);
  return (
    <>
    <Navbar  expand="lg"  >
        <Container className={styles.headerLayout}>
          <Navbar.Brand href="/" className={styles.headerColor}>COOR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              {
                admin && (
                    <Nav.Link onClick={() => router.push("/addItem")}  id={styles.navLink}>등록하기</Nav.Link>
                )
              }
              <NavDropdown 
                title="Store" 
                id={styles.dropdownMenu}
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item onClick={onClickTest} id={styles.dropdownMenuItem}>Outwear</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/help")}id={styles.dropdownMenuItem}>Knitwear</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/help")} id={styles.dropdownMenuItem}>Sweatshirt</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/help")} id={styles.dropdownMenuItem}>Shirt</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/help")} id={styles.dropdownMenuItem}>T-shirt</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => router.push("/help")} id={styles.navLink}>info</Nav.Link>
              <Nav.Link onClick={() => router.push("/help")} id={styles.navLink}>help</Nav.Link>
              {
                currentUser ? (
                  <>
                    <Nav.Link id={styles.navLink} onClick={logOut}>LogOut</Nav.Link>
                    <Nav.Link id={styles.navLink} onClick={() => router.push("/mypage/list")}>MyPage</Nav.Link>
                  </>
                ) : (
                  <Nav.Link id={styles.navLink} href="/user/login">login</Nav.Link>
                )
              }
              <Nav.Link onClick={() => router.push("/basket")}>card{"("}{ userId === '' ? basket.length : userItemLength}{")"}</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default Header