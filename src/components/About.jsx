import React from "react";

export default function About() {
  return (
    <section id="about" className="flex justify-center items-center py-20 px-4 bg-gray-900 dark:bg-gray-900">
      <div className="bg-gray-800 dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary-400">✨About Me✨</h2>
        <p className="text-lg opacity-90">
          I'm a software developer intern at INNODEMS, working collaboratively with IDEMS International and the African Data Initiative (ADI) 
          to contribute to the development of R-Instat, 
          a statistical tool aimed at empowering data use across Africa. I'm also part of the curriculum development team at INNODEMS, 
          creating interactive mathematics textbooks aligned with Kenya's Competency-Based Curriculum (CBC). 
          So far, I’ve co-developed digital books for Grades 7, 8, and 10, and I’m currently finalizing the Grade 9 edition.
        </p>
        <p className="mt-4 text-lg opacity-90">
          My journey into tech and data science stems from a lifelong curiosity about science. 
          Though I pursued a BSc in Mathematics & Economics with IT, 
          I deepened my skills through programs like the ALX Software Engineering and AI Starter Kit. 
          My passion is building tools and platforms that blend AI, software development, education, and data to make a lasting impact.
        </p>
        <p className="mt-4 text-lg opacity-90">
          I enjoy creating data-driven applications, educational tools, 
          and intelligent systems. I'm most confident working with tools like R, SPSS, Stata, SQL, PreText, WebWork, VB, Git, and R-Instat, 
          alongside modern data workflows and version control using GitHub.
        </p>
        <p className="mt-4 text-lg opacity-90">
          Looking ahead, I aim to become a dynamic software developer and data scientist, 
          building scalable tools that serve communities across Africa and beyond. I also aspire to pursue a master’s and PhD, 
          and ultimately become a professor—sharing knowledge and mentoring the next generation of innovators. 
          One day, I hope to establish my own IT consultancy to support solutions that truly matter.
        </p>
        <p className="mt-4 text-lg opacity-90">
          Outside of tech, I actively engage in mentoring, volunteering, 
          and community outreach, driven by a belief that grit, purpose, and science can change lives. 
          I live by the mindset:
        </p>
        <blockquote className="mt-4 italic text-lg opacity-90">
          “Grit will make me see my dream.”
        </blockquote>
      </div>
    </section>
  );
} 