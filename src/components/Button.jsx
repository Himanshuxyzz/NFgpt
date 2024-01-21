import { cn } from "../utils/utils";

const Button = ({ content, className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded-md text-1xl px-3 py-2 text-white font-bold bg-red-600 hover:bg-red-500 disabled:bg-red-300",
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
