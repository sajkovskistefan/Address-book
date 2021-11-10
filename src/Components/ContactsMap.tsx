import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/Ducks/addressReducer';
import { ROUTES } from '../Services/Data/Routes';
import Button from './UI/button';

import '../Assets/Styles/Contacts.css'

interface Props {
    allContacts: OneObject[],
};

interface OneObject {
    id: number
    firstName: string,
    lastName: string,
    email: string,
    countries: string
};

const ContactsMap: React.FC<Props> = ({allContacts}) => {

    const history = useHistory()

    const goToEditContactPage = (data: any) => {
        history.push({
            pathname: ROUTES.EDIT_CONTACT,
            state: data
        });
    };

    const dispatch = useDispatch();

    const deleteItem = (values: number) => {
        dispatch(deleteContact(values))
    };
    return (
        <div className="contact_container">
            {allContacts && allContacts !== [] ? allContacts.map((oneContact: OneObject, i) => {
                return(
                    <div className="contact_card" key={oneContact.id}>
                        <div className="contact_card_left">
                            <div className="contact_card_information">
                                {oneContact.firstName}
                            </div>
                            <div className="contact_card_information" >
                                {oneContact.lastName}
                            </div>
                            <div className="contact_card_information">
                                {oneContact.email}
                            </div>
                            <div className="contact_card_information">
                                {oneContact.countries}
                            </div>
                        </div>
                        <div className="contact_card_right" >
                            <Button className="edit_contact_btn" text="Edit Contact" type="button" onClick={() => {
                                goToEditContactPage(oneContact)
                            }} />
                              <Button className="delete_contact_btn" text="Delete Contact" type="button" onClick={() => {
                                deleteItem(oneContact.id)
                            }} />
                        </div>
                    </div>
                )
            }):null}
        </div>
    );
};

export default ContactsMap;
