import React from "react";
import styles from './Chip.module.css'
import { RemoveIcon } from "../UI/icons/RemoveIcon";

interface IChip {
    text: string;
    onClick: () => void;
}

export const Chip: React.FC<IChip> = ({ text, onClick }) => {

    return (
        <div className={styles.chip}>
            <span>{text}</span>
            <button className={styles.removeButton} onClick={onClick} value={text}>
                <RemoveIcon />
            </button>
        </div>
    )
}