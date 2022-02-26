
//import createstore,logger and applymiddleware
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//import rootReducer
import rootReducer from "./root-reducer";

//cast logger into middleware
const middlewares = [logger];
//create store and pass in rootreducer,applymiddleware
const store = createStore(rootReducer,applyMiddleware(...middlewares))

export default store;
//export it to index.js and pass it into provider