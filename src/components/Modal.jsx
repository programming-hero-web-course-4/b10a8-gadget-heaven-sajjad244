import React, {useRef, useEffect} from "react";
import logo from "../assets/Group.png";

const Modal = ({isOpen, onClose}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);
  return (
    <div>
      {/* Pass ref to the dialog element */}
      <dialog ref={dialogRef} className="modal text-center">
        <div className="modal-box ">
          <h3 className="font-bold text-lg mt">Congratulations!</h3>
          <div className="w-[40px] h-[40px] mt-5 mx-auto">
            <img src={logo} alt="" />
          </div>
          <p className="py-4">You have successfully completed your purchase</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={onClose}>
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
