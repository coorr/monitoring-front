import Router from 'next/router'
import AuthService from './Auth.service';

export default function tokenCheck(token) {
    console.log(token);
    if(token) {
        console.log("22");
        AuthService.logout();
        return Router.push("login")
    }
}