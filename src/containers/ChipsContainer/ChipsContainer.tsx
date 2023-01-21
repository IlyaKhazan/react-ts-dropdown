import React, { useState } from "react";
import styles from './ChipsContainer.module.css'
import cn from "classnames";
import { Chip } from "../../components/Chip/Chip";
import { DropIcon } from "../../icons/DropIcon";
import { ILanguage } from "../../types";
import { chipRemoved } from "../../containers/dropdownSlice"
import { useAppDispatch } from "../../app/hooks";

export const ChipsContainer: React.FC<any> = ({ isOpened, setIsOpened, chips }) => {


    const handleDropButton = () => {
        setIsOpened((prev: any) => !prev)
    }

    const dispatch = useAppDispatch()
    const handleRemoveButton = (obj: ILanguage) => {
        console.log('obj')
        dispatch(chipRemoved(obj))
    }


    return (
        <div className={styles.ChipsContainer}>
            <div className={styles.innerWrap}>
                {chips.map((chip: ILanguage) => <Chip text={chip.title} onClick={() => handleRemoveButton(chip)} />)}
            </div>
            <button className={isOpened ? cn(styles.DropButton, styles.DropButtonOpened) : cn(styles.DropButton)} onClick={handleDropButton} ><DropIcon /></button>
        </div>
    )

}