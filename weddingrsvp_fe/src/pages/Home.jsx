import React from 'react'
import Header from '../components/header'

function Home() {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#f9f4ef]">
    {/* <header className="bg-[#fdf6f0] p-8 shadow-sm">
      <h1 className="text-4xl font-serif font-semibold text-neutral-800 tracking-wide">
        Promise & Paper
      </h1>
    </header> */}
  
    <main className="p-10 text-center space-y-6">
      <h2 className="text-2xl font-light text-neutral-800">
        A modern way to plan, invite, and celebrate love.
      </h2>
      <a
        href="/rsvp"
        className="inline-block px-6 py-3 bg-[#a1252f] text-white text-lg font-medium rounded-full shadow hover:bg-[#881f29] transition duration-200"
      >
        RSVP Now
      </a>
    </main>
    </div>
    </>
  )
}

export default Home