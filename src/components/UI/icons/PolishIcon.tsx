import React from "react";
export const PolishIcon: React.FC = () => {

    return (
        <svg width="24" height="24" fill="none">
            <rect width="21" height="15" x="1.5" y="4.5" fill="#F5F5F5" rx="2" />
            <mask id="a" width="22" height="16" x="1" y="4" maskUnits="userSpaceOnUse">
                <rect width="20.5" height="14.5" x="1.75" y="4.75" fill="#fff" stroke="#fff" strokeWidth=".5" rx="1.75" />
            </mask>
            <g mask="url(#a)">
                <path fill="#EB2A50" fillRule="evenodd" d="M1.5 19.5h21v-8h-21v8Z" clipRule="evenodd" />
            </g>
        </svg>
    )
}