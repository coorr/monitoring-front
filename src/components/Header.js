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



const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [admin, setAdmin ]  = useState(false);
  const [currentUser, setCurrentUser ]  = useState(false);
  const {  currentItem  } = useSelector((state) => state.item)

  useEffect(() => {
    const admin = AuthService.getCurrentUser();
    
    if(admin) {
      setCurrentUser(true)
      if(admin.roles[0] === 'ROLE_ADMIN') {
        setAdmin(true)
      }
    }
  })

  const showDropdown = useCallback(() => {
    setShow(true)
  },[show]);
  const hideDropdown = useCallback(() => {
    setShow(false)
  },[show]);
  

  const logOut = useCallback(() => {
    AuthService.logout();
    dispatch({
      type: LOG_OUT_REQUEST
    })
    setCurrentUser(false)
    Router.push("/")
  }, []);

  const login = useCallback(() => {
    Router.push("login")
  },[]);

  const onClickTest = useCallback(() => {
    router.push("/help")
  })

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
                    <Nav.Link onClick={() => Router.push("/addItem")}  id={styles.navLink}>등록하기</Nav.Link>
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
              <Nav.Link onClick={() => router.push("/basket")} id={styles.navLink}>card{"("+currentItem.length+")"}</Nav.Link>
              {
                currentUser ? (
                  <Nav.Link id={styles.navLink} onClick={logOut}>LogOut</Nav.Link>
                ) : (
                  <Nav.Link id={styles.navLink} onClick={login}>login</Nav.Link>
                )
              }
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  )
}

export default Header

// export default class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//       currentUser: '',
//       showAdminBoard: false,
//     }
//   }

//   componentDidMount() {
//     const user = AuthService.getCurrentUser();
//     if(user) {
//       this.setState({ 
//         currentUser: user,
//         showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//        })
//     }
//   }

//   showDropdown = () => {
//     this.setState({ show: true})
//   }
//   hideDropdown = () => {
//     this.setState({ show: false})
//   }
//   logOut = () => {
//     AuthService.logout();
//     this.setState({
//       showAdminBoard: false,
//       currentUser: undefined,
//     });
//     Router.push("/")
//   }

//   login = () => {
//     Router.push("login")
//   }

//   render() {
//     const { show,currentUser, showAdminBoard } = this.state;
//     return (
//      <Navbar  expand="lg"  >
//         <Container className={styles.headerLayout}>
//           <Navbar.Brand href="/" className={styles.headerColor}>COOR</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav" >
//             <Nav className="ms-auto" >
//               {
//                 showAdminBoard && (
//                   <Nav.Link href="addCloth" id={styles.navLink}>등록하기</Nav.Link>
//                 )
//               }
//               <NavDropdown 
//                 title="Store" 
//                 id={styles.dropdownMenu}
//                 show={show}
//                 onMouseEnter={this.showDropdown} 
//                 onMouseLeave={this.hideDropdown}
//               >
//                 <NavDropdown.Item href="allCloth" id={styles.dropdownMenuItem}>New arrivals</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2" id={styles.dropdownMenuItem}>Outwear</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3"id={styles.dropdownMenuItem}>Knitwear</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.4" id={styles.dropdownMenuItem}>Sweatshirt</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.4" id={styles.dropdownMenuItem}>Shirt</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.4" id={styles.dropdownMenuItem}>T-shirt</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="help" id={styles.navLink}>help</Nav.Link>
//               <Nav.Link href="register" id={styles.navLink}>cart</Nav.Link>
//               {
//                 currentUser ? (
//                   <Nav.Link id={styles.navLink} onClick={this.logOut}>LogOut</Nav.Link>
//                 ) : (
//                   <Nav.Link id={styles.navLink} onClick={this.login}>login</Nav.Link>
//                 )
//               }
              
//             </Nav>
//           </Navbar.Collapse>
//           </Container>
//       </Navbar>
//     )
//   }
// }
