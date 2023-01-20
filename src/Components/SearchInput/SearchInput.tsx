import React from "react";
import styles from './SearchInput.module.css'


export const SearchInput: React.FC = () => {
    return (
        <input className={styles.SearchInput} type="text" />
    )

}