import React, { useState } from "react";
import styles from './Dropdown.module.css'
import { Option } from "../Option/Option";
import { ILanguage } from "../../types";
import { useAppDispatch } from "../../app/hooks";
import { languageChecked } from "../../containers/dropdownSlice"

export const Dropdown: React.FC<any> = ({ languages, searchValue }) => {


    const dispatch = useAppDispatch()
    const filteredLanguages = languages.filter((option: any) => option.title.toLowerCase().includes(searchValue.toLowerCase()))

    //const [isChecked, setIsChecked] = useState(false)

    const onChangeHandler = (obj: ILanguage) => {
        console.log(obj, 'dispatch')
        dispatch(languageChecked(obj))
    }

    return (
        <ul className={styles.Dropdown}>
            {filteredLanguages.map((option: ILanguage) =>
                <Option id={option.id} icon={option.id} title={option.title} checked={option.checked} type='checkbox' onChange={() => onChangeHandler(option)} />)}
        </ul>
    )

}