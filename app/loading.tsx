const LoadingPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="p-8 rounded-2xl shadow-2xl border border-blue-800 w-3/4 max-w-md text-center">
        <h1 className="text-lg sm:text-2xl font-bold mb-4 animate-pulse">
          Loading your adventure...
        </h1>
        <div className="flex justify-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
