import s from "./ImageModal.module.css";
import ReactModal from "react-modal";
// Modal.setAppElement("#yourAppElement");
ReactModal.setAppElement("#root");

console.log(ReactModal.defaultStyles);

const ImageModal = () => {
  return (
    <div>
      {/* <div className={s.content}> */}

      <ReactModal
        isOpen={true}
        // className={s.content}
        // isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // className={s.content}
        overlayClassName={s.overlay}
        contentLabel="Example Modal"
      >
        <img
          src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZCSmCzmIPm0up8wmW566cK5w3sSTUChT5UnaU3VnFxrHwoRNSnks0xUBmj2r2oeJk"
          alt=""
          width="200"
        />
      </ReactModal>
      {/* </div> */}
    </div>
  );
};

export default ImageModal;
