import React from "react";

interface Props {
    text: string,
    onClick?: () => void,
    type: "button" | "submit" | "reset" | undefined
    className: string
};


const Button: React.FC<Props> = ({text, onClick, type, className}) => {
    return (
        <button
        className={className}
        onClick={onClick}
        type={type}
        >
            {text}
        </button>
    );
};

export default Button;
