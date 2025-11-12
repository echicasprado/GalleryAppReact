import { useState, useEffect, useCallback } from "react";
import { fetchImages } from "../services/unsplash";

export function useImages(initQyery = "") {
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

    return() => {
      console.log('Limpiando el useEffect');
    }
  }, [getImages]);

  return { images, loading, error, query, setQuery, getImages };
}
