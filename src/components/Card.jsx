import PropTypes from "prop-types";

const Card = ({img}) => {
  return (
    <div
      className="card rounded-lg overflow-hidden shadow-md"
    >
      <img
        src={img}
        alt="imagen.png"
        className="w-full aspect-[4/3] object-cover"
      />
    </div>
  );
};

Card.propTypes = {
    img: PropTypes.string.isRequired,
}

export default Card;
