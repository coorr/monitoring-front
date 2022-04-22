import produce from 'immer';

const initialState = {
    item: [],
    imagePath: [],
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

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';
export const REMOVE_IMAGE_REQUEST = 'REMOVE_IMAGE_REQUEST';

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
            default:
                return state;
        }
    })
};

export default reducer;