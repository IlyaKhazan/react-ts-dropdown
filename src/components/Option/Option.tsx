import React from "react";
import styles from './Option.module.css'
import cn from 'classnames';

import { RussianIcon } from "../UI/icons/RussianIcon";
import { EnglishIcon } from "../UI/icons/EnglishIcon";
import { SpanishIcon } from "../UI/icons/SpanishIcon";
import { GermanIcon } from "../UI/icons/GermanIcon";
import { ItalianIcon } from "../UI/icons/ItalianIcon";
import { PolishIcon } from "../UI/icons/PolishIcon";

interface IOption {
    inputType: string;
    title: string;
    icon: string;
    id: string;
    checked: boolean;
    onInputClick: () => void;
}

const enum IconVariant {
    RUSSIAN = 'russian',
    ENGLISH = 'english',
    SPANISH = 'spanish',
    GERMAN = 'german',
    ITALIAN = 'italian',
    POLISH = 'polish',
    NONE = 'none'
};

export const Option: React.FC<IOption> = ({ id, icon, title, checked, onInputClick, inputType }) => {

    const getIcon = (variant: string) => {
        switch (icon) {
            case IconVariant.RUSSIAN:
                return <RussianIcon />;
            case IconVariant.ENGLISH:
                return <EnglishIcon />;
            case IconVariant.SPANISH:
                return <SpanishIcon />;
            case IconVariant.GERMAN:
                return <GermanIcon />;
            case IconVariant.ITALIAN:
                return <ItalianIcon />;
            case IconVariant.POLISH:
                return <PolishIcon />;
            case IconVariant.NONE:
                return null
        };
    }

    return (
        <li className={styles.option}>
            {(inputType === 'single' ?
                <div className={styles.textInnerWrap} onClick={onInputClick}>
                    {getIcon(icon)} <span>{title}</span>
                </div> :
                <>
                    {getIcon(icon)}
                    <div className={styles.checkboxInnerWrap}>
                        <label className={styles.labelCheckbox} htmlFor={id}>{title}</label>
                        <input
                            type={inputType}
                            className={checked ? cn(styles.inputCheckbox, styles.inputChecked) : cn(styles.inputCheckbox)}
                            id={id}
                            onChange={onInputClick}
                            checked={checked} />
                    </div>
                </>
            )
            }
        </li>
    )
}
