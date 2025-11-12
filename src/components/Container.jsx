import { useImages } from "../hooks/useImages";
import Cards from "./Cards";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

const Container = () => {

  const { images, loading, error, setQuery } = useImages();

  return (
    <section className="container border row" style={{ padding: "20px" }}>
      <SearchBar onSearch={setQuery} />
      {loading && <Loading />}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {!loading && !error && (
        <div className="w-full mt-6">
          <Cards images={images} />
        </div>
      )}
    </section>
  );
};

export default Container;
