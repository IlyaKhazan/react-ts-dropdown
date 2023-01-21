import React from "react";
export const GermanIcon: React.FC = () => {

    return (
        <svg width="24" height="24" fill="none">
            <rect width="21" height="15" x="1.5" y="4.5" fill="#fff" rx="2" />
            <mask id="a" width="22" height="16" x="1" y="4" maskUnits="userSpaceOnUse">
                <rect width="21" height="15" x="1.5" y="4.5" fill="#fff" rx="2" />
            </mask>
            <g mask="url(#a)">
                <path fill="#262626" fillRule="evenodd" d="M1.5 9.5h21v-5h-21v5Z" clipRule="evenodd" />
                <g filter="url(#b)">
                    <path fill="#F01515" fillRule="evenodd" d="M1.5 14.5h21v-5h-21v5Z" clipRule="evenodd" />
                </g>
                <g filter="url(#c)">
                    <path fill="#FFD521" fillRule="evenodd" d="M1.5 19.5h21v-5h-21v5Z" clipRule="evenodd" />
                </g>
            </g>
            <defs>
                <filter id="b" width="21" height="5" x="1.5" y="9.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1054_225" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1054_225" result="shape" />
                </filter>
                <filter id="c" width="21" height="5" x="1.5" y="14.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1054_225" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1054_225" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}