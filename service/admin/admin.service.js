import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/admin/";

class AdminService {
    insertItemAll(itemData) {
      return axios.post(API_URL + "insertItemAll", itemData, { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
    }
    revisedItem(itemData) {
        return axios.post(API_URL + "revisedItem", itemData,  { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
    }
    removeItem(id) {
      return axios.post(API_URL + "removeItem/"+id, null,  { headers: { Authorization:  authHeader() }});
    }  
}

export default new AdminService();