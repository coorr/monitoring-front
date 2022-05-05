import produce from 'immer';

export const initialState = {

    orderList: [],

    orderSaveLoading:false,
    orderSaveDone:false,
    orderSaveError:null,

    getOrderAllLoading:false,
    getOrderAllDone:false,
    getOrderAllError:null,

    cancelOrderLoading:false,
    cancelOrderDone:false,
    cancelOrderError:null,
}

export const ORDER_SAVE_REQUEST = 'ORDER_SAVE_REQUEST';
export const ORDER_SAVE_SUCCESS = 'ORDER_SAVE_SUCCESS';
export const ORDER_SAVE_FAILURE = 'ORDER_SAVE_FAILURE';

export const GET_ORDER_ALL_REQUEST = 'GET_ORDER_ALL_REQUEST';
export const GET_ORDER_ALL_SUCCESS = 'GET_ORDER_ALL_SUCCESS';
export const GET_ORDER_ALL_FAILURE = 'GET_ORDER_ALL_FAILURE';

export const CANCEL_ORDER_REQUEST = 'CANCEL_ORDER_REQUEST';
export const CANCEL_ORDER_SUCCESS = 'CANCEL_ORDER_SUCCESS';
export const CANCEL_ORDER_FAILURE = 'CANCEL_ORDER_FAILURE';

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ORDER_SAVE_REQUEST:
                draft.orderSaveLoading = true;
                draft.orderSaveDone = false;
                draft.orderSaveError = null;
                break;
            case ORDER_SAVE_SUCCESS:
                draft.orderSaveLoading=false;
                draft.orderSaveDone=true;
                break;
            case ORDER_SAVE_FAILURE:
                draft.orderSaveLoading=false;
                draft.orderSaveError=action.error;
                break;

            case GET_ORDER_ALL_REQUEST:
                draft.getOrderAllLoading = true;
                draft.getOrderAllDone = false;
                draft.getOrderAllError = null;
                break;
            case GET_ORDER_ALL_SUCCESS:
                draft.getOrderAllLoading=false;
                draft.getOrderAllDone=true;
                draft.orderList = action.data;
                break;
            case GET_ORDER_ALL_FAILURE:
                draft.getOrderAllLoading=false;
                draft.getOrderAllError=action.error;
                break;

            case CANCEL_ORDER_REQUEST:
                draft.cancelOrderLoading = true;
                draft.cancelOrderDone = false;
                draft.cancelOrderError = null;
                break;
            case CANCEL_ORDER_SUCCESS:
                draft.cancelOrderLoading=false;
                draft.cancelOrderDone=true;
                draft.orderList = action.data;
                break;
            case CANCEL_ORDER_FAILURE:
                draft.cancelOrderLoading=false;
                draft.cancelOrderError=action.error;
                break;
        
            default:
                return state;
        }
    })
};

export default reducer;