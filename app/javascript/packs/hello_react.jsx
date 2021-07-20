// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>App React</div> at the bottom
// of the page.

import React from 'react'
import App from './app';
import ReactDOM from 'react-dom'
import configureStore from "./configure_store";
import { Provider } from 'react-redux';
const store = configureStore();


import axios from "axios";
async function fetchCards(dispatch, getState) {
    console.log('fetching cards')
    const response = await axios.get("cards")
    let payload = response.data;
    dispatch({ type: 'cards/cardsLoaded', cards: payload })
}
store.dispatch(fetchCards)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Provider store={store}>
         <App />
       </Provider>,
       document.getElementById('root')
   )
 })
