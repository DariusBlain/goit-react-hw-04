import s from "./ImageModal.module.css";
import ReactModal from "react-modal";

const ImageModal = ({ onClose, children, isOpen }) => {
  return (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.content}
        overlayClassName={s.overlay}
        contentLabel="Image Modal"
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default ImageModal;
