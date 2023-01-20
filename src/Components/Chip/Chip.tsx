import React from "react";
import styles from './Chip.module.css'

export const Chip: React.FC = () => {
    return (
        <div className={styles.Chip}>
            <span>lang</span>
            <button className={styles.removeButton}></button>
        </div>
    )
}