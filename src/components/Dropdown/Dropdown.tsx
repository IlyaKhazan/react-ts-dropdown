import React, { useState } from "react";
import styles from './Dropdown.module.css'
import { Option } from "../Option/Option";
import { ILanguage } from "../../types";
import { useAppDispatch } from "../../app/hooks";
import { languageChecked } from "../../containers/dropdownSlice"

interface IDropdown {
    searchValue: string;
    languages: ILanguage[];
}

export const Dropdown: React.FC<IDropdown> = ({ languages, searchValue }) => {

    const dispatch = useAppDispatch()
    const filteredLanguages = languages.filter((option) => option.title.toLowerCase().includes(searchValue.toLowerCase()))

    const onChangeHandler = (obj: ILanguage) => {
        dispatch(languageChecked(obj))
    }

    return (
        <ul className={styles.Dropdown}>
            {filteredLanguages.map((option) =>
                <Option key={option.id} id={option.id} icon={option.id} title={option.title} checked={option.checked} type='checkbox' onChange={() => onChangeHandler(option)} />)}
        </ul>
    )
}