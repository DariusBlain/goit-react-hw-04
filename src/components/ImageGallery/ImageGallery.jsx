import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <>
      <ul className={s.gallery}>
        {items.map((item) => {
          return (
            <li key={item.id} className={s.item}>
              <ImageCard items={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
