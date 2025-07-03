import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto text-center">
      <p>© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
