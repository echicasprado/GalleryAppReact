const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3">
          <p className="text-gray-700 text-lg font-medium">
            Cargando imagenes...
          </p>
          ;
        </div>
      </div>
    </div>
  );
};
export default Loading;
