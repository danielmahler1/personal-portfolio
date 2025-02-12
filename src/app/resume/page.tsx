import Footer from "../components/footer";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div
      className="
        flex flex-col
        h-dvh overflow-hidden       /* Mobile: Fill viewport, no scroll */
        md:h-auto md:overflow-auto  /* Desktop: auto-height & scroll if needed */
        bg-black 
        text-white
      "
    >
      {/* 
        flex-grow => If content is short, footer is at bottom 
        p-4 => smaller padding on mobile so less chance of clipping
      */}
      <main className="flex-grow p-4 sm:p-8 md:p-12 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono mb-4 sm:mb-6">
          Resume
        </h1>

        {/* 
          Constrain width. 
          On mobile, ensure the image doesn't exceed ~50-60% of screen height 
          so the heading & footer fit. On desktop, remove that limit (md:max-h-none).
        */}
        <div
          className="
            w-[85vw] 
            max-w-3xl 
            bg-white
            p-4 sm:p-6 md:p-8
            rounded-lg 
            shadow-lg 
            flex 
            items-center 
            justify-center
          "
        >
          <Image
            src="/resume.svg"
            alt="Resume"
            width={800}       /* the original intrinsic size */
            height={1000}
            className="
              w-full          /* fill container width on mobile */
              h-auto 
              object-contain
              max-h-[50vh]    /* limit on mobile so it fits, no scroll */
              md:max-h-none   /* remove limit on desktop => full scroll is allowed */
            "
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}