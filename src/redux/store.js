import contactReducer from './reducer'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';



const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
]
})


export default store;