import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/item/";

class ItemService {
    insertItemAll(itemData) {
      return axios.post(API_URL + "insertItemAll", itemData, { headers: { Authorization:  authHeader(), 'Content-Type' : 'multipart/form-data' }});
    }
    selectItemAll(lastId,size) {
      return axios.get(API_URL + "getItem?lastId="+lastId+"&size="+size, { headers: { Authorization:  authHeader() }});
    }
}

export default new ItemService();