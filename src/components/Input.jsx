import React from 'react'

const Input = ({placeholder}) => {
  return (
    <input
      placeholder={placeholder}
      className="text-white text-1xl outline-white rounded-sm w-full px-6 sm:px-3 py-4 bg-black/50 border border-white/40"
      type="text"
    />
  );
}

export default Input