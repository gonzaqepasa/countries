import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index.js';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



// Creamos el reducer : Leer un poco más sobre ApplyMiddleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



export default store;

