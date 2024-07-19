import s from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <div className={s.card}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
