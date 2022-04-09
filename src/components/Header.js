import React, { Component } from 'react'
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import styles from './css/Header.module.css'
import AddCloth from '../pages/AddCloth';
import Login from '../pages/Login';
import Link from 'next/link'
import Register from '../pages/Register';
import AuthService from '../../service/Auth.service';
import Help from '../pages/Help'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentUser: { username: "" }
    }
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser })
  }

  showDropdown = () => {
    this.setState({ show: true})
  }
  hideDropdown = () => {
    this.setState({ show: false})
  }


  render() {
    const { show,currentUser } = this.state;
    return (
     <Navbar  expand="lg"  >
        <Container className={styles.headerLayout}>
          <Navbar.Brand href="#home" className={styles.headerColor}>COOR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              {
                currentUser && (
                  <Nav.Link href="AddCloth" id={styles.navLink}>등록하기</Nav.Link>
                )
              }
              <NavDropdown 
                title="Store" 
                id={styles.dropdownMenu}
                show={show}
                onMouseEnter={this.showDropdown} 
                onMouseLeave={this.hideDropdown}
              >
                <NavDropdown.Item href="#action/3.1" id={styles.dropdownMenuItem}>New arrivals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id={styles.dropdownMenuItem}>Outwear</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"id={styles.dropdownMenuItem}>Knitwear</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" id={styles.dropdownMenuItem}>Sweatshirt</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" id={styles.dropdownMenuItem}>Shirt</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" id={styles.dropdownMenuItem}>T-shirt</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="Help" id={styles.navLink}>help</Nav.Link>
              <Nav.Link href="Register" id={styles.navLink}>cart</Nav.Link>
              <Nav.Link href="Login" id={styles.navLink}>login</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    )
  }
}
