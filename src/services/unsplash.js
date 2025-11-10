const API_KEY = "atRqRtKxvOlG7gAA4DSVjbdUMH5Z-KemnelVtSKFur4";

export async function fetchImages(query = "") {
  const url = query
    ? `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&client_id=${API_KEY}`
    : `https://api.unsplash.com/photos?client_id=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) throw new Error("Error en la petici[on");

  const data = await res.json();

  return data.results || data;
}
