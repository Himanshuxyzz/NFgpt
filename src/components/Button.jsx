import React from "react";

const Button = ({content,onClick}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md text-1xl px-3 py-4 w-full text-white font-bold bg-red-600"
    >
      {content}
    </button>
  );
};

export default Button;
