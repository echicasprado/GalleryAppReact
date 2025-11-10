import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <form
      className="col w-100"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "0.5rem",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Buscar imagenes..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
