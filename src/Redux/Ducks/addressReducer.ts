import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { State } from '../index';
import { db } from '../../Dexie';


type Action = {
    type: string,
    payload: string
};

interface initState {
        firstName: string,
        lastName: string,
        email: string,
        countries: string
        UserCountries: string
};

const init: initState[] = [];

const GET_ALL_CONTACTS = "GET_ALL_CONTACTS";
const ADD_CONTACT = "ADD_CONTACT";
const DELETE_CONTACT = "DELETE_CONTACT";
const UPDATE_CONTACT = "UPDATE_CONTACT";

export const addressReducer = (state = init, action:Action) => {
    switch(action.type){
        case GET_ALL_CONTACTS: 
            return action.payload;
        case ADD_CONTACT:
            return [
                ...state,
                action.payload
            ];
        case DELETE_CONTACT:
            return [
                ...state,
                action.payload
            ];
        case UPDATE_CONTACT: 
            return [
                ...state,
                action.payload
            ];
        default: return state
    };
};

const getAllContactsAction = (contacts: object) => {
    return  {
        type: GET_ALL_CONTACTS,
        payload: contacts
    };  
};

const AddContactAction = (contact: object) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
};

const deleteContactAction = (contact: number) => {
    return {
        type: DELETE_CONTACT,
        payload: contact
    };
};

const updateContactAction = (id: any, contact: object ) => {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    };
};

export const getAllContacts = (): ThunkAction<void, State, unknown, AnyAction>  => {
    return async (dispatch: Dispatch) => {
        const data = await db.table("contacts").toArray()
        dispatch(getAllContactsAction(data));
    };
};

export const addContact = (values: any): ThunkAction<void, State, unknown, AnyAction> => {
    return (dispatch: Dispatch) => {
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            countries: values.countries,
            UserCountries: values.UserCountries
        };
        dispatch(AddContactAction(data))
        return db.contacts.put(data)
            .then(res => alert(`Successfully added ${data.firstName} ${data.lastName} from ${data.countries} to contacts `))
    };
};

export const deleteContact = (values: number): ThunkAction<void, State, unknown, AnyAction> => {
    return async (dispatch: Dispatch) => {
        dispatch(deleteContactAction(values))
        await db.contacts.delete(values)
        const data = await db.table("contacts").toArray()
        dispatch(getAllContactsAction(data));
    };
};

export const updateContact = (id: any, values: any): ThunkAction<void, State, unknown, AnyAction>  => {
    return (dispatch: Dispatch) => {
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            countries: values.countries,
            UserCountries: values.UserCountries
        };
        dispatch(updateContactAction(id, data))
        return db.contacts.update(id, data)
            .then(res => alert(`Successfully updated ${data.firstName} ${data.lastName} from ${data.countries}`))
    };
};