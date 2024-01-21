const Button = ({ content, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md text-1xl px-3 py-2  text-white font-bold bg-red-600 hover:bg-red-500 disabled:bg-red-300"
      onFocus={() => {}}
    >
      {content}
    </button>
  );
};

export default Button;
