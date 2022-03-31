import React, { Component } from "react";
// import styles from '../css/App.style.css'
import styles from '../components/layout.module.css'
import Link from 'next/link'



import AuthService from "../service/auth.service";

import Login from "./login";
// import Register from "./components/user/register.component";
// import Home from "./components/user/home.component";
// import Profile from "./components/user/profile.component";
// import BoardUser from "./components/user/board-user.component";
// import BoardModerator from "./components/user/board-moderator.component";
// import EquipmentManage from "./components/deviceManage/equipment-manage";
// import ManageEquipmentList from "./components/deviceManage/equipment-group-manage";
// import Modify from './modals/modify.component';
// import HistoryRecord from "./components/deviceManage/history-record";
// import ReportResoruce from "./components/deviceManage/report-resource";
// import DiagramView from "./components/deviceManage/topology/diagramView";
// import {TopogolyEquipment}  from './components/deviceManage/topology/topogolyEquipment.tsx';

// import test from "./components/deviceManage/test";

import EventBus from "../user/EventBus";
// import "rc-tree/assets/index.less";
// pages/_app.js
// import "../css/style.css";

import { AiOutlineMenu } from 'react-icons/ai'
import { Dropdown } from "react-bootstrap";
import 'react-pro-sidebar/dist/css/styles.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      dropdownOpen:false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser(); 

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  onMouseOver = () => { this.setState({dropdownOpen:true}) }
  onMouseLeave = () => { this.setState({dropdownOpen:false}) }
  toggle = () => { this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  })) }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <>
      {/* 로그인 정보가 없을 경우 login 페이지로 자동이동 */}
      {/* {!window.localStorage.getItem('user') && ( <Redirect to="/login" />) }  */}
      <div className="ContainerBox"> 
        <nav className="rootNavBarArea" >
          <Link href="/">
             <a className="rootNavBarTitle">임시페이지</a>
          </Link>
          <div className="rootNavBar">
            <li className="rootNavBarList">
              <Link href="/home">
                <a className="rootNavBarText">Home</a>
              </Link>
            </li>

            {showAdminBoard && (
            <li className="rootNavBarList">
              <Link href="/equipmentGroupManage">
                <a className="rootNavBarText">장비그룹관리</a> 
              </Link>
            </li>
            )}

            {showModeratorBoard && (
              <li className="rootNavBarList">
                <Link href="/mod">
                  <a className="rootNavBarText">장비그룹관리</a> 
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="rootNavBarList">
                <Link href={"/equipmentManage"}>
                  <a className="rootNavBarText">장비 관리</a>
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="rootNavBarList">
                <Link href="/historyRecord">
                  <a className="rootNavBarText">감사 이력</a>
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="rootNavBarList">
                <Link href={"/reportResoruce"} >
                  <a className="rootNavBarText">보고서</a>
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="rootNavBarList">
                <Link href="/DiagramView">
                  <a className="rootNavBarText">topology</a>
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="rootNavBarList">
                <Link href="/TopogolyEquipment">
                  <a className="rootNavBarText">User</a>
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="rootNavBarLogin">
              <li className="rootNavBarListLogin">
                <Link href="/profile">
                  <a className="rootNavBarTextLogin">{currentUser.username}</a>
                </Link>
              </li>
              <li className="rootNavBarListLogin">
                <a href="/login" className="rootNavBarTextLogin" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="rootNavBarLogin">
              <li className="rootNavBarListLogin">
                <Link href="/login">
                  <a className="rootNavBarTextLogin">Login</a>
                </Link>
              </li>

              <li className="rootNavBarListLogin">
                <Link href="/register">
                  <a className="rootNavBarTextLogin">Sign Up</a>
                </Link>
              </li>
            </div>
          )}
        </nav>

        
        <div className="ContainerSecond">
          <div className="sideBarAreas">
          {showAdminBoard && (
            <Dropdown drop='right' onFocus={()=> this.onMouseOver()} toggle={()=> this.toggle()} onMouseOver={() => this.onMouseOver()} onMouseLeave={()=> this.onMouseLeave()} show={this.state.dropdownOpen}  >
              <Dropdown.Toggle><AiOutlineMenu color={'white'} size={24} /></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => this.onMouseLeave()} as={Link} to={'/equipmentManage'}>장비 관리</Dropdown.Item>
                    <Dropdown.Item  onClick={() => this.onMouseLeave()} as={Link} to={'/historyRecord'} >감사 이력</Dropdown.Item>
                    <Dropdown.Item  onClick={() => this.onMouseLeave()} as={Link} to={'/reportResoruce'} >보고서</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          )}
          </div>
          
            {/* <Switch> */}
              {/* <Route exact path={["/", "/home"]} component={Home} /> */}
              {/* <Route exact path="/test"component={showAdminBoard ? test : () => <div>Loading posts...</div>  }  /> */}

              {/* <Route exact path="/login" component={Login} /> */}
              {/* <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/user" component={BoardUser} />
              <Route exact path="/mod" component={BoardModerator} />
              <Route exact path="/equipmentManage"      component={showAdminBoard ? EquipmentManage : () => <div>Loading posts...</div>  }  />
              <Route exact path="/equipmentGroupManage" component={showAdminBoard ? ManageEquipmentList : () => <div>Loading posts...</div>  } />
              <Route exact path="/historyRecord"        component={showAdminBoard ? HistoryRecord : () => <div>Loading posts...</div>} />
              <Route exact path="/reportResoruce"        component={showAdminBoard ? ReportResoruce : () => <div>Loading posts...</div>} />
              <Route exact path="/DiagramView"        component={showAdminBoard ? DiagramView : () => <div>Loading posts...</div>} />
              <Route exact path="/DiagramView/:no"     component={showAdminBoard ? TopogolyEquipment : () => <div>Loading posts...</div>} /> */}
            {/* </Switch> */}
          
        </div>
        
      </div>
      </>
    );
  }
}

export default App;