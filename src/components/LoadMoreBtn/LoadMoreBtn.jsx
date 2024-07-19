import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <>
      <button
        className={s.loadMoreBtn}
        onClick={() => handleClick()}
        type="button"
      >
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
