import Footer from "../components/footer";

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main Content - Centered for Resume Page */}
      <main className="flex-grow flex flex-col items-center p-10">
        <h1 className="text-4xl font-mono mb-6">Resume</h1>

        {/* Resume SVG */}
        <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
          <img src="/resume.svg" alt="Resume" className="w-full" />
        </div>
      </main>

      {/* Footer Stays Centered */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}