const Button = ({ content, onClick, isDisabled }) => {
  // console.log(isDisabled);
  return (
    <button
      onClick={onClick}
      className="rounded-md text-1xl px-3 py-4 w-full text-white font-bold bg-red-600 hover:bg-red-500"
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default Button;
