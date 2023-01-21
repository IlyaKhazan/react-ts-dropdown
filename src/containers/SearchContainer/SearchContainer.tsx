import React from "react";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { ILanguage } from "../../types";
import styles from './SearchContainer.module.css'

interface ISearchContainer {
    languages: ILanguage[];
}

export const SearchContainer = ({ languages }: ISearchContainer) => {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        (
            <div className={styles.SearchContainer}>
                <SearchInput setSearchValue={setSearchValue} />
                <Dropdown searchValue={searchValue} languages={languages} />
            </div>)
    )

}