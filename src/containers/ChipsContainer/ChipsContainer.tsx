import React, { useState } from "react";
import styles from './ChipsContainer.module.css'
import cn from "classnames";
import { Chip } from "../../components/Chip/Chip";
import { DropIcon } from "../../icons/DropIcon";
import { ILanguage } from "../../types";
import { chipRemoved } from "../../containers/dropdownSlice"
import { useAppDispatch } from "../../app/hooks";

interface IChipsContainer {
    isOpened: boolean;
    setIsOpened: (isOpened: boolean) => void;
    chips: ILanguage[];
}

export const ChipsContainer: React.FC<IChipsContainer> = ({ isOpened, setIsOpened, chips }) => {

    const handleDropButton = () => {
        setIsOpened(!isOpened)
    }

    const dispatch = useAppDispatch()
    const handleRemoveButton = (obj: ILanguage) => {
        dispatch(chipRemoved(obj))
    }

    return (
        <div className={styles.ChipsContainer}>
            <div className={styles.innerWrap}>
                {chips.map((chip: ILanguage) => <Chip key={chip.id} text={chip.title} onClick={() => handleRemoveButton(chip)} />)}
            </div>
            <button className={isOpened ? cn(styles.DropButton, styles.DropButtonOpened) : cn(styles.DropButton)} onClick={handleDropButton} ><DropIcon /></button>
        </div>
    )
}