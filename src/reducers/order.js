import produce from 'immer';

export const initialState = {

    orderSaveLoading:false,
    orderSaveDone:false,
    orderSaveError:null,
}


export const ORDER_SAVE_REQUEST = 'ORDER_SAVE_REQUEST';
export const ORDER_SAVE_SUCCESS = 'ORDER_SAVE_SUCCESS';
export const ORDER_SAVE_FAILURE = 'ORDER_SAVE_FAILURE';

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
        
            default:
                return state;
        }
    })
};

export default reducer;