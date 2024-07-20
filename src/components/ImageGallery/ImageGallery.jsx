import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, handleClickImage, lastImageRef }) => {
  return (
    <ul className={s.gallery}>
      {items.map((item, index) => {
        const isLastImage = index === items.length - 1;
        return (
          <li
            key={item.id}
            className={s.item}
            ref={isLastImage ? lastImageRef : null}
          >
            <ImageCard item={item} handleClickImage={handleClickImage} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
