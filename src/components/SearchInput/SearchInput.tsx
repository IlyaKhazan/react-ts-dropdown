import React from "react";
import styles from './SearchInput.module.css'
import { SearchIcon } from "../../icons/SearchIcon";

export const SearchInput: React.FC<any> = ({ setSearchValue }) => {
    const onSearchChange = (evt: any) => {
        setSearchValue(evt.target.value);
    };
    return (
        <div className={styles.SearchInput}>
            <SearchIcon />
            <input className={styles.searchTextField} onChange={onSearchChange} type="text" placeholder="Поиск" />
        </div>
    )

}