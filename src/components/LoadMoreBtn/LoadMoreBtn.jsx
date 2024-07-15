const LoadMoreBtn = ({ handleClick }) => {
  return (
    <>
      <button onClick={() => handleClick()} type="button">
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
