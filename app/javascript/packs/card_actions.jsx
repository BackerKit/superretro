import Rails from "@rails/ujs"
import axios from 'axios'

const GET_CARDS = "GET_CARDS";
const EXAMPLE_TYPE = "cardAction/exampleType";

const actions = {
    getCards: function (dispatch) {
        axios.get("cards")
            .then((response) => response.data)
            .then((data) => {
                dispatch({
                    data,
                    type: GET_CARDS
                });
            })
    },
    exampleAction: function (input) {
        return {
            data: input,
            type: EXAMPLE_TYPE
        }
    }
}

export default actions;
