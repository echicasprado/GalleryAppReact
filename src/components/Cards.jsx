import Card from "./Card";

const Cards = ({ images }) => {
  if (!images || images.length === 0) {
    return <p style={{ textAlign: "center" }}>No se encontraron imagenes</p>;
  }

  return (
    <div className="row">
      {images.map((img) => (
        <Card key={img.id} img={img.urls.regular} />
      ))}
    </div>
  );
};

export default Cards;
