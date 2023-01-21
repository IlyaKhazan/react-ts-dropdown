import React from "react";
import styles from './SearchContainer.module.css'
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { ILanguage } from "../../types";

interface ISearchContainer {
    languages: ILanguage[];
}

export const SearchContainer = ({ languages }: ISearchContainer) => {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        (
            <div className={styles.searchContainer}>
                <SearchInput setSearchValue={setSearchValue} />
                <Dropdown searchValue={searchValue} languages={languages} />
            </div>)
    )
}
