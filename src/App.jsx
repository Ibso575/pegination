import React, { useEffect, useState } from "react";
import Axios from "./config/axios";
import Card from "./components/card.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const skip = (currentPage - 1) * limit;

        const res = await Axios.get(`/products?limit=${limit}&skip=${skip}`);

        setProducts(res.data.products);

        const total = res.data.total;
        setTotalPages(Math.ceil(total / limit));
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 400);
      }
    };

    fetchProducts();
  }, [currentPage]);

  // Faqat 6 ta page ko‘rsatish
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 6;

    let start = Math.max(currentPage - 2, 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <>

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center items-center h-60">
              <div className="w-14 h-14 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
            </div>
          ): (
            <>
              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                {products.map((item) => (
                  <Card key={item.id} product={item} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-12 gap-2">
                {/* Prev */}
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-200 transition"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Agar boshida yashirin page bo‘lsa */}
                {currentPage > 4 && (
                  <>
                    <button
                      onClick={() => setCurrentPage(1)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                    >
                      1
                    </button>
                    <span className="px-2">...</span>
                  </>
                )}

                {/* Numbers */}
                {getVisiblePages().map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border rounded-lg transition ${
                      currentPage === page
                        ? "bg-gray-600 text-white"
                        : "bg-white hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Agar oxirida yashirin page bo‘lsa */}
                {currentPage + 3 < totalPages && (
                  <>
                    <span className="px-2">...</span>
                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                {/* Next */}
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border rounded-lg disabled:opacity-40 hover:bg-gray-200 transition"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
