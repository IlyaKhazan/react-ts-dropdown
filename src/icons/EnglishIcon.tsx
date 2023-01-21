import React from "react";
export const EnglishIcon: React.FC = () => {

    return (
        <svg width="24" height="24" fill="none">
            <rect width="21" height="15" x="1.5" y="4.5" fill="#fff" rx="2" />
            <mask id="a" width="22" height="16" x="1" y="4" maskUnits="userSpaceOnUse">
                <rect width="21" height="15" x="1.5" y="4.5" fill="#fff" rx="2" />
            </mask>
            <g mask="url(#a)">
                <path fill="#0A17A7" d="M1.5 4.5h21v15h-21z" />
                <path fill="#fff" fillRule="evenodd" d="M6.505 14.5-.58 19.28l1.118 1.657L9.5 14.892V20.5h5v-5.607l8.962 6.044 1.118-1.658-7.085-4.779H22.5v-5h-5.005l7.085-4.78-1.118-1.657L14.5 9.108V3.5h-5v5.608L.538 3.063-.58 4.72 6.505 9.5H1.5v5h5.005Z" clipRule="evenodd" />
                <path stroke="#DB1F35" strokeLinecap="round" strokeWidth=".667" d="M15.501 9.25 25 3M16.51 14.773l8.515 5.74M7.504 9.233l-8.882-5.986M8.468 14.704l-9.846 6.529" />
                <path fill="#E6273E" fillRule="evenodd" d="M1.5 13.5h9v6h3v-6h9v-3h-9v-6h-3v6h-9v3Z" clipRule="evenodd" />
            </g>
        </svg>
    )
}