import React from "react";
import { IOptionProps } from "../../types";
import styles from './Option.module.css'

export const Option: React.FC<IOptionProps> = ({ title, type }) => {
    return (
        <li className={styles.option}>
            {(type === 'text' ? <span>{title}</span> :
                <>
                    <label htmlFor={title}>{title}</label>
                    <input type="checkbox" id={title} />
                </>)


            }
        </li>

    )
}