import React from 'react';
import { Formik, Form } from 'formik';
import Input from '../UI/input';
import Button from '../UI/button';
import Select from '../UI/dropdown';
import '../../Assets/Styles/Form.css'

interface Props {
    initialValues: {
        firstName: string,
        lastName: string,
        email: string,
        UserCountries: string,
        countries?: []
    },
    onSubmit: (values: any ,{resetForm}:any) => void,
    validationSchema?: {},
    name: string,
    name2: string,
    name3: string,
    name4: string,
    name5: string,
    text: string,
    text2: string,
    text3: string,
    text4: string
    type: string,
    type2?: string,
    id: string,
    id2: string,
    id3: string,
    id4: string,
    id5: string,
    textButton: string,
    onClick?: () => void,
    typeButton: "button" | "submit" | "reset" | undefined,
    s: string
};

const FormFormik: React.FC<Props> = ({ initialValues, onSubmit, validationSchema, name, name2, name3, name4, name5, text, text2, text3, text4, type, type2, id, id2, id3, id4, id5, textButton, onClick, typeButton, s }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form className="form">
                <Input name={name} text={text} type={type} id={id} />
                <Input name={name2} text={text2} type={type} id={id2} />
                <Input name={name3} text={text3} type={type} id={id3} />
                <Select options={initialValues.countries} s={initialValues.UserCountries} name={name4} id={id4} text={text4}/>
                <Button className="add_contact_btn" text={textButton} type={typeButton}/>
            </Form>
            
        </Formik>
    );
};

export default FormFormik;
