import Rails from "@rails/ujs"
import axios from 'axios'

const GET_CARDS = "GET_CARDS";

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
    }
}

export default actions;