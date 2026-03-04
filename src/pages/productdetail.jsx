import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      {/* Top spacing */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-gray-400 hover:text-black transition mb-16"
        >
          ← Back
        </button>

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-3xl p-16 w-full flex justify-center shadow-sm">
              <img
                src={product.images[0]}
                alt={product.title}
                className="max-h-[500px] object-contain transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Info Section */}
          <div>
            <h1 className="text-5xl font-semibold tracking-tight mb-8 leading-tight">
              {product.title}
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
              {product.description}
            </p>

            <div className="text-4xl font-semibold mb-12">
              ${product.price}
            </div>

            {/* Buttons */}
            <div className="flex gap-6">
              <button className="bg-black text-white px-10 py-4 rounded-full text-sm tracking-wide hover:bg-gray-900 transition">
                Xarid Qilish
              </button>

              <button className="border border-black px-10 py-4 rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition">
                Korzinkaga Saqlash
              </button>
            </div>

            {/* Divider */}
            <div className="mt-20 border-t border-gray-200 pt-8 text-sm text-gray-400 space-y-3">
              <p>Free delivery in 2–4 business days.</p>
              <p>14-day return policy.</p>
              <p>Designed with premium materials.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;