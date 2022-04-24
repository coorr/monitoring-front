import produce from 'immer';

const initialState = {
    item: [],
    imagePath: [],
    currentItem: [],
    total: null,
    count: 0,
    itemOne: null,
    itemAdded: false,

    hasMoreItem: true,
    
    getItemLoading:false,
    getItemDone:false,
    getItemError:null,

    addItemLoading:false,
    addItemDone:false,
    addItemError:null,

    uploadImageLoading:false,
    uploadImageDone:false,
    uploadImageError:null,

    getItemOneLoading:false,
    getItemOneDone:false,
    getItemOneError:null,
    
}

export const GET_ITEM_FIRST_REQUEST = 'GET_ITEM_FIRST_REQUEST';
export const GET_ITEM_FIRST_SUCCESS = 'GET_ITEM_FIRST_SUCCESS';
export const GET_ITEM_FIRST_FAILURE = 'GET_ITEM_FIRST_FAILURE';

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const REMOVE_IMAGE_REQUEST = 'REMOVE_IMAGE_REQUEST';
export const CURRENT_ITEM_REQUEST = 'CURRENT_ITEM_REQUEST';
export const DOWN_COUNT_ITEMLIST_REQUEST = 'DOWN_COUNT_ITEMLIST_REQUEST';
export const REMOVE_COUNT_ITEMLIST_REQUEST = 'REMOVE_COUNT_ITEMLIST_REQUEST';
export const PLUS_COUNT_ITEMLIST_REQUEST = "PLUS_COUNT_ITEMLIST_REQUEST";
export const BASKET_ADD_ITEMLIST_REQUEST = "BASKET_ADD_ITEMLIST_REQUEST";

export const GET_ITEM_ONE_REQUEST = 'GET_ITEM_ONE_REQUEST';
export const GET_ITEM_ONE_SUCCESS = 'GET_ITEM_ONE_SUCCESS';
export const GET_ITEM_ONE_FAILURE = 'GET_ITEM_ONE_FAILURE';


const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ADD_ITEM_REQUEST:
                draft.addItemLoading = true;
                draft.addItemDone = false;
                draft.addItemError = null;
                break;
            case ADD_ITEM_SUCCESS:
                draft.item.unshift(action.data)
                draft.addItemLoading=false;
                draft.addItemDone=true;
                break;
            case ADD_ITEM_FAILURE:
                draft.addItemLoading=false;
                draft.addItemError=action.error;
                break;

            case GET_ITEM_FIRST_REQUEST:
                draft.getItemLoading = true;
                draft.getItemDone = false;
                draft.getItemError = null;
                break;
            case GET_ITEM_FIRST_SUCCESS:
                draft.getItemLoading=false;
                draft.getItemDone=true;
                draft.item = action.data
                break;
            case GET_ITEM_FIRST_FAILURE:
                draft.getItemLoading=false;
                draft.getItemError=action.error;
                break;

            case GET_ITEM_REQUEST:
                draft.getItemLoading = true;
                draft.getItemDone = false;
                draft.getItemError = null;
                break;
            case GET_ITEM_SUCCESS:
                draft.getItemLoading=false;
                draft.getItemDone=true;
                draft.item = draft.item.concat(action.data);
                draft.hasMoreItem = action.data.length === 10 || action.data.length === 30;
                break;
            case GET_ITEM_FAILURE:
                draft.getItemLoading=false;
                draft.getItemError=action.error;
                break;

            case GET_ITEM_ONE_REQUEST:
                draft.getItemOneLoading = true;
                draft.getItemOneDone = false;
                draft.getItemOneError = null;
                break;
            case GET_ITEM_ONE_SUCCESS:
                draft.getItemOneLoading=false;
                draft.getItemOneDone=true;
                draft.itemOne = action.data;
                break;
            case GET_ITEM_ONE_FAILURE:
                draft.getItemOneLoading=false;
                draft.getItemOneError=action.error;
                break;
                
            case UPLOAD_IMAGE_REQUEST:
                draft.imagePath = draft.imagePath.concat(action.data);
                break;
            case REMOVE_IMAGE_REQUEST:
                draft.imagePath = draft.imagePath.filter((v,i) => i !== action.data )
                break;
            case CURRENT_ITEM_REQUEST:
                draft.currentItem = draft.currentItem.concat(action.data);
                draft.total = draft.total+action.total;
                draft.count = draft.count+action.count;
                break;
            case DOWN_COUNT_ITEMLIST_REQUEST:
                const downCount = draft.currentItem.find((v,i) => v.index === action.data)
                downCount.itemCount= downCount.itemCount-1
                downCount.itemTotal= downCount.itemTotal+downCount.price;
                draft.total = draft.total - downCount.price;
                draft.count = draft.count - 1
                break;
            case PLUS_COUNT_ITEMLIST_REQUEST:
                const plusCount = draft.currentItem.find((v,i) => v.index === action.data)
                plusCount.itemCount=plusCount.itemCount+1 
                plusCount.itemTotal=plusCount.itemTotal+plusCount.price;
                draft.total = draft.total + plusCount.price;
                draft.count = draft.count + 1
                break;
            case REMOVE_COUNT_ITEMLIST_REQUEST:
                const removeCount = draft.currentItem.find((v,i) => v.index === action.data)
                draft.currentItem = draft.currentItem.filter((v,i) => v.index !== action.data)
                draft.total = draft.total - removeCount.itemTotal;
                draft.count = draft.count - removeCount.itemCount
                break;
            // case BASKET_ADD_ITEMLIST_REQUEST:
                // localStorage.setItem("localRecentProduct", JSON.stringify(action.data));
            default:
                return state;
        }
    })
};

export default reducer;