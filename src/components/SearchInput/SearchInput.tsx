import React from "react";
import styles from './SearchInput.module.css'
import { SearchIcon } from "../UI/icons/SearchIcon";

interface SearchInput {
    setSearchValue: (evt: string) => void
}

export const SearchInput: React.FC<SearchInput> = ({ setSearchValue }) => {

    const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(evt.target.value);
    };

    return (
        <div className={styles.searchInput}>
            <SearchIcon />
            <input className={styles.searchTextField} onChange={onSearchChange} type="text" placeholder="Поиск" />
        </div>
    )

}