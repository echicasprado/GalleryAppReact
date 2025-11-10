import PropTypes from "prop-types";

const Card = ({img}) => {
  return (
    <div
      className="card col m-2"
      style={{
        width: "125rem",
      }}
    >
      <img
        src={img}
        className="card-img-top"
        alt="imagen.png"
      />
    </div>
  );
};

Card.propTypes = {
    img: PropTypes.string.isRequired,
}

export default Card;
