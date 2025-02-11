import Image from "next/image";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="w-full h-screen p-8 sm:p-20 bg-black flex flex-col items-start text-white">
      {/* Name in the upper-left corner */}
      <h1 className="text-5xl sm:text-7xl font-mono">
        Daniel Mahler
      </h1>
      <p className="text-lg sm:text-2xl text-gray-300 font-mono">
          Software Engineer
        </p>

      {/* Different Pages */}
      <main className="mt-20 space-y-4">
        {/* <p className="text-lg sm:text-xl text-gray-300 font-mono">
          Resume
        </p> */}
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
      </main>

      {/* Footer with Social Links (Centered at the Bottom) */}
      <footer className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/daniel-mahler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn logo"
            width={24}
            height={24}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/danielmahler1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub logo"
            width={24}
            height={24}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}