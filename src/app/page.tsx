import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div
      className="
        flex flex-col
        h-dvh                   /* Fill the entire mobile viewport */
        overflow-hidden         /* No scroll on mobile, content clipped if too tall */
        bg-black 
        text-white
      "
    >
      {/* 
        flex-1 => This main area expands to fill leftover space,
        so the footer is pushed down if content is short. 
      */}
      <main className="flex-1 px-4 sm:px-16 pt-8 sm:pt-20">
        {/* Text aligned top-left (no justify-center). Smaller on mobile so it won't wrap. */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-mono whitespace-nowrap">
          Daniel Mahler
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 font-mono mt-0.25">
          Software Engineer
        </p>

        <nav className="mt-12 sm:mt-14 space-y-3 sm:space-y-5">
          <Link
            href="/resume"
            className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white"
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/coursework"
            className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white"
          >
            Course Work
          </Link>
          <Link
            href="/contact"
            className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}