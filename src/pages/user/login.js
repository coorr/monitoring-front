import React, { useState, useCallback ,useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Header from "../../components/Header";
import AuthService from "../../../service/user/Auth.service";
import Router from "next/router";
import styles from '../../components/css/User.module.css'
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../../reducers/user";
import Footer from "../../components/Footer";


const Login = () => {
  const form =useRef();
  const checkBtn =useRef();
  
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { logInLoading } = useSelector((state) => state.user)

  const dispatch = useDispatch();

  const handleLogin = useCallback((e) => {
    e.preventDefault();

    if(username.length === 0) {
      return alert("아이디 항목은 필수 입력값입니다.")
    } else if(password.length ===0) {
      return alert("패스워드 항목은 필수 입력값입니다.")
    }
    

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password)
      .then(res => {
        Router.push("/mypage/list")
          dispatch({
            type: LOG_IN_REQUEST,
            data: res.id
          })
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          alert(resMessage)
        }
      );
    }
  },[username,password]);

  return (
    <>
     <Header />
         <div className="col-md-12">
            <div className="card card-container" id={styles.login_form_layout}>
              
              <label className={styles.login_font_title}>Login</label>
              <br />
              <br />

              <Form
                onSubmit={handleLogin}
                ref={form}
              >
                <div className="form-group">
                  <label htmlFor="username" className={styles.login_font_input}>ID</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className={styles.login_font_input}>PASSWORD</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>

                <br />

                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={logInLoading}
                    type="submit"
                  >
                    {logInLoading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                <br />

                <div className="form-group">
                  <div className="btn  login_account_layout">
                    <label  className={styles.login_account_font_label}>New to Account?</label>{" "}
                    <a href="register" className={styles.login_account_font_a}>Create an account.</a>
                  </div>
                </div>

                <div className="form-group" >
                  <div className="btn" style={{fontSize : '13px', width:"240px", fontWeight: 'bold'}}>
                    <label>&nbsp;&nbsp;테스트 ID  &nbsp;&nbsp;: user</label><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label>테스트 PW : 123123</label>
                  </div>
                  
                </div>

                <CheckButton
                  style={{ display: "none" }}
                  ref={checkBtn}
                />
              </Form>
              </div> 
            </div>
            <Footer />
      </>
  )
};

export default Login


