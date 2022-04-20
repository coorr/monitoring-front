import produce from 'immer';

const initialState = {
    item: [
    
],
    imagePath: [],
    itemAdded: false,

    hasMoreItem: true,
    
    getItemLoading:false,
    getItemDone:false,
    getItemError:null,

    addItemLoading:false,
    addItemDone:false,
    addItemError:null,

    
}

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id:3,
    title:'시어서커 쇼츠 (다크네이비)',
    price: 2000,
    discountPrice: 3000,
    Image: [{
        src: "https://lh3.googleusercontent.com/OVRrTYuvKFpoqQBcUMC5L4-bawL-2EhvpJo4E8XJzNT4WprmG01SDCEoNosBFadG_ITErj6irOsDFMrh9tPUdBkefmB4nfNYBsvRfftpCXHw5QFJs3cWv_Vjv1QSpQVpKhJ3AnlygwznvyfjXDcjUyEvkbs3llqCwaoWdH8pDepcKvn6Oo4tAZGH7GV992L13wX6PwfnxxDrBUKOxzk2GaBRAyXtN2E6Hp05XYgpUWe9loptVMjd41Io42GAKKrr8uBign9D-dJtGFzTkL9tSNeAQGDYJOvu8ZPvj6LHe1zlYT29amiQdkpzr_eLdQKD2Mg6s2jimgbrbVNQB0yC6FYuT9LK21iBcC0P8aImr_cTtSMVSfIP3T6tb25ZgYhVwyI1yEM7Cirg2xAbas195RCRfEyeTLiGyFcSAJnV8nQ1JdXJEnXn4hxWLvKGGlXP3ErWzwTox271mJXgQXRrScCZAYTSF16Hp2iIlMEMKJjqZdUB1XV_yGZth8P6qE2OOcGbJwcr1TTU1IbpFjuHmUvUORInpt1vcRveQgCUX6vyJZ838nasITAu13V1gL4Yjd0Q1pLnZUvOTjBidcBOYCDgQcwyRL2KzriV1bBvAwtJpLsLuFlMyIvrW2At8ni19EoMhkTmxY5ztDRswrx_S1SlGO5ZrZgxJhBFVT48mSXtpjLxCNf6V26Q5k7sxQVnVg_Fzr6y6_SIZRPtbE9195WDxgniJagNYJPsJ_f07sEbD6Jf2mSaV39H0MU=w548-h834-no?authuser=0"
    }]
}));


// export const generateDummyPost = 

const reducer = (state = initialState, action) => {
    console.log(action);
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
                // draft.item = action.data.concat(draft.item);
                draft.item = action.data;
                draft.hasMoreItem = draft.item.length < 100;
                break;
            case GET_ITEM_FAILURE:
                draft.getItemLoading=false;
                draft.getItemError=action.error;
                break;

            case UPLOAD_IMAGE_REQUEST:
                draft.imagePath = action.data;
                break;
            default:
                return state;
        }
    })
};

export default reducer;