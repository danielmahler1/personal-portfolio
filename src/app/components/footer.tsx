import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-screen-lg mx-auto px-4">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/daniel-mahler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/linkedin.svg" alt="LinkedIn logo" width={24} height={24} />
          <span>LinkedIn</span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/danielmahler1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="GitHub logo" width={24} height={24} />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}