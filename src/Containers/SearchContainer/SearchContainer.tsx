import React from "react";
import { Dropdown } from "../../Components/Dropdown/Dropdown";
import { SearchInput } from "../../Components/SearchInput/SearchInput";
import styles from './SearchContainer.module.css'

export const SearchContainer: React.FC = () => {
    return (
        <div className={styles.SearchContainer}>
            <SearchInput />
            <Dropdown />
        </div>
    )

}