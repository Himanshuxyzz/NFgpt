
const Dialog = ({children}) => {
  return (
    <div className="bg-black/50 text-white w-[450px] top-1/2 left-1/2 absolute transform -translate-x-1/2 flex justify-center items-center p-10">
      {children}
    </div>
  );
};

export default Dialog;
