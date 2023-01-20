import React from "react";
import { Dropdown } from "../Components/Dropdown/Dropdown";
import { SearchInput } from "../Components/SearchInput/SearchInput";


export const SearchContainer: React.FC = () => {
    return (
        <div>
            <SearchInput />
            <Dropdown />
        </div>
    )

}