import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImagesWithSearch from "../images-api";
import "./App.css";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") return;
      setIsLoading(true);
      setError(false);
      setNotFound(false);
      try {
        const data = await fetchImagesWithSearch(query, page);
        if (data.results.length === 0) {
          setNotFound(true);
        } else {
          setImages((prev) => [...prev, ...data.results]);
          setTotal(data.total_pages);
        }
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />
      {images.length > 0 && <ImageGallery items={images} />}
      {isLoading && <Loader />}
      {(error || notFound) && <ErrorMessage />}
      {total > page && !isLoading && <LoadMoreBtn handleClick={handleClick} />}
      <ImageModal />
    </>
  );
}

export default App;

// (images.length > 0 || loadMore) &&
