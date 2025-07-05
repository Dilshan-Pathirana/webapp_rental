import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const latestItems = [
  {
    id: 1,
    name: "Canon EOS R6",
    image: "/images/equipment/canon-eos-r6.jpg",
    pricePerDay: "Rs. 4,500",
  },
  {
    id: 2,
    name: "Sony PXW-FX9",
    image: "/images/equipment/sony-pxw-fx9.jpg",
    pricePerDay: "Rs. 10,000",
  },
  {
    id: 3,
    name: "Aputure 120d II",
    image: "/images/equipment/aputure-120d2.jpg",
    pricePerDay: "Rs. 3,000",
  },
];

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
              Capture Your Moments with The Best Equipment
            </h1>
            <p className="text-lg mb-8 drop-shadow-md">
              Rent high-quality photography, video, lighting, and audio gear at
              affordable prices.
            </p>
            <a
              href="/photography"
              className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-pink-100 transition"
            >
              Browse Equipment
            </a>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2">
            <img
              src="/images/hero-camera-setup.jpg"
              alt="Camera setup"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Latest Items */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Latest Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {latestItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-pink-600 text-lg mt-2">
                  {item.pricePerDay} / day
                </p>
                <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <svg
                className="mx-auto mb-4 h-12 w-12 text-pink-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4 -4"
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2">
                Premium Quality Gear
              </h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Only the best brands and models to ensure your shoot is
                flawless.
              </p>
            </div>
            <div>
              <svg
                className="mx-auto mb-4 h-12 w-12 text-pink-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Competitive rental rates that fit your budget.
              </p>
            </div>
            <div>
              <svg
                className="mx-auto mb-4 h-12 w-12 text-pink-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                <path d="M16 8l-4 8-2-4" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600 max-w-xs mx-auto">
                Simple and fast rental process with instant confirmations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
