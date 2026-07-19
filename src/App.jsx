import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const defaultBooks = [
      {
      id: 1,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937910149%2F9789937910149-6501_pag2jVs.webp&w=1920&q=75",
      title: "Jeevan Kada Ki Phool",
      author: "Jhamak Kumari Ghimire",
      category: "Autobiography",
      price: 699,
      rating: 4.7,
    },
    {
      id: 2,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937753753%2F9789937753753-3325.webp&w=1920&q=75",
      title: "Ashra",
      author: "Balen",
      category: "Poetry and Prose",
      price: 699,
      rating: 4.6,
    },
    {
      id: 3,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9781408725764%2F9781408725764-7277.webp&w=1920&q=75",
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      category: "Adult and Fiction",
      price: 958,
      rating: 5.0,
    },
    {
      id: 4,
      cover: "https://static-01.daraz.com.np/p/mdc/82eed69ee678904a6c4b3831c11bf5fd.jpg",
      title: "Chanakya",
      author: "Roshan Dahal",
      category: "Nepali Literature",
      price: 999,
      rating: 4.9,
    },
    {
      id: 5,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937746823%2F9789937746823-9196.webp&w=1920&q=75",
      title: "Ijoria",
      author: "Subin Bhattarai",
      category: "Nepali Literature",
      price: 748,
      rating: 5.0,
    },
    {
      id: 6,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9780008339159%2Fimage.webp&w=1920&q=75",
      title: "The Burning God",
      author: "R. F. Kuang",
      category: "Adult and Fiction",
      price: 1158,
      rating: 4.6,
    },
    {
      id: 7,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9781785037719%2Fimage.jpeg&w=1920&q=75",
      title: "No Spin",
      author: "Shane Warne",
      category: "Autobiography",
      price: 6900,
      rating: 4.6,
    },
    {
      id: 8,
      cover: "https://booksmandala.com/_next/image?url=https%3A%2F%2Fbooks.bizmandala.com%2Fmedia%2Fbooks%2F9789937950039%2F9789937950039-5706.webp&w=1920&q=75",
      title: "Kainchi",
      author: "Harisharan Pariyar",
      category: "Poetry and Prose",
      price: 335,
      rating: 4.6,
    },
    {
      id: 9,
      cover: "https://static-01.daraz.com.np/p/574e0fbc6db77a004cc7cf9807e51b1b.jpg",
      title: "Karnali Blues",
      author: "Buddhisagar",
      category: "Nepali Literature",
      price: 795,
      rating: 4.9,
    },
    {
      id: 10,
      cover: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
      title: "Becoming",
      author: "Michelle Obama",
      category: "Autobiography",
      price: 1499,
      rating: 4.9,
    },
    {
      id: 11,
      cover: "https://static-01.daraz.com.np/original/d19002245a8c30522312074e279a7f21.jpg",
      title: "Milk and Honey",
      author: "Rupi Kaur",
      category: "Poetry and Prose",
      price: 899,
      rating: 4.7,
    },
    {
      id: 12,
      cover: "https://static-01.daraz.com.np/p/bb677893da96ac459d8f605fe3ab4125.jpg",
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Adult and Fiction",
      price: 899,
      rating: 4.8,
    },
    {
      id: 13,
      cover: "https://upload.wikimedia.org/wikipedia/en/1/19/Palpasa_Cafe_by_Narayan_Wagle.jpg",
      title: "Palpasa Cafe",
      author: "Narayan Wagle",
      category: "Nepali Literature",
      price: 650,
      rating: 4.9,
    },
    {
      id: 14,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHLr44JCTfhhryyCmf8fLGzvAeKVcyS1n83QrsusWtHh3oUVULsVK9PI&s=10",
      title: "Long Walk to Freedom",
      author: "Nelson Mandela",
      category: "Autobiography",
      price: 1599,
      rating: 4.8,
    },
    {
      id: 15,
      cover: "https://shopratnaonline.com/wp-content/uploads/2022/07/Muktak-Manthan.webp",
      title: "Muktak Manthan",
      author: "Govinda Nepal",
      category: "Poetry and Prose",
      price: 950,
      rating: 4.8,
    },
    {
      id: 16,
      cover: "https://media.thuprai.com/__sized__/front_covers/it-ends-with-us-ag8mcmri-thumbnail-280x405-70.jpg",
      title: "It Ends With Us",
      author: "Colleen Hoover",
      category: "Adult and Fiction",
      price: 999,
      rating: 4.8,
    },
  ];


  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");

    try {
      return savedBooks ? JSON.parse(savedBooks) : defaultBooks;
    } catch {
      return defaultBooks;
    }
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const filteredBooks = books.filter((book) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  const removeBook = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const resetBooks = () => {
    setBooks(defaultBooks);
    setSearch("");
    setCategory("All");
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  const categories = [
    "All",
    ...new Set(defaultBooks.map((book) => book.category)),
  ];

  return (
    <div className="min-h-screen bg-white px-5 py-10">
      <div className="mx-auto max-w-7xl">
        {}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            <span className="font-sans font-semibold">e-</span>

            <span className="ml-2 text-sky-600"
              style={{fontFamily: "'Noto Serif Devanagari', serif",fontWeight: 700,}}>
              पुस्तकालय
            </span>
          </h1>

          <p
            className="mt-4 text-lg text-slate-500"
            style={{
              fontFamily: "'Noto Serif Devanagari', serif",
            }}
          >
            पुस्तकको संसारमा स्वागत छ।
          </p>

          <div className="mx-auto mt-4 h-0.5 w-16 bg-sky-500"></div>
        </header>

        {/* Search and Filter Section */}
        <div className="mb-8 grid gap-5 border border-sky-100 bg-white p-5 shadow-sm md:grid-cols-[1fr_220px_auto]">
          <div>
            <label htmlFor="search" className="mb-2 block text-sm font-semibold text-slate-700">
              Search Books
            </label>

            <input id="search" type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by title or author"
              className="w-full border border-sky-400 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:ring-1 focus:ring-sky-200"
            />
          </div>

          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-semibold text-slate-700">Category</label>

            <select id="category" value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full border border-sky-400 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-600 focus:ring-1 focus:ring-sky-200"
            >
              {categories.map((bookCategory) => (
                <option key={bookCategory} value={bookCategory}> {bookCategory} </option>
              ))}
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex items-end">
            <button type="button" onClick={resetBooks}
              className="w-full border border-sky-500 bg-white px-5 py-3 text-sm font-semibold text-sky-600 transition duration-300 hover:bg-sky-500 hover:text-white"
            >Reset Books</button>
          </div>
        </div>

        {/* Book Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-600"> Total Books:{" "}
            <span className="font-bold text-sky-600">
              {filteredBooks.length}
            </span>
          </p>

          {(search || category !== "All") && (
            <button type="button" onClick={clearFilters}
              className="text-sm font-semibold text-sky-600 transition hover:text-sky-800 hover:underline"
            >
              Clear Filters </button>
          )}
        </div>

        {/* Book Cards */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onRemove={removeBook}
              />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-sky-300 bg-sky-50 p-12 text-center">
            <h2 className="text-xl font-semibold text-slate-800">
              No Books Found
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;