import React from 'react';
import { Field, ErrorMessage } from 'formik';

interface PropsI {
    name: string,
    id: string
    options?: string[],
    text: string,
    s: string
};

const Select: React.FC<PropsI> = ({name, id, options, text, s}) => {
    return (
        <div>
        <Field className="dropdown" as="select" name={name} id={id}  >
            { options && options.map((option: string,i) => {
                return (
                    <option className="dropdown-content" value={option} key={i}>{option}</option>
                );
            })}
                {text}
        </Field>
        <ErrorMessage name={name} />
        </div>
    );
};

export default Select;
