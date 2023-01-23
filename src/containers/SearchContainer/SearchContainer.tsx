import React, { useState } from "react";
import styles from './SearchContainer.module.css'
import { useAppDispatch } from "../../app/hooks";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { ILanguage } from "../../types";
import { revertAll } from "../../containers/dropdownSlice"

interface ISearchContainer {
    languages: ILanguage[];
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
}

export const SearchContainer = ({ languages, isOpened, setIsOpened }: ISearchContainer) => {
    const [searchValue, setSearchValue] = React.useState('');
    const [inputType, setInputType] = useState<'checkbox' | 'single'>('checkbox');
    const [isIcon, setIsIcon] = useState(true);

    const dispatch = useAppDispatch();

    const onTypeChangeHandler = () => {
        dispatch(revertAll())
        inputType === 'checkbox' ? setInputType('single') : setInputType('checkbox')
    }

    const onIconShowHandler = () => {
        setIsIcon(!isIcon)
    }

    return (
        (<>
            <div className={styles.searchContainer}>
                <SearchInput setSearchValue={setSearchValue} />
                <Dropdown searchValue={searchValue} languages={languages} isIcon={isIcon} isOpened={isOpened} setIsOpened={setIsOpened} inputType={inputType} />

            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.extraButton} onClick={onTypeChangeHandler}>Инпуты</button>
                <button className={styles.extraButton} onClick={onIconShowHandler}>Иконки</button>
            </div>
        </>)
    )
}
