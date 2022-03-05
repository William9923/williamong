import React from "react";
export const HoverItem = ({ color, children }) => {

    return (
        <div className={`inline-block hover:bg-${color}-500 rounded-md hover:text-gray-50 transform hover:scale-110 hover:-rotate-3 transition duration-300`}>
            {children}
        </div>
    );
};
