import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onSearch(text);
    setTimeout(() => setText(''),100);
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full px-4"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full sm:w-72 md:w-96 lg:w-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.4A7.5 7.5 0 1110.5 3a7.5 7.5 0 018.0 8.25z"
          />
        </svg>
        <input
          type="text"
          placeholder="Buscar imagenes..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
