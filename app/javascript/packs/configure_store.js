import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))



const initialState = {
    exampleInitialState: "hi mom I am redux",
    cards: [],
};

function rootReducer(state, action) {
    console.log('called rootReducer');
    console.log(state);
    console.log(action);

    const newState = {...state}; // TODO should be a deep clone

    switch(action.type){
        // case 'GET_CARDS':
        //     const new_state = {
        //         cards: action.data
        //     }
        //     return new_state;
        //     break;
        case "cards/cardsLoaded":
            console.log('cards/cardsLoaded')
            newState['cards'] = action.cards
            return newState;
            break;

        case 'cardAction/exampleType':
            newState['exampleText'] = action.data
            return newState;
            break;

        debugger;

        default: return state;
    }

}

export default function configureStore() {
    const store = createStore(rootReducer, initialState, composedEnhancer);
    return store;
}
