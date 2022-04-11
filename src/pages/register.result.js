import React, { Component } from 'react'
import Router from 'next/router'
import Header from '../components/header'
import styles from '../components/css/User.module.css'
import AuthService from '../../service/user/Auth.service'
import { withRouter } from 'next/router';

class Register_result extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: this.props.router.query.username,
        email: this.props.router.query.email
      }
  }

  componentDidMount() {
      const user = AuthService.getCurrentUser();
      if(user) {
          Router.push("/")
      }
  }

  handleComplete = () => {
      Router.push("/login")
  }

  render() {
    const { username, email } = this.state;
    return (
      <>
        <Header />
            <div className="col-md-12">
            <div className="card card-container">
            <label className={styles.login_font_title}>회원가입</label>
            <br />
            <br />
                <div>
                    <div className='form-group'>
                        <label className={styles.register_font_input}>회원가입이 완료되었습니다.</label>
                        <label className={styles.register_font_input}>저의 쇼핑몰을 이용해 주셔서 감사합니다.</label>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="username" className={styles.login_font_input}>아이디 : {username} </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password" className={styles.login_font_input}>이메일 : {email} </label>
                    </div>
                    <br />
                    <br />

                    <div className="form-group">
                      <button className="btn btn-primary btn-block" type="submit" onClick={this.handleComplete}>완료</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default withRouter(Register_result)
