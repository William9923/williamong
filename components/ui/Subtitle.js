import React from 'react';

export default function Subtitle ({ title, children }) {
    return (
        <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900">
            {children}
        </h3>
    );
};