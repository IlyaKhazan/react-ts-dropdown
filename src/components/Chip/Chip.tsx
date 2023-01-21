import React from "react";
import { RemoveIcon } from "../../icons/RemoveIcon";
import styles from './Chip.module.css'

interface IChip {
    text: string;
    onClick: () => void;
}

export const Chip: React.FC<IChip> = ({ text, onClick }) => {

    return (
        <div className={styles.Chip}>
            <span>{text}</span>
            <button className={styles.removeButton} onClick={onClick} value={text}>
                <RemoveIcon />
            </button>
        </div>
    )
}