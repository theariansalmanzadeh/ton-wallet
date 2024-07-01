const SetAddress = ({ setIsModal }: { setIsModal: (val: boolean) => void }) => {
  return (
    <button
      className="bg-slate-700 text-sky-500 hover:text-sky-400 transition duration-200 py-[10px] px-[20px] mt-10 rounded-full"
      onClick={() => setIsModal(true)}
    >
      Set Your Address
    </button>
  );
};

export default SetAddress;
