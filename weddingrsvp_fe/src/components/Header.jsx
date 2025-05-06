import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#fdf6f0] to-[#f7ebe8] px-8 py-10 shadow-md border-b border-[#d8b4a0]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-serif font-semibold text-neutral-800 tracking-wide">
          Promise & Paper
        </h1>
        <nav className="space-x-6 text-lg">
          <Link
            to="/"
            className="text-neutral-700 hover:text-[#a1252f] transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/rsvp"
            className="text-neutral-700 hover:text-[#a1252f] transition duration-200"
          >
            RSVP
          </Link>
          <Link
            to="/register"
            className="text-neutral-700 hover:text-[#a1252f] transition duration-200"
          >
          Guestbook
        </Link>
      </nav>
    </div>
  </header>
  )
}

export default Header
