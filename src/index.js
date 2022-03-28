import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './App.jsx'
import './style.css'

const initialState = {
  number: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'plus':
      return {...state, number: state.number + 1}
    case 'minus':
      if(state.number !== 0){
        return {...state, number: state.number - 1}
      }
    case 'reset':
      return {...state, number: state.number = 0}
    case 'random':
      return {...state, number: state.number + Math.floor(Math.random()*100)}
    default: 
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)