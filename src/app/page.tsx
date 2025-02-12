import Link from "next/link";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content - Ensures Text is in the Top-Left */}
      <main className="flex-grow p-8 sm:p-20">
        <h1 className="text-5xl sm:text-7xl font-mono">Daniel Mahler</h1>
        <p className="text-lg sm:text-2xl text-gray-300 font-mono">Software Engineer</p>

        {/* Navigation Links */}
        <nav className="mt-10 sm:mt-20 space-y-2 sm:space-y-4">
          <Link href="/resume" className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white">
            Resume
          </Link>
          <Link href="/projects" className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white">
            Projects
          </Link>
          <Link href="/coursework" className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white">
            Course Work
          </Link>
          <Link href="/contact" className="block text-lg sm:text-xl text-gray-300 font-mono hover:text-white">
            Contact
          </Link>
        </nav>
      </main>

      {/* Footer at Bottom Without Pushing Content Down */}
      <Footer />
    </div>
  );
}