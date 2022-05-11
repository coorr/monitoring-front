import React, { useState,useCallback  } from 'react'
import Header from '../../components/Header'
import styles from '../../components/css/User.module.css'
import Router from 'next/router'
import { useSelector } from 'react-redux'
import Footer from '../../components/Footer'

const Register_result = () =>  {
  const { username, email } = useSelector((state) => state.user);


  const handleComplete = useCallback(() => {
      Router.push("/user/login")
  },[]);

  return (
    <>
        <Header />
            <div className="col-md-12">
            <div className="card card-container" id={styles.login_form_layout}>
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
                      <button className="btn btn-primary btn-block" type="submit" onClick={handleComplete}>완료</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </>
  )
}

export default Register_result;