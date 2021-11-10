import React from 'react';
import { ROUTES } from '../../Services/Data/Routes';

import { Link } from 'react-router-dom';
import '../../Assets/Styles/Home.css'

const Nav = () => {
    return (
        <ul className="unordered_list_nav">
            {/* <li className="unordered_list_item_nav">
                <Link className="unordered_list_link" to={ROUTES.HOME}>Home</Link>
            </li> */}
            <li className="unordered_list_item_nav">
                <Link className="unordered_list_link" to={ROUTES.ALL_CONTACTS}>View All Contacts</Link>
            </li>
            <li className="unordered_list_item_nav">
                <Link className="unordered_list_link" to={ROUTES.ADD_EDIT_DELETE_CONTACT}>Add Contacts</Link>
            </li>
        </ul>
    );
};

export default Nav;
