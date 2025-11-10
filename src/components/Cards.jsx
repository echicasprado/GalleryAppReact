import Card from "./Card";

const Cards = ({ images }) => {
  if (!images || images.length === 0) {
    return <p style={{ textAlign: "center" }}>No se encontraron imagenes</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
      {images.map((img) => (
        <Card key={img.id} img={img.urls.regular} />
      ))}
    </div>
  );
};

export default Cards;
