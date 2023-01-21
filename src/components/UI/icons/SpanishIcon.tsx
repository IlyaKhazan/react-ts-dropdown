import React from "react";
export const SpanishIcon: React.FC = () => {

    return (
        <svg width="24" height="24" fill="none">
            <rect width="21" height="15" x="1.5" y="4.5" fill="#fff" rx="2" />
            <mask id="a" width="22" height="16" x="1" y="4" maskUnits="userSpaceOnUse">
                <rect width="21" height="15" x="1.5" y="4.5" fill="#fff" rx="2" />
            </mask>
            <g mask="url(#a)">
                <path fill="#DD172C" fillRule="evenodd" d="M1.5 8.5h21v-4h-21v4ZM1.5 19.5h21v-4h-21v4Z" clipRule="evenodd" />
                <path fill="#FFD133" fillRule="evenodd" d="M1.5 15.5h21v-7h-21v7Z" clipRule="evenodd" />
                <path fill="#FFEDB1" fillRule="evenodd" d="M7 11.5h1v.5H7v-.5Z" clipRule="evenodd" />
                <path stroke="#A41517" strokeWidth=".667" d="M6.142 11.694a.333.333 0 0 1 .333-.36h1.05c.195 0 .349.166.333.36l-.107 1.282a.753.753 0 0 1-1.502 0l-.107-1.282Z" />
                <path fill="#A41517" fillRule="evenodd" d="M6 12h2v.5h-.5l-.5 1-.5-1H6V12Z" clipRule="evenodd" />
                <rect width="1" height="3.5" x="4.5" y="10.5" fill="#A41517" rx=".5" />
                <rect width="1" height="3.5" x="8.5" y="10.5" fill="#A41517" rx=".5" />
                <path fill="#A41517" d="M6 10.3a.8.8 0 0 1 .8-.8h.4a.8.8 0 0 1 .8.8.2.2 0 0 1-.2.2H6.2a.2.2 0 0 1-.2-.2Z" />
            </g>
        </svg>
    )
}