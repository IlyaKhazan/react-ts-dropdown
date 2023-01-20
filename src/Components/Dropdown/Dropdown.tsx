import React from "react";
import styles from './Dropdown.module.css'
import { Option } from "../Option/Option";
import { data } from "../../data";
import { IOption } from "../../types";


export const Dropdown: React.FC = () => {
    return (
        <ul className={styles.Dropdown}>
            {data.map((option: IOption) => <Option key={option.id} type='checkbox' title={option.title} />)}
        </ul>
    )

}