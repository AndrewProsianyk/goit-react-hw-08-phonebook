import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    addContactSuccess,
    addContactRequest, 
    addContactError, 
    deleteContactSuccess, 
    deleteContactRequest,
    deleteContactError,
    fetchContactSuccess,
    fetchContactRequest,
    fetchContactError,
    changeFilter
} from "./actions";



const contacts = createReducer([], {
    [addContactSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [fetchContactSuccess]: (_, {payload}) => payload
});

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload,
});

const loading = createReducer(false, {
    [addContactSuccess]: () => false,
    [addContactRequest]: () => true,
    [addContactError]: () => false,
    [deleteContactSuccess]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactError]: () => false,
    [fetchContactSuccess]: () => false,
    [fetchContactRequest]: () => true,
    [fetchContactError]: () => false
});

const error = createReducer(null, {})

export default combineReducers({
    contacts,
    filter,
    loading,
    error,
});