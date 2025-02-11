import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 flex justify-center">
      <div className="flex items-center gap-6 max-w-screen-lg mx-auto">
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
      </div>
    </footer>
  );
}