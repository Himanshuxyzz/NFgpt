import React from 'react'

const Input = ({placeholder,type}) => {
  return (
    <input
      placeholder={placeholder}
      className="text-white text-1xl outline-white rounded-sm w-full px-6 sm:px-3 py-4 bg-neutral-400/50 "
      type={type}
    />
  );
}

export default Input