import React from "react";

export default function Home() {
  const handleScroll = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12">
      <img
        src="/rom2.png"
        alt="Rodgers Maragia"
        className="w-80 h-80 rounded-full mb-6 object-cover shadow-lg"
      />
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">RODGERS MARAGIA</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary-400">Software Developer | Curriculum Developer | Data Scientist | Data Analyst</h2>
      <p className="max-w-xl mb-8 text-lg opacity-80">“Turning data into insight, and insight into action.”</p>
      <button onClick={handleScroll} className="px-6 py-3 bg-primary-400 text-gray-900 font-bold rounded shadow hover:bg-primary-300 transition">View My Work</button>
    </section>
  );
} 