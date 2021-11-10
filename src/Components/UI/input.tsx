import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import '../../Assets/Styles/Form.css';

export interface PropsInput {
    name: string,
    text: string,
    type?: string,
    id: string,
    as?: string| React.ComponentType<FieldProps['field']>
    options?: []
};

const Input: React.FC<PropsInput> = ({ name, text, type, id, as, options }) => {
    return (
            <div className="label_and_field_and_error">
                <div className="label_and_field">
                <label className="label" htmlFor={name}>{text}</label>
                <Field
                    type={type}
                    id={name}
                    name={name}
                    as={as}
                    className="field"
                />
                </div>
                <ErrorMessage className="error_message" name={name} />
            </div>
    );
};

export default Input;
