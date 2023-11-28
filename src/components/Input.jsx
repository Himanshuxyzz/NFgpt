import React, { forwardRef } from "react";

const Input = forwardRef(({ placeholder, type, ...props }, ref) => {
  console.log(ref);
  return (
    <input
      placeholder={placeholder}
      className="text-white text-1xl outline-white rounded-sm w-full px-6 sm:px-3 py-4 bg-neutral-700/50"
      type={type}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
