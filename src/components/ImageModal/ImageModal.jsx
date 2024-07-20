import s from "./ImageModal.module.css";
import ReactModal from "react-modal";
const ImageModal = ({ onClose, isOpen, data }) => {
  if (!isOpen) return null;

  const {
    alt_description,
    likes,
    urls: { regular },
    user: { name },
  } = data;

  return (
    <div className={s.wrapper}>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={s.content}
        overlayClassName={s.overlay}
        contentLabel="Image Modal"
      >
        <img src={regular} alt={alt_description} />
        <div className={s.descriptionWrapper}>
          <p className={s.description}>Author: {name}</p>
          <p className={s.description}>Likes: {likes}</p>
          <p className={s.description}>
            Description: <span className={s.span}>{alt_description}</span>
          </p>
        </div>
      </ReactModal>
    </div>
  );
};

export default ImageModal;
