import React from "react";
export const RussianIcon: React.FC = () => {

    return (
        <svg width="24" height="24" fill="none">
            <rect width="21" height="15" x="1.5" y="4.5" fill="#F5F5F5" rx="2" />
            <mask id="a" width="22" height="16" x="1" y="4" maskUnits="userSpaceOnUse">
                <rect width="20.5" height="14.5" x="1.75" y="4.75" fill="#fff" stroke="#fff" strokeWidth=".5" rx="1.75" />
            </mask>
            <g fillRule="evenodd" clipRule="evenodd" mask="url(#a)">
                <path fill="#0C47B7" d="M1.5 14.5h21v-5h-21v5Z" />
                <path fill="#E53B35" d="M1.5 19.5h21v-5h-21v5Z" />
            </g>
        </svg>
    )
}