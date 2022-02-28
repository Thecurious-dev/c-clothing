
//import createstore,logger and applymiddleware
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//import rootReducer
import rootReducer from "./root-reducer";

import {persistStore} from "redux-persist";

//cast logger into middleware
const middlewares = [];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

//create store and pass in rootreducer,applymiddleware
const store = createStore(rootReducer,applyMiddleware(...middlewares));

const persistor = persistStore(store);

const exportedObject ={
    store,
    persistor
}

export default exportedObject;
//export it to index.js and pass it into provider