function BookCard({ book, onRemove }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Book Cover */}
      <div className="relative flex justify-center bg-slate-50 py-5">

        <img
          src={book.cover}
          alt={book.title}
          className="h-64 w-44 object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
        />

      </div>

      {/* Details */}
      <div className="p-5">
        <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">
          {book.title}
        </h2>
        <span className="flex items-center gap-1 text-sm font-medium text-amber-500">
        <i className="fa-regular fa-star"></i>
        {book.rating}
        </span>

      </div>

        {/* Author */}
        <p className="mt-1 text-sm italic text-slate-500">
          by {book.author}
        </p>

        {/* Category */}
        <p className="mt-4 text-sm font-medium uppercase tracking-wide text-sky-600">
          {book.category}
        </p>

        {/* Price */}
        <p className="mt-3 text-lg font-semibold text-slate-800">
          रु {book.price.toLocaleString("en-IN")}
        </p>

        {/* Button */}
        <button
          onClick={() => onRemove(book.id)}
          className="mt-5 w-full border-2 border-sky-500 bg-white py-2 text-sm font-semibold tracking-wide text-sky-500 transition-all duration-300 hover:bg-sky-500 hover:text-white"
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default BookCard;