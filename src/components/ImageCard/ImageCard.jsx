import s from "./ImageCard.module.css";

const ImageCard = ({ item, handleClickImage }) => {
  return (
    <div className={s.card}>
      <img
        onClick={() => handleClickImage(item)}
        src={item.urls.small}
        alt={item.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
