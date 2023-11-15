import { X } from "lucide-react";
const Dialog = ({ children,handler }) => {
  return (
    <div className="rounded-md bg-black/90 text-white w-[450px] top-[30%] left-1/2 absolute transform -translate-x-1/2 flex flex-col justify-center items-center p-10 transition ease-in-out">
      <div className="flex justify-end w-full mb-2">
        <X onClick={handler} className="w-8 h-8 hover:bg-red-600 rounded"/>
      </div>
      {children}
    </div>
  );
};

export default Dialog;
