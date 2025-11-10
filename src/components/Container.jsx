import { useState, useEffect, useCallback } from "react";
import { fetchImages } from "../services/unsplash";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

const Container = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const fotos = await fetchImages(query);
      setImages(fotos);
    } catch (err) {
      setError(`Error al cargar imagenes`);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <div className="container border row" style={{ padding: "20px" }}>
      <SearchBar onSearch={setQuery} />
      {loading && <Loading />}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <Cards images={images} />
    </div>
  );
};

export default Container;
