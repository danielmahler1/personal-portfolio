export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>

      {/* Apply background directly via Tailwind */}
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
        <img src="/resume.svg" alt="Resume" className="w-full" />
      </div>
    </main>
  );
}