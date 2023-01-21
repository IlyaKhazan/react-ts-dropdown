import React, { useEffect } from "react";
import styles from './Option.module.css'
import cn from 'classnames';

import { RussianIcon } from "../../icons/RussianIcon";
import { EnglishIcon } from "../../icons/EnglishIcon";
import { SpanishIcon } from "../../icons/SpanishIcon";
import { GermanIcon } from "../../icons/GermanIcon";
import { ItalianIcon } from "../../icons/ItalianIcon";
import { PolishIcon } from "../../icons/PolishIcon";

interface IOption {
    title: string;
    type: 'text' | 'checkbox';
    icon: string;
    id: string;
    checked: boolean;
    onChange: () => void;
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

export const Option: React.FC<IOption> = ({ type, id, icon, title, checked, onChange }) => {

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
            {(type === 'text' ?
                <div className={styles.textInnerWrap} onClick={onChange}>
                    {getIcon(icon)} <span>{title}</span>
                </div> :
                <>
                    {getIcon(icon)}
                    <div className={styles.checkboxInnerWrap}>
                        <label htmlFor={id}>{title}</label>
                        <input
                            type={type}
                            className={checked ? cn(styles.inputCheckbox, styles.inputChecked) : cn(styles.inputCheckbox)}
                            id={id}
                            onChange={onChange}
                            checked={checked} />
                    </div>
                </>
            )
            }
        </li>
    )
}
