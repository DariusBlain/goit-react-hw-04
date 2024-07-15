import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImagesWithSearch from "../images-api";
import "./App.css";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

function App() {
  const pageLim = 10;
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (query === "") return;
      setLoading(true);
      setImages([]);
      setError(false);
      setNotFound(false);
      try {
        const data = await fetchImagesWithSearch(query, 1, pageLim);
        if (data.length === 0) {
          setNotFound(true);
        } else {
          setImages(data);
          setLoadMore(data.length === pageLim);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    const fetchMoreImages = async () => {
      if (page === 1 || query === "") return;
      setLoading(true);
      try {
        const newImages = await fetchImagesWithSearch(query, page, pageLim);
        setImages((prevImages) => [...prevImages, ...newImages]);
        setLoadMore(newImages.length === pageLim);
      } catch (error) {
        setError(true);
        setLoadMore(false);
      } finally {
        setLoading(false);
      }
    };

    fetchMoreImages();
  }, [page]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
      {loading && <Loader />}
      {(error || notFound) && <ErrorMessage />}
      {(images.length > 0 || loadMore) && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </>
  );
}

export default App;
