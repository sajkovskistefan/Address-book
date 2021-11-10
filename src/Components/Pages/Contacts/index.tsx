import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactsMap from '../../ContactsMap';
import { getAllContacts } from '../../../Redux/Ducks/addressReducer';

import { State } from '../../../Redux';

const Contacts = () => {

    const dispatch = useDispatch();

    const allContacts = useSelector((state: State) => state.addressReducer);

    useEffect(() => {
        dispatch(getAllContacts())
    },[dispatch]);

    return (
        <div className="contacts_container_with_tittle">
            <h1 className="dynamic_tittle">Contacts</h1>
            <ContactsMap allContacts={allContacts}/>
        </div>
    );
};

export default Contacts;
