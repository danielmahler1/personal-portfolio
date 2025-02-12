"use client";

import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content - Left-Aligned with Adjusted Spacing */}
      <main className="flex-grow px-[4vw] pt-[8vh]">
        <h1 className="text-[4.5vw] sm:text-[4vw] font-mono font-bold leading-tight">
          Daniel Mahler
        </h1>
        <p className="text-[1.7vw] sm:text-[1.4vw] text-gray-300 font-mono mt-[-1vh]">
          Software Engineer
        </p>

        {/* Navigation Links */}
        <nav className="mt-[8.5vh] space-y-[1.8vh] text-gray-300">
          <Link href="/resume" className="block text-[1.4vw] sm:text-[1.2vw] font-mono hover:text-white">
            Resume
          </Link>
          <Link href="/projects" className="block text-[1.4vw] sm:text-[1.2vw] font-mono hover:text-white">
            Projects
          </Link>
          <Link href="/coursework" className="block text-[1.4vw] sm:text-[1.2vw] font-mono hover:text-white">
            Course Work
          </Link>
          <Link href="/contact" className="block text-[1.4vw] sm:text-[1.2vw] font-mono hover:text-white">
            Contact
          </Link>
        </nav>
      </main>

      {/* Footer dynamically placed */}
      <Footer />
    </div>
  );
}