import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer"
import thunkMiddleware from 'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta
//linea sirve para conectar nuestra APP con la extension
// REDUX DEVTOOLS DEL NAVEGADOR


const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
  // esta linea sirve para que podamos hacer peticiones
  // a una Api/servidor
);

export default store;

