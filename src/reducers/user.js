import produce from 'immer';

export const initialState = {
    logInLoading: false,
    logInDone: false,
    logInError: null,
    
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    
    singupLoading: false,
    singupDone: false,
    singupError: null,


    isLoggingOut: false,
    user: null,
    username:null,
    email:null,

    
}




export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';





export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}



const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case SIGNUP_REQUEST:
                draft.singupLoading=true;
                draft.singupDone=false;
                draft.singupError=null;
                break;
            case SIGNUP_SUCCESS:
                draft.username= action.data.username;
                draft.email= action.data.email;
                draft.singupLoading=false;
                draft.singupDone=true;
                break;
            case SIGNUP_FAILURE:
                draft.singupDone=false;
                draft.singupError=action.error;
                break;

            case LOG_IN_REQUEST:
                draft.logInLoading=true;
                draft.logInDone=false;
                draft.logInError=null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading=false;
                draft.logInDone=true;
                draft.user= action.data
                break;
            case LOG_IN_FAILURE:
                draft.logInDone=false;
                draft.logInError=action.error;
                break;
    
            case LOG_OUT_REQUEST:
                draft.logOutLoading=true;
                draft.logOutDone=false;
                draft.logOutError=null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading=false;
                draft.logOutDone=true;
                draft.user=null;
                draft.logInDone=false
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading=false;
                draft.logOutError=action.error;
                break;
            default:
                return state;
        }
    })
};

export default reducer;