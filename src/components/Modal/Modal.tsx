import { ReactNode } from "react";

export interface IModal {
  children: ReactNode
  onClick: () => void
}
const Modal = ({ children, onClick }: IModal) => {
  return (
    <div className="modal full flex center">
      <div className="full flex">
        <button onClick={onClick}>
          &#10006;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
