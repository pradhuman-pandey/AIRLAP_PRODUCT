export default function Http404() {
    return (
      <section className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">
            404 Error - Page Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The page you are looking for might have been removed or does not
            exist.
          </p>
          <a
            href="/"
            className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block"
          >
            Go Back to Home
          </a>
        </div>
      </section>
    );
  }
  