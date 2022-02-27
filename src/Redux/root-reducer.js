import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import combineReducer to combine all reducers
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key:"root",
    storage,
    whitelist:["cart"]
};


const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig,rootReducer);