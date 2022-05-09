import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/order/";

class OrderService {
    saveOrderDeliveryItem(userId, data) {
      return axios.post(API_URL + "saveOrderDeliveryItem/"+userId, data,  { headers: { Authorization:  authHeader() }});
    }
    quantityCheckOrder(userId, data) {
      return axios.post(API_URL + "quantityCheckOrder/"+userId, data,  { headers: { Authorization:  authHeader() }});
    }
    soldOutItemRemove(userId) {
      return axios.post(API_URL + "soldOutItemRemove/"+userId,  { headers: { Authorization:  authHeader() }});
    } 
    getOrderUserById(userId, startDate, endDate, status) {
      return axios.get(API_URL + "getOrderUserById/"+userId+"?startDate="+startDate+"&endDate="+endDate+"&status="+status,  { headers: { Authorization:  authHeader() }});
    } 
    cancelOrder(orderId, startDate, endDate) {
      return axios.post(API_URL + "cancelOrderItem/"+orderId+"?startDate="+startDate+"&endDate="+endDate, { headers: { Authorization:  authHeader() }});
    } 

}

export default new OrderService();