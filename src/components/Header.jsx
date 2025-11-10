const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
          {" "}
          Gallery App
        </h1>
        <nav>
          <ul className="flex space-x-4 text-sm sm:text-base font-medium decoration-none">
            <li>
              <a
                href=""
                className="text-white hover:underline hover:text-blue-200 transition-colors"
                style={{ textDecoration: "none" }}
              >
                Inico
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:underline hover:text-blue-200 transition-colors"
                style={{ textDecoration: "none" }}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:underline hover:text-blue-200 transition-colors"
                style={{ textDecoration: "none" }}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
