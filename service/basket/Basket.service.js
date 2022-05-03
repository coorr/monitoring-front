import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/basket/";

class BasketService {
    basketAddUser(id, data) {
      return axios.post(API_URL + "basketAddUser/"+id, data,  { headers: { Authorization:  authHeader() }});
    }
    getBasketByUserId(id) {
      return axios.get(API_URL + "getBasketByUserId/"+id, { headers: { Authorization:  authHeader() }})
    }
    removeBasketById(id, userId) {
      return axios.post(API_URL + "removeBasketById/"+id+"/"+userId, { headers: { Authorization:  authHeader() }})
    } 
    basketDownUserById(id, userId) {
      return axios.post(API_URL + "basketDownUserById/"+id+"/"+userId, { headers: { Authorization:  authHeader() }})
    } 
    basketPlusUserById(id, userId) {
      return axios.post(API_URL + "basketPlusUserById/"+id+"/"+userId, { headers: { Authorization:  authHeader() }})
    } 
    basketEmpty(userId) {
      return axios.post(API_URL + "basketEmpty/"+userId, { headers: { Authorization:  authHeader() }})
    }
    basketInsertNotUser(userId, data) {
      return axios.post(API_URL + "insertNotUserBasket/"+userId, data,  { headers: { Authorization:  authHeader() }});
    } 
    duplicateSizeQuantityCheck(data) {
      return axios.post(API_URL + "duplicateSizeQuantityCheck/",  data,  { headers: { Authorization:  authHeader() }});
    } 
    


}

export default new BasketService();