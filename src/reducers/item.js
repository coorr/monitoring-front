import produce from 'immer';

const initialState = {
    item: [],
    imagePath: [],
    currentItem: [],
    basketItem: [],
    total: null,
    count: 0,
    totalPrice: 0,
    itemLength:0,
    itemOne: null,
    isOpenPost: false,
    roadNumber: '',
    address: '',
    

    hasMoreItem: true,
    
    getItemLoading:false,
    getItemDone:false,
    getItemError:null,

    addItemLoading:false,
    addItemDone:false,
    addItemError:null,

    revisedItemLoading:false,
    revisedItemDone:false,
    revisedItemError:null,
    
    removeItemLoading:false,
    removeItemDone:false,
    removeItemError:null,

    uploadImageLoading:false,
    uploadImageDone:false,
    uploadImageError:null,

    getItemOneLoading:false,
    getItemOneDone:false,
    getItemOneError:null,

    basketAddUserLoading:false,
    basketAddUserDone:false,
    basketAddUserError:null,

    basketGetLoading:false,
    basketGetDone:false,
    basketGetError:null,

    basketGetUserLoading:false,
    basketGetUserDone:false,
    basketGetUserError:null,

    basketRemoveUserLoading:false,
    basketRemoveUserDone:false,
    basketRemoveUserError:null,

    basketDownUserLoading:false,
    basketDownUserDone:false,
    basketDownUserError:null,

    basketPlusUserLoading:false,
    basketPlusUserDone:false,
    basketPlusUserError:null,

    basketEmptyLoading:false,
    basketEmptyDone:false,
    basketEmptyError:null,
    
    basketInsertNotUserLoading:false,
    basketInsertNotUserDone:false,
    basketInsertNotUserError:null,

    duplicateSizeQuantityCheckLoading:false,
    duplicateSizeQuantityCheckDone:false,
    duplicateSizeQuantityCheckError:null,

    soldOutBasketLoading:false,
    soldOutBasketDone:false,
    soldOutBasketError:null,

    basketLengthOrderSaveLoading:false,
    basketLengthOrderSaveDone:false,
    basketLengthOrderSaveError:null,
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

export const REVISED_ITEM_REQUEST = 'REVISED_ITEM_REQUEST';
export const REVISED_ITEM_SUCCESS = 'REVISED_ITEM_SUCCESS';
export const REVISED_ITEM_FAILURE = 'REVISED_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const REMOVE_IMAGE_REQUEST = 'REMOVE_IMAGE_REQUEST';
export const CURRENT_ITEM_REQUEST = 'CURRENT_ITEM_REQUEST';
export const DOWN_COUNT_ITEMLIST_REQUEST = 'DOWN_COUNT_ITEMLIST_REQUEST';
export const REMOVE_COUNT_ITEMLIST_REQUEST = 'REMOVE_COUNT_ITEMLIST_REQUEST';
export const PLUS_COUNT_ITEMLIST_REQUEST = "PLUS_COUNT_ITEMLIST_REQUEST";
export const BASKET_ADD_ITEMLIST_REQUEST = "BASKET_ADD_ITEMLIST_REQUEST";
export const BASKET_NULL_REQUEST = "BASKET_NULL_REQUEST";
export const BASKET_LOCAL_ADD_REQUEST = "BASKET_LOCAL_ADD_REQUEST";
export const IS_POST_OPEN_REQUEST = "IS_POST_OPEN_REQUEST";
export const ADDRESS_ORDER_REQUEST = "ADDRESS_ORDER_REQUEST";

export const GET_ITEM_ONE_REQUEST = 'GET_ITEM_ONE_REQUEST';
export const GET_ITEM_ONE_SUCCESS = 'GET_ITEM_ONE_SUCCESS';
export const GET_ITEM_ONE_FAILURE = 'GET_ITEM_ONE_FAILURE';

export const BASKET_ADD_USER_REQUEST = 'BASKET_ADD_USER_REQUEST';
export const BASKET_ADD_USER_SUCCESS = 'BASKET_ADD_USER_SUCCESS';
export const BASKET_ADD_USER_FAILURE = 'BASKET_ADD_USER_FAILURE';

export const BASKET_GET_REQUEST = 'BASKET_GET_REQUEST';
export const BASKET_GET_SUCCESS = 'BASKET_GET_SUCCESS';
export const BASKET_GET_FAILURE = 'BASKET_GET_FAILURE';  

export const BASKET_GET_USER_REQUEST = 'BASKET_GET_USER_REQUEST';
export const BASKET_GET_USER_SUCCESS = 'BASKET_GET_USER_SUCCESS';
export const BASKET_GET_USER_FAILURE = 'BASKET_GET_USER_FAILURE';

export const BASKET_REMOVE_USER_REQUEST = 'BASKET_REMOVE_USER_REQUEST';
export const BASKET_REMOVE_USER_SUCCESS = 'BASKET_REMOVE_USER_SUCCESS';
export const BASKET_REMOVE_USER_FAILURE = 'BASKET_REMOVE_USER_FAILURE'; 

export const BASKET_DOWN_USER_REQUEST = 'BASKET_DOWN_USER_REQUEST';
export const BASKET_DOWN_USER_SUCCESS = 'BASKET_DOWN_USER_SUCCESS';
export const BASKET_DOWN_USER_FAILURE = 'BASKET_DOWN_USER_FAILURE';

export const BASKET_PLUS_USER_REQUEST = 'BASKET_PLUS_USER_REQUEST';
export const BASKET_PLUS_USER_SUCCESS = 'BASKET_PLUS_USER_SUCCESS';
export const BASKET_PLUS_USER_FAILURE = 'BASKET_PLUS_USER_FAILURE';

export const BASKET_EMPTY_REQUEST = 'BASKET_EMPTY_REQUEST';
export const BASKET_EMPTY_SUCCESS = 'BASKET_EMPTY_SUCCESS';
export const BASKET_EMPTY_FAILURE = 'BASKET_EMPTY_FAILURE';

export const BASKET_INSERT_NOTUSER_REQUEST = 'BASKET_INSERT_NOTUSER_REQUEST';
export const BASKET_INSERT_NOTUSER_SUCCESS = 'BASKET_INSERT_NOTUSER_SUCCESS';
export const BASKET_INSERT_NOTUSER_FAILURE = 'BASKET_INSERT_NOTUSER_FAILURE';

export const DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST = 'DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST';
export const DUPLICATE_SIZE_QUANTITY_CHECK_SUCCESS = 'DUPLICATE_SIZE_QUANTITY_CHECK_SUCCESS';
export const DUPLICATE_SIZE_QUANTITY_CHECK_FAILURE = 'DUPLICATE_SIZE_QUANTITY_CHECK_FAILURE';

export const SOLD_OUT_BASKET_REQUEST = 'SOLD_OUT_BASKET_REQUEST';
export const SOLD_OUT_BASKET_SUCCESS = 'SOLD_OUT_BASKET_SUCCESS';
export const SOLD_OUT_BASKET_FAILURE = 'SOLD_OUT_BASKET_FAILURE';

export const BASKET_LENGTH_ORDER_SAVE_REQUEST = 'BASKET_LENGTH_ORDER_SAVE_REQUEST';
export const BASKET_LENGTH_ORDER_SAVE_SUCCESS = 'BASKET_LENGTH_ORDER_SAVE_SUCCESS';
export const BASKET_LENGTH_ORDER_SAVE_FAILURE = 'BASKET_LENGTH_ORDER_SAVE_FAILURE';


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

            case REVISED_ITEM_REQUEST:
                draft.revisedItemLoading = true;
                draft.revisedItemDone = false;
                draft.revisedItemError = null;
                break;
            case REVISED_ITEM_SUCCESS:
                draft.revisedItemLoading=false;
                draft.revisedItemDone=true;
                break;
            case REVISED_ITEM_FAILURE:
                draft.revisedItemLoading=false;
                draft.revisedItemError=action.error;
                break;

            case REMOVE_ITEM_REQUEST:
                draft.removeItemLoading = true;
                draft.removeItemDone = false;
                draft.removeItemError = null;
                break;
            case REMOVE_ITEM_SUCCESS:
                draft.removeItemLoading=false;
                draft.removeItemDone=true;
                break;
            case REMOVE_ITEM_FAILURE:
                draft.removeItemLoading=false;
                draft.removeItemError=action.error;
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

            case BASKET_ADD_USER_REQUEST:
                draft.basketAddUserLoading = true;
                draft.basketAddUserDone = false;
                draft.basketAddUserError = null;
                break;
            case BASKET_ADD_USER_SUCCESS:
                draft.basketAddUserLoading=false;
                draft.basketAddUserDone=true;
                break;
            case BASKET_ADD_USER_FAILURE:
                draft.basketAddUserLoading=false;
                draft.basketAddUserError=action.error;
                break;

            case BASKET_GET_REQUEST:
                draft.basketGetLoading = true;
                draft.basketGetDone = false;
                draft.basketGetError = null;
                break;
            case BASKET_GET_SUCCESS:
                draft.basketGetLoading=false;
                draft.basketGetDone=true;
                draft.currentItem= action.data;
                const total = null;
                action.data.forEach(v => {
                    total += v.itemTotal
                })
                draft.totalPrice = total;
                draft.itemLength = action.data.length;
                break;
            case BASKET_GET_FAILURE:
                draft.basketGetLoading=false;
                draft.basketGetError=action.error;
                break;

            case BASKET_GET_USER_REQUEST:
                draft.basketGetUserLoading = true;
                draft.basketGetUserDone = false;
                draft.basketGetUserError = null;
                break;
            case BASKET_GET_USER_SUCCESS:
                draft.basketGetUserLoading=false;
                draft.basketGetUserDone=true;
                draft.basketItem= action.data;
                break;
            case BASKET_GET_USER_FAILURE:
                draft.basketGetUserLoading=false;
                draft.basketGetUserError=action.error;
                break;

            case BASKET_REMOVE_USER_REQUEST:
                draft.basketRemoveUserLoading = true;
                draft.basketRemoveUserDone = false;
                draft.basketRemoveUserError = null;
                break;
            case BASKET_REMOVE_USER_SUCCESS:
                draft.basketRemoveUserLoading=false;
                draft.basketRemoveUserDone=true;
                draft.currentItem= action.data;
                draft.itemLength = action.data.length
                break;
            case BASKET_REMOVE_USER_FAILURE:
                draft.basketRemoveUserLoading=false;
                draft.basketRemoveUserError=action.error;
                break;

            case BASKET_DOWN_USER_REQUEST:
                draft.basketDownUserLoading = true;
                draft.basketDownUserDone = false;
                draft.basketDownUserError = null;
                break;
            case BASKET_DOWN_USER_SUCCESS:
                draft.basketDownUserLoading=false;
                draft.basketDownUserDone=true;
                draft.currentItem= action.data;
                draft.itemLength = action.data.length
                break;
            case BASKET_DOWN_USER_FAILURE:
                draft.basketDownUserLoading=false;
                draft.basketDownUserError=action.error;
                break;

            case BASKET_PLUS_USER_REQUEST:
                draft.basketPlusUserLoading = true;
                draft.basketPlusUserDone = false;
                draft.basketPlusUserError = null;
                break;
            case BASKET_PLUS_USER_SUCCESS:
                draft.basketPlusUserLoading=false;
                draft.basketPlusUserDone=true;
                draft.currentItem= action.data;
                draft.itemLength = action.data.length
                break;
            case BASKET_PLUS_USER_FAILURE:
                draft.basketPlusUserLoading=false;
                draft.basketPlusUserError=action.error;
                break;

            case BASKET_EMPTY_REQUEST:
                draft.basketEmptyLoading = true;
                draft.basketEmptyDone = false;
                draft.basketEmptyError = null;
                break;
            case BASKET_EMPTY_SUCCESS:
                draft.basketEmptyLoading=false;
                draft.basketEmptyDone=true;
                draft.currentItem= [];
                draft.totalPrice= 0;
                draft.itemLength = 0
                break;
            case BASKET_EMPTY_FAILURE:
                draft.basketEmptyLoading=false;
                draft.basketEmptyError=action.error;
                break;

            case BASKET_INSERT_NOTUSER_REQUEST:
                draft.basketInsertNotUserLoading = true;
                draft.basketInsertNotUserDone = false;
                draft.basketInsertNotUserError = null;
                break;
            case BASKET_INSERT_NOTUSER_SUCCESS:
                draft.basketInsertNotUserLoading=false;
                draft.basketInsertNotUserDone=true;
                draft.currentItem= action.data;
                draft.itemLength = action.data.length
                break;
            case BASKET_INSERT_NOTUSER_FAILURE:
                draft.basketInsertNotUserLoading=false;
                draft.basketInsertNotUserError=action.error;
                break;

            case DUPLICATE_SIZE_QUANTITY_CHECK_REQUEST:
                draft.duplicateSizeQuantityCheckLoading = true;
                draft.duplicateSizeQuantityCheckDone = false;
                draft.duplicateSizeQuantityCheckError = null;
                break;
            case DUPLICATE_SIZE_QUANTITY_CHECK_SUCCESS:
                draft.duplicateSizeQuantityCheckLoading=false;
                draft.duplicateSizeQuantityCheckDone=true;
                break;
            case DUPLICATE_SIZE_QUANTITY_CHECK_FAILURE:
                draft.duplicateSizeQuantityCheckLoading=false;
                draft.duplicateSizeQuantityCheckError=action.error;
                break;

            case SOLD_OUT_BASKET_REQUEST:
                draft.soldOutBasketLoading = true;
                draft.soldOutBasketDone = false;
                draft.soldOutBasketError = null;
                break;
            case SOLD_OUT_BASKET_SUCCESS:
                draft.soldOutBasketLoading=false;
                draft.soldOutBasketDone=true;
                draft.currentItem=action.data;
                draft.itemLength = action.data.length
                break;
            case SOLD_OUT_BASKET_FAILURE:
                draft.soldOutBasketLoading=false;
                draft.soldOutBasketError=action.error;
                break;

            case BASKET_LENGTH_ORDER_SAVE_REQUEST:
                draft.basketLengthOrderSaveLoading = true;
                draft.basketLengthOrderSaveDone = false;
                draft.basketLengthOrderSaveError = null;
                break;
            case BASKET_LENGTH_ORDER_SAVE_SUCCESS:
                draft.basketLengthOrderSaveLoading=false;
                draft.basketLengthOrderSaveDone=true;
                draft.itemLength = action.data
                break;
            case BASKET_LENGTH_ORDER_SAVE_FAILURE:
                draft.basketLengthOrderSaveLoading=false;
                draft.basketLengthOrderSaveError=action.error;
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
                draft.currentItemAdd = true;
                break;  

            case DOWN_COUNT_ITEMLIST_REQUEST:
                const downCount = draft.currentItem.find((v,i) => v.keyIndex === action.data)
                downCount.itemCount= downCount.itemCount-1
                downCount.itemTotal= downCount.itemTotal+downCount.price;
                draft.total = draft.total - downCount.price;
                draft.count = draft.count - 1
                break;
            case PLUS_COUNT_ITEMLIST_REQUEST:
                const plusCount = draft.currentItem.find((v,i) => v.keyIndex === action.data)
                plusCount.itemCount=plusCount.itemCount+1 
                plusCount.itemTotal=plusCount.itemTotal+plusCount.price;
                draft.total = draft.total + plusCount.price;
                draft.count = draft.count + 1
                break;
            case REMOVE_COUNT_ITEMLIST_REQUEST:
                const removeCount = draft.currentItem.find((v,i) => v.keyIndex === action.data)
                draft.currentItem = draft.currentItem.filter((v,i) => v.keyIndex !== action.data)
                draft.total = draft.total - removeCount.itemTotal;
                draft.count = draft.count - removeCount.itemCount
                break;
            case BASKET_NULL_REQUEST:
                draft.currentItem = [];
                draft.total= null;
                draft.count = 0;
                break;
            case BASKET_LOCAL_ADD_REQUEST:
                draft.currentItem = action.data;
                draft.itemLength = action.data.length
                break;
            case IS_POST_OPEN_REQUEST:
                draft.isOpenPost= !draft.isOpenPost;
                break;
            case ADDRESS_ORDER_REQUEST:
                draft.address= action.address;
                draft.roadNumber = action.roadNumber;
                break;
            default:
                return state;
        }
    })
};

export default reducer;