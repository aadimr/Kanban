import { configureStore } from "@reduxjs/toolkit";
import ListSlice from "./ListSlice";
import  storage  from "redux-persist/lib/storage";
import { persistReducer,persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage
};

const reducer = combineReducers({
    ListSlice: ListSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})


export const persistor = persistStore(store)