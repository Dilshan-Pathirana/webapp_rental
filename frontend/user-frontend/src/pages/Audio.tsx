import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const equipmentList = [
  {
    id: 1,
    name: "Sennheiser MKH416",
    image: "/images/equipment/sennheiser-mkh416.jpg",
    pricePerDay: "Rs. 1,500",
  },
  {
    id: 2,
    name: "Zoom H6 Recorder",
    image: "/images/equipment/zoom-h6.jpg",
    pricePerDay: "Rs. 1,200",
  },
  {
    id: 3,
    name: "Rode Wireless GO II",
    image: "/images/equipment/rode-wireless-go2.jpg",
    pricePerDay: "Rs. 1,000",
  },
];

function Audio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Audio Equipment
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            Check out our audio equipment available for rent.
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

export default Audio;
