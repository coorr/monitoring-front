import { HYDRATE } from "next-redux-wrapper"; 
import { combineReducers } from "redux";
import user from './user.js';
import item from './item.js';


const rootReducer = combineReducers({
  index: (state = {}, action) => {    // 서버 사이드 렌더링
    switch(action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state, ...action.payload
        };
      default:
        return state;
    }
  },
  user,
  item,
})
    
export default rootReducer;