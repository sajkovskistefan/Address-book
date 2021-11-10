import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import FormFormik from '../../widgets/FormFormik';
import { updateContact } from '../../../Redux/Ducks/addressReducer';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../Services/Data/Routes';

const EditContactPage = () => {
    const location: any = useLocation()

    const dispatch = useDispatch();
    const history = useHistory();

    const countryList = require('country-list')
    const countries = countryList.getNames();

    const initialValues= {
        firstName: location.state.firstName,
        lastName: location.state.lastName,
        email: location.state.email,
        UserCountries: location.state.countries,
        countries:countries
    };   

    const onSubmit = (values: object) => {
        const id = location.state.id
        dispatch(updateContact(id,values))
            history.push(ROUTES.ALL_CONTACTS)
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Email must be a valid Email").required("Requred"),
        countries: Yup.string().typeError("Please select a country").required("required")
    });
    return (
        <div>
            <h1 className="dynamic_tittle" >Edit Contact</h1>
            <FormFormik 
                initialValues={initialValues}
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
                textButton="Update Contact"
                typeButton="submit" 
                s={initialValues.UserCountries}
            />
        </div>
    );
};

export default EditContactPage;
