import React, { useState, useCallback,useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Header from '../../components/header'
import AuthService from "../../../service/user/Auth.service";
import styles from '../../components/css/User.module.css'
import Router from "next/router";
import Register_result from "./register.result";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { SIGNUP_REQUEST } from "../../reducers/user";
import Footer from "../../components/Footer";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        입력해주세요.
      </div>
    );
  }
};

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        유효하지 않는 이메일입니다.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        아이디는 영문소문자 또는 숫자 4~20자로 입력해 주세요.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 16) {
    return (
      <div className="alert alert-danger" role="alert">
        비밀번호는 영문소문자 또는 숫자 4~16자로 입력해 주세요.
      </div>
    );
  }
};





const Register = () => {
  const form =useRef(null);
  const checkBtn =useRef(null);
  const dispatch = useDispatch();

  const [username, onChangeUsername] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] =useState('')
  const [passwordError, setPasswordError] =useState(false)

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value)
    setPasswordError(e.target.value !== password)
  }, [password])


  const handleRegister = useCallback((e) => {
        e.preventDefault();
        if(password !== passwordCheck) {
          return setPasswordError(true)
        }
   
        form.validateAll();

        if (checkBtn.context._errors.length === 0) {   // 서버보다 우선순위 먼저
          AuthService.register(username,email,password)
          .then(res => {
            dispatch({
              type: SIGNUP_REQUEST,
              data: { username, email }
            });
              Router.push({
                pathname: "/user/register.result",
                query: {username: username, email: email}
              }, "/user/register.result")
    
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
      },[username,email,password,passwordCheck]);

  return (
    <>
      {/* <Header /> */}
      <div className="col-md-12">
        <div className="card card-container" id={styles.login_form_layout}>
        <label className={styles.login_font_title}>Register</label>
        <br />
        <br />
          <Form
            onSubmit={handleRegister}
            ref={c => {
              form = c;
            }}
          >
              <div>
                <div className="form-group">
                <label htmlFor="username" className={styles.login_font_input}>USERNAME</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                <label htmlFor="email" className={styles.login_font_input}>EAMIL</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, vemail]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Password" className={styles.login_font_input}>PASSWORD</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="PasswordCheck" className={styles.login_font_input}>PASSWORD CHECK</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="passwordCheck"
                    value={passwordCheck}
                    onChange={onChangePasswordCheck}
                    validations={[required]}
                  />
                </div>
                { passwordError && <p style={{'color':'red'}}>비밀번호가 일치하지 않습니다.</p> }
                <br />
                <br />

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      <Footer />
      </>
  )
}

export default Register;

