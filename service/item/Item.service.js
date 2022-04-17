import axios from "axios";
import { config } from "../../src/config/config";
import authHeader from '../user/auth-header'

const API_URL = config+"api/item/";

class ItemService {
      insertItemAll(itemData) {
        return axios.post(API_URL + "insertItemAll", itemData, { headers: { Authorization:  authHeader() }});
      }
      selectItemAll() {
        return axios.get(API_URL + "getItem", { headers: { Authorization:  authHeader() }});
      }
}

export default new ItemService();