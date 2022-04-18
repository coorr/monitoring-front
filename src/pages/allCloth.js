// import React, { Component } from 'react';
// import Header from '../components/header';
// import ItemService from '../../service/item/Item.service';
// import authHeader from '../../service/user/auth-header';
// import Router from  "next/router";
// import TokenCheck from '../../service/user/TokenCheck';
// import AuthService from '../../service/user/Auth.service';

// export default class allCloth extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             itemData: '',
//              }
//         }


//     componentDidMount() {
//         console.log(authHeader());
//         ItemService.selectItemAll()
//             .then(res => {
//                 this.setState({itemData: res.data})
//             })
//             .catch(err => {
//                 if(err.response.status == 401){
//                     AuthService.logout();
//                     Router.push("login")
//                 }
//             })
//     }
    
//     render() {
//         return (
//         <>
//             <Header />
//             <div>allCloth</div>
//         </>
//         )
//     }
// }
