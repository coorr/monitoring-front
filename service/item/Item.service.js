import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/item/";

class ItemService {
    insertItemAll(itemData) {
      return axios.post(API_URL, itemData, { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
    }
    selectItemAll(lastId,size,category) {
      return axios.get(config + "api/items?itemLastId="+lastId+"&size="+size+"&category="+category, { headers: { Authorization:  authHeader() }});
    }
    getItemOne(id) {
      return axios.get(API_URL + id, { headers: { Authorization:  authHeader() }});
    }
    basketAddUser(id, data) {
      return axios.post(API_URL + "basketAddUser/"+id, data,  { headers: { Authorization:  authHeader() }});
    }
    removeItem(id) {
      console.log(id);
      return axios.delete(API_URL + id,   { headers: { Authorization:  authHeader() }});
    }  
    getCurrentItem() {
      return JSON.parse(localStorage.getItem('localRecentProduct'));
    }
    getItemLength() {
      return JSON.parse(localStorage.getItem('itemLength'));
    }
    revisedItem(itemData, itemId) {
      return axios.patch(API_URL + itemId, itemData,  { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
  }
    
    
}

export default new ItemService();