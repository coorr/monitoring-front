import axios from "axios";
import { config } from "../../src/config/config";

const API_URL = config+"api/item/";

class ItemService {
      insertItemAll(itemData) {
        return axios.post(API_URL + "insertItemAll", itemData);
      }
}

export default new ItemService();