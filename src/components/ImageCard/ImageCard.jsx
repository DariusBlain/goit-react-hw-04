import s from "./ImageCard.module.css";

const ImageCard = ({
  items: {
    alt_description,
    urls: { small, regular },
  },
}) => {
  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
};

export default ImageCard;
