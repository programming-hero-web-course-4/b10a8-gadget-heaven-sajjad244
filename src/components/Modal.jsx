import React, {useRef, useEffect} from "react";

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
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations!</h3>
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
