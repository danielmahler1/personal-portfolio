import Footer from "../components/footer";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <main className="flex-grow flex flex-col items-center p-6 sm:p-12">
        <h1 className="text-4xl font-mono mb-5 sm:mb-8">Resume</h1>

        {/* Resume SVG - Properly Centered & Spaced */}
        <div className="w-[85vw] max-w-3xl bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <Image src="/resume.svg" alt="Resume" width={800} height={1000} className="w-full h-auto" />
        </div>
      </main>

      {/* Footer dynamically positioned */}
      <Footer />
    </div>
  );
}