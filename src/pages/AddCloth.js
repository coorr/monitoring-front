import React, { Component } from 'react'
import Header from '../components/header'
import AuthService from '../../service/Auth.service';

export default class AddCloth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { username: "" }
    }
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    this.setState({ currentUser: currentUser })
  }
  render() {
    const { currentUser } = this.state;
    return (
      <>
      {
        currentUser ? (
          <>
            <Header />
            <p>asdassad</p>
          </>
        
        ) : (
          <p>페이지 없음</p>
        )
      }
      </>
    )
  }
}
