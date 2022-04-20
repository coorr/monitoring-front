import AuthService from "../../service/user/Auth.service";
import Router from "next/router";

export default function tokenCheck(state) {
    if(state === 'invalid authority') {
        AuthService.logout();
        Router.push("login")
    }
}