import React from "react";
export const ItalianIcon: React.FC = () => {

    return (
        <svg width="24" height="24" fill="none">
            <rect width="20.5" height="14.5" x="1.75" y="4.75" fill="#fff" stroke="#F5F5F5" strokeWidth=".5" rx="1.75" />
            <mask id="a" width="22" height="16" x="1" y="4" maskUnits="userSpaceOnUse">
                <rect width="20.5" height="14.5" x="1.75" y="4.75" fill="#fff" stroke="#fff" strokeWidth=".5" rx="1.75" />
            </mask>
            <g mask="url(#a)">
                <path fill="#E43D4C" d="M15.5 4.5h7v15h-7z" />
                <path fill="#1BB65D" fillRule="evenodd" d="M1.5 19.5h7v-15h-7v15Z" clipRule="evenodd" />
            </g>
        </svg>
    )
}