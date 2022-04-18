const initialState = {
    item: [{
        id:1,
        title:'시어서커 싱글 브레스티드 자켓 (블랙)',
        price: 15000,
        discount_price: 8000,
        Image: [{
            src: "https://github.com/coorr/Algorithm/blob/main/img/aiwacs_ERD.drawio.png"
        }]
    }],
    imagePath: [],
    itemAdded: false,
}

const ADD_ITEM = 'ADD_ITEM';
export const addItem = {
    type: ADD_ITEM
}

const dummyPost = {
    id:2,
    title: '더미데이터입니다.',
    price: 20000,
    discount_price: 10000,
    Image: [{
        src: "https://github.com/coorr/Algorithm/blob/main/img/history_record.png"
    }]
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                item: [dummyPost, ...state.item]
            }
        default:
            return state;
    }
};

export default reducer;