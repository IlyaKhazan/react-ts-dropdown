import React from "react";

import { RemoveIcon } from "../../icons/RemoveIcon";

import styles from './Chip.module.css'

export const Chip: React.FC<any> = ({ text, onClick }) => {


    return (
        <div className={styles.Chip}>
            <span>{text}</span>
            <button className={styles.removeButton} onClick={onClick} value={text}>
                <RemoveIcon />
            </button>
        </div>
    )
}