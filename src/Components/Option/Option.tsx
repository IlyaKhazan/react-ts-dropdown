import React from "react";
import { IOptionProps } from "../../types";

export const Option: React.FC<IOptionProps> = ({ title, type }) => {
    return (
        <li>
            {(type === 'text' ? <span>{title}</span> :
                <>
                    <label htmlFor={title}>{title}</label>
                    <input type="checkbox" id={title} />
                </>)


            }
        </li>

    )
}