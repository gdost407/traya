import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 mt-20">
      <div className="container mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="font-bold mb-4">About Traya</h4>
          <p className="text-gray-300">
            Traya is dedicated to providing personalized health care solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-green-500 transition">FB</a>
            <a href="#" className="hover:text-green-500 transition">TW</a>
            <a href="#" className="hover:text-green-500 transition">IG</a>
            <a href="#" className="hover:text-green-500 transition">LI</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Traya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
