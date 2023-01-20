import React from "react";
import { Option } from "../Option/Option";
import { data } from "../../data";
import { IOption } from "../../types";

export const Dropdown: React.FC = () => {
    return (
        <ul>
            {data.map((option: IOption) => <Option key={option.id} type='checkbox' title={option.title} />)}
        </ul>
    )

}