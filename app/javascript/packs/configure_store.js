import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';

const initialState = {
    cards: {}
};

function rootReducer(state, action) {
    switch(action.type){
        // case 'GET_CARDS':
        //     const new_state = {
        //         cards: action.data
        //     }
        //     return new_state;
        //     break;
        default: return state;
    }
}

export default function configureStore() {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}