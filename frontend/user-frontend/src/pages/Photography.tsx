import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const equipmentList = [
  {
    id: 1,
    name: "Canon EOS R6",
    image: "/images/equipment/canon-eos-r6.jpg",
    pricePerDay: "Rs. 4,500",
  },
  {
    id: 2,
    name: "Nikon Z6 II",
    image: "/images/equipment/nikon-z6ii.jpg",
    pricePerDay: "Rs. 4,000",
  },
  {
    id: 3,
    name: "Sony Alpha A7 III",
    image: "/images/equipment/sony-a7iii.jpg",
    pricePerDay: "Rs. 4,800",
  },
];

function Photography() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Photography Equipment
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Browse our selection of professional photography gear available for
            rent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {equipmentList.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-pink-600 text-lg mt-2">
                    {item.pricePerDay} / day
                  </p>
                  <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Photography;
