import React from "react";
import styles from './ChipsContainer.module.css'
import { Chip } from "../../Components/Chip/Chip";


export const ChipsContainer: React.FC = () => {
    return (
        <div className={styles.ChipsContainer}>
            <div className={styles.innerWrap}>
                <Chip /> <Chip /> <Chip /> <Chip />  <Chip />
            </div>
            <button className={styles.DropButton}></button>
        </div>
    )

}