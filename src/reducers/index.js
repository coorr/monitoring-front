import { HYDRATE } from "next-redux-wrapper"; 
import { combineReducers } from "redux";
import user from './user.js';
import item from './item.js';
import order from './order.js';


const rootReducer = (state, action) => {
    switch(action.type) {
      case HYDRATE:
        return action.payload;
      default: {
        const combineReducer = combineReducers({
          user,
          item,
          order,
        })
        return combineReducer(state, action);
    }
  }
} 

export default rootReducer;