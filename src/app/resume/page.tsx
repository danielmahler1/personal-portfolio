import Footer from "../components/footer";
import Image from "next/image";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content - Centered Using Percentages */}
      <main className="flex-grow flex flex-col items-center px-[5vw] pt-[3vh]">
        <h1 className="text-[4vw] sm:text-[3.5vw] font-mono mb-[2vh]">Resume</h1>

        {/* Resume SVG - Responsive Width & Height */}
        <div className="w-[80vw] max-w-[900px] bg-white p-[3vw] sm:p-[2vw] rounded-lg shadow-lg">
          <Image src="/resume.svg" alt="Resume" width={800} height={1000} className="w-full h-auto" />
        </div>
      </main>

      {/* Footer dynamically positioned */}
      <Footer />
    </div>
  );
}