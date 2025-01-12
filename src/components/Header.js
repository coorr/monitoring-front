import React, { useState,useCallback,useEffect } from 'react'
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import styles from './css/Header.module.css'
import AuthService from '../../service/user/Auth.service';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import {  useRouter } from 'next/router';
import ItemService from '../../service/item/Item.service';



const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [admin, setAdmin ]  = useState('');
  const [userId, setUserId ]  = useState('');
  const [currentUser, setCurrentUser ]  = useState(false);
  const [basket, setBasket ]  = useState([]);
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
    if(userId === ''  && basket.length === 0 && basketLocal !== null) {
      setBasket(basketLocal)
    } 
  },[userId, basket])

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
    router.push("/user/login")
  });


  console.log(userId);
  return (
    <>
    <Navbar  expand="lg"  >
        <Container className={styles.headerLayout}>
          <Navbar.Brand href="/" className={styles.headerColor}>LOOK</Navbar.Brand>
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
                <NavDropdown.Item onClick={() => router.push("/item/outwear")} id={styles.dropdownMenuItem}>Outwear</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/item/knitwear")} id={styles.dropdownMenuItem}>Knitwear</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/item/sweatshirt")} id={styles.dropdownMenuItem}>Sweatshirt</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/item/shirt")} id={styles.dropdownMenuItem}>Shirt</NavDropdown.Item>
                <NavDropdown.Item onClick={() => router.push("/item/tshirt")} id={styles.dropdownMenuItem}>T-shirt</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => router.push("/info")} id={styles.navLink}>info</Nav.Link>
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
              <Nav.Link  onClick={() => router.push("/basket")}>card{"("}{ userId === '' ? basket.length : itemLength}{")"}</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default Header