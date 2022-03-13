import React from 'react';

export default function Pinger() {
    return (
        <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
            <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
        </div>
    )
}