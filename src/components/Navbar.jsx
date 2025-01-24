import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array of navigation links
  const navLinks = [
    { name: "User", path: "/user" },
    { name: "Admin", path: "/admin" },
    { name: "Seller", path: "/seller" },
    { name: "Super Admin", path: "/super-admin" },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.path} className="hover:text-blue-400">
              {link.name}
            </Link>
          ))}
          <Link href="/signup">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-700 px-4 pb-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="block py-2 text-white hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/signup">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 mt-2 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
