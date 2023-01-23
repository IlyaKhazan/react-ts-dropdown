import React, { useState } from "react";
import styles from './Dropdown.module.css'
import { Option } from "../Option/Option";
import { ILanguage } from "../../types";
import { useAppDispatch } from "../../app/hooks";
import { multiChecked, singleChecked } from "../../containers/dropdownSlice"

interface IDropdown {
    inputType: "single" | "checkbox";
    searchValue: string;
    languages: ILanguage[];
    isOpened: boolean;
    isIcon: boolean;
    setIsOpened: (isOpened: boolean) => void;
}

export const Dropdown: React.FC<IDropdown> = ({ isIcon, inputType, languages, searchValue, isOpened, setIsOpened }) => {

    const dispatch = useAppDispatch()
    const filteredLanguages = languages.filter((option) => option.title.toLowerCase().includes(searchValue.toLowerCase()))

    const onInputClickHandler = (obj: ILanguage) => {
        if (inputType === "checkbox") { dispatch(multiChecked(obj)) }
        else {
            dispatch(singleChecked(obj))
        }
    }

    return (
        <ul className={styles.dropdown}>
            {filteredLanguages.map((option) =>
                <Option
                    key={option.id}
                    id={option.id}
                    icon={isIcon ? option.id : 'none'}
                    title={option.title}
                    checked={option.checked}
                    inputType={inputType}
                    onInputClick={() => onInputClickHandler(option)}
                />)}
        </ul>
    )
}