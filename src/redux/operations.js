import axios from 'axios';
import {
    addContactSuccess,
    addContactRequest, 
    addContactError, 
    deleteContactSuccess, 
    deleteContactRequest,
    deleteContactError,
    fetchContactSuccess,
    fetchContactRequest,
    fetchContactError
} from "./actions";

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest())
    try {
        const { data } = await axios.get('/contacts')
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error))
    }
};

export const addContact = (name, number) => async dispatch => {
    const contact = {
        name,
        number
    };

    dispatch(addContactRequest());

    try {
        const { data } = await axios.post(`/contacts`, contact);

        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

export const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest());

    try {
        await axios.delete(`/contacts/${contactId}`);
        dispatch(deleteContactSuccess(contactId));
    } catch (error) {
        dispatch(deleteContactError(error));
    }
};