import axios from "axios";
import { config } from '../config/config'

const API_URL = config+"aiwacs/";

class AuthService {
  login(username, password,requestURL) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      }, { headers: { Referers:requestURL}})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
