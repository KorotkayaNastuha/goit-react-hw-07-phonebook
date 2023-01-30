import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactSlice';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: 'root',
//     storage,

// }
// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

// export const persistor = persistStore(store)
