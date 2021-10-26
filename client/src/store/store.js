import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Reducer from '../reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



// Creamos el reducer : Leer un poco más sobre ApplyMiddleware
export var store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))





