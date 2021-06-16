import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';

const initialState = {
    exampleInitialState: "hi mom I am redux",
    cards: {},
};

function rootReducer(state, action) {
    console.log('called rootReducer');
    console.log(state);
    console.log(action);

    switch(action.type){
        // case 'GET_CARDS':
        //     const new_state = {
        //         cards: action.data
        //     }
        //     return new_state;
        //     break;
        case 'cardAction/exampleType':
            const newState = {...state}; // TODO should be a deep clone

            newState['exampleText'] = action.data
            return newState;
            break;

        default: return state;
    }

}

export default function configureStore() {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
}
