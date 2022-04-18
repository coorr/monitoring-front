import React, { useState, useCallback ,useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Header from "../components/header";
import AuthService from "../../service/user/Auth.service";
import Link from "next/link";
import Router from "next/router";
import styles from '../components/css/User.module.css'
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";


const Login = () => {
  const form =useRef(null);
  const checkBtn =useRef(null);

  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = useCallback((e) => {
    e.preventDefault();

    if(username.length === 0) {
      return alert("아이디 항목은 필수 입력값입니다.")
    } else if(password.length ===0) {
      return alert("패스워드 항목은 필수 입력값입니다.")
    }
    

    setLoading(true);
    form.validateAll();

    if (checkBtn.context._errors.length === 0) {
      AuthService.login(username, password)
      .then(res => {
          dispatch(loginAction(username))
          Router.push("/")
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          alert(resMessage)
          setLoading(false)
        }
      );
    } else {
      setLoading(false)
    }
  },[username,password]);

  return (
    <>
     <Header />
        <div className="col-md-12">
            <div className="card card-container">
            
              <label className={styles.login_font_title}>Login</label>
              <br />
              <br />

              <Form
                onSubmit={handleLogin}
                ref={c => {
                  form = c;
                }}
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
                    disabled={loading}
                    type="submit"
                    // onSubmit={handleLogin}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                <br />

                <div className="form-group">
                  <div className="btn  login_account_layout">
                    <label className={styles.login_account_font_label}>New to Account?</label>{" "}
                    <a href="register" className={styles.login_account_font_a}>Create an account.</a>
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
       
      </>
  )
};

export default Login


// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       loading: false,
//       currentUser: ''
//     };
//   }

//   componentDidMount() {
//     const user = AuthService.getCurrentUser();
//     if(user) {
//       Router.push("/")
//     }
//   }

//   onChangeUsername = (e) => {
//     this.setState({
//       username: e.target.value
//     });
//   }

//   onChangePassword = (e) => {
//     this.setState({
//       password: e.target.value
//     });
//   }

//   handleLogin = (e) => {
//     e.preventDefault();
//     const { username, password} = this.state;
//     if(username.length === 0) {
//       return alert("아이디 항목은 필수 입력값입니다.")
//     } else if(password.length ===0) {
//       return alert("패스워드 항목은 필수 입력값입니다.")
//     }
    

//     this.setState({
//       loading: true
//     });
//     this.form.validateAll();

//     if (this.checkBtn.context._errors.length === 0) {
//       AuthService.login(this.state.username, this.state.password).then(
//         res => {
//           Router.push("/")
//         },
//         error => {
//           const resMessage =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();
//           alert(resMessage)
//           this.setState({
//             loading: false,
//           });
//         }
//       );
//     } else {
//       this.setState({
//         loading: false
//       });
//     }
//   }

//   render() {
//     const { currentUser } = this.state;
//     return (
//     <>
//      <Header />
//         <div className="col-md-12">
//             <div className="card card-container">
            
//               <label className={styles.login_font_title}>Login</label>
//               <br />
//               <br />

//               <Form
//                 onSubmit={this.handleLogin}
//                 ref={c => {
//                   this.form = c;
//                 }}
//               >
//                 <div className="form-group">
//                   <label htmlFor="username" className={styles.login_font_input}>ID</label>
//                   <Input
//                     type="text"
//                     className="form-control"
//                     name="username"
//                     value={this.state.username}
//                     onChange={this.onChangeUsername}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password" className={styles.login_font_input}>PASSWORD</label>
//                   <Input
//                     type="password"
//                     className="form-control"
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.onChangePassword}
//                   />
//                 </div>

//                 <br />

//                 <div className="form-group">
//                   <button
//                     className="btn btn-primary btn-block"
//                     disabled={this.state.loading}
//                     type="submit"
//                     onSubmit={this.handleLogin}
//                   >
//                     {this.state.loading && (
//                       <span className="spinner-border spinner-border-sm"></span>
//                     )}
//                     <span>Login</span>
//                   </button>
//                 </div>

//                 <br />

//                 <div className="form-group">
//                   <div className="btn  login_account_layout">
//                     <label className={styles.login_account_font_label}>New to Account?</label>{" "}
//                     <a href="register" className={styles.login_account_font_a}>Create an account.</a>
//                   </div>
//                 </div>

//                 <CheckButton
//                   style={{ display: "none" }}
//                   ref={c => {
//                     this.checkBtn = c;
//                   }}
//                 />
//               </Form>
              
//             </div>
//           </div>
       
//       </>
//     );
//   }
// }
