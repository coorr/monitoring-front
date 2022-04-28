import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/item/";

class ItemService {
    insertItemAll(itemData) {
      return axios.post(API_URL + "insertItemAll", itemData, { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
    }
    revisedItem(itemData) {
      return axios.post(API_URL + "revisedItem", itemData,  { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
    }
    selectItemAll(lastId,size) {
      return axios.get(API_URL + "getItem?lastId="+lastId+"&size="+size, { headers: { Authorization:  authHeader() }});
    }
    getItemOne(id) {
      return axios.get(API_URL + "getItemOne/"+id, { headers: { Authorization:  authHeader() }});
    }
    removeItem(id) {
      return axios.post(API_URL + "removeItem/"+id, { headers: { Authorization:  authHeader() }});
    }  
    basketAddUser(id, data) {
      return axios.post(API_URL + "basketAddUser/"+id, data,  { headers: { Authorization:  authHeader() }});
    }



    getCurrentItem() {
      return JSON.parse(localStorage.getItem('localRecentProduct'));
    }
}

export default new ItemService();