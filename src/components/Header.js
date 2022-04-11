import React, { Component } from 'react'
import { Container,Navbar,Nav,NavDropdown } from "react-bootstrap";
import styles from './css/Header.module.css'
import AuthService from '../../service/user/Auth.service';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentUser: '',
      showAdminBoard: false,
    }
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if(user) {
      this.setState({ 
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
       })
    }
  }

  showDropdown = () => {
    this.setState({ show: true})
  }
  hideDropdown = () => {
    this.setState({ show: false})
  }
  logOut = () => {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: undefined,
    });
  }


  render() {
    const { show,currentUser, showAdminBoard } = this.state;
    return (
     <Navbar  expand="lg"  >
        <Container className={styles.headerLayout}>
          <Navbar.Brand href="/" className={styles.headerColor}>COOR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              {
                showAdminBoard && (
                  <Nav.Link href="addCloth" id={styles.navLink}>등록하기</Nav.Link>
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
              <Nav.Link href="help" id={styles.navLink}>help</Nav.Link>
              <Nav.Link href="register" id={styles.navLink}>cart</Nav.Link>
              {
                currentUser ? (
                  <Nav.Link href="/" id={styles.navLink} onClick={this.logOut}>LogOut</Nav.Link>
                ) : (
                  <Nav.Link href="login" id={styles.navLink}>login</Nav.Link>
                )
              }
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    )
  }
}
