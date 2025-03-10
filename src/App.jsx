import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import styles from "./App.module.css";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;
    fetchImages(query, page);
  }, [query, page]);

  const fetchImages = async (searchQuery, pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(${API_URL}?client_id=${ACCESS_KEY}, {
        params: { query: searchQuery, page: pageNum, per_page: 12 },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (err) {
      setError("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);
  const openModal = (image) => setModalData(image);
  const closeModal = () => setModalData(null);

  return (
    <div className={styles.App}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalData && <ImageModal image={modalData} onClose={closeModal} />}
    </div>
  );
}

export default App;