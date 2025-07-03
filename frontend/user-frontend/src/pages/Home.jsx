import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to YourCompany</h1>
        <p className="text-lg max-w-3xl">
          This is the homepage. Here you can introduce your company and showcase featured rental items, promotions, or anything relevant.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
