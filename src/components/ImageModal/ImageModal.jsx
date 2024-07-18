import s from "./ImageModal.module.css";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const ImageModal = ({ onClose, children, isOpen }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.content}
        overlayClassName={s.overlay}
        contentLabel="Example Modal"
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default ImageModal;
