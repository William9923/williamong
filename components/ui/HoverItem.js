import React from "react";
export const HoverItemRed = ({ children }) => {
  return (
    <div
      className={`inline-block hover:bg-red-500 rounded-md hover:text-gray-50 transform hover:scale-110 hover:-rotate-3 transition duration-300`}
    >
      {children}
    </div>
  );
};

export const HoverItemGreen = ({ children }) => {
  return (
    <div
      className={`inline-block hover:bg-green-500 rounded-md hover:text-gray-50 transform hover:scale-110 hover:-rotate-3 transition duration-300`}
    >
      {children}
    </div>
  );
};

export const HoverItemBlack = ({ children }) => {
  return (
    <div
      className={`inline-block hover:bg-black rounded-md hover:text-white transform hover:scale-110 hover:-rotate-3 transition duration-300`}
    >
      {children}
    </div>
  );
};

export const HoverItemBlue = ({ children }) => {
  return (
    <div
      className={`inline-block hover:bg-blue-500 rounded-md hover:text-gray-50 transform hover:scale-110 hover:-rotate-3 transition duration-300`}
    >
      {children}
    </div>
  );
};
