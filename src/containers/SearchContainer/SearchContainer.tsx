import React from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import styles from './SearchContainer.module.css'

export const SearchContainer: React.FC<any> = ({ isOpened, languages }) => {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        isOpened && (
            <div className={styles.SearchContainer}>
                <SearchInput setSearchValue={setSearchValue} />
                <Dropdown searchValue={searchValue} languages={languages} />
            </div>)
    )

}