import React, { useCallback } from "react";

const Button = ({ content, onClick }) => {
  const RandomKey = () => Math.floor(Math.random() * 100);
  return (
    <button
      key={RandomKey()}
      onClick={onClick}
      className="rounded-md text-1xl px-3 py-4 w-full text-white font-bold bg-red-600 hover:bg-red-500"
    >
      {content}
    </button>
  );
};

export default Button;
