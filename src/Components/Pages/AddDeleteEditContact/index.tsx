import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { addContact, getAllContacts } from '../../../Redux/Ducks/addressReducer';
import ContactsMap from '../../ContactsMap';
import { State } from '../../../Redux';
import FormFormik from '../../widgets/FormFormik';

const AddDeleteEditContact = () => {
    const allContacts = useSelector((state: State) => state.addressReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllContacts());
    },[dispatch]);

    const countryList = require('country-list')
    const countries = countryList.getNames();

    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        countries: countries,
        UserCountries: ""
    };

    const onSubmit = (values: object, {resetForm}:any) => {
        dispatch(addContact(values))
        resetForm({values: ""})
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Email must be a valid Email").required("Requred"),
        countries: Yup.string().typeError("Please select a country").required("required")
    });
    
    return (
        <div>
            <h1 className="dynamic_tittle" >Add Your Contact</h1>
            <FormFormik
                initialValues={initValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                name="firstName"
                name2="lastName"
                name3="email"
                name4="countries"
                name5="UserCountries"
                text="Enter First Name"
                text2="Enter Last Name"
                text3="Enter Email"
                text4="Choose a country"
                type="text"
                id="firstName"
                id2="lastName"
                id3="email"
                id4="countries"
                id5="UserCountries"
                textButton="Add Contact"
                typeButton="submit"
                s={initValues.UserCountries}
            />
    <ContactsMap allContacts={allContacts}/>
        </div>
    );
};

export default AddDeleteEditContact;