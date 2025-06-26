import React, { useState } from "react";

const projects = [
  {
    title: "Bachelors Degree Final project",
    description: "Interactive, open digital textbooks for High Secondary School math education in Kenya.",
    status: "Complete",
    date: "11-03-2024",
    tech: "[Pretext, Stack, WebWork]",
    github: "https://github.com/Rockjunior/CBC-Grade-10-Maths",
    demo: "https://innodems.github.io/CBC-Grade-10-Maths/frontmatter.html",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects and skills.",
    status: "Complete",
    date: "26-06-2025",
    tech: "React, Tailwind CSS, JavaScript",
    github: "https://github.com/Rockjunior/Rockjunior.github.io",
    demo: "Coming Soon...",
  },
  {
    title: "TO-DO App",
    description: "A task management application to help users organize and prioritize their tasks.",
    status: "Complete",
    date: "January-24-2025",
    tech: "Python, JavaSript, CSS",
    github: "https://github.com/Rockjunior/TO-DO",
    demo: "Coming Soon...",
  },
  // {
  //   title: "BookNook",
  //   description: "An online platform for book lovers to discover, review, and discuss books.",
  //   status: "Brainstorming",
  //   date: "March-7-2025",
  //   tech: "Typescript, JavaSript, CSS",
  //   github: "https://github.com/GHAIDEMS/Grade-7-Maths",
  //   demo: "https://ghaidems.github.io/Grade-7-Maths/frontmatter.html",
  // },
  {
    title: "BookNook",
    description: "An online platform for book lovers to discover, review, and discuss books.",
    status: "Brainstorming",
    date: "March-7-2025",
    tech: "Typescript, JavaSript, CSS",
    github: "https://github.com/GHAIDEMS/Grade-7-Maths",
    demo: "https://ghaidems.github.io/Grade-7-Maths/frontmatter.html",
  },
  {
    title: "Interactive Grade 10 Math Textbooks",
    description: "Interactive, open digital textbooks for High Secondary School math education in Kenya.",
    status: "Complete",
    date: "April-4-2025",
    tech: "[Pretext, Stack, WebWork]",
    github: "https://github.com/Rockjunior/CBC-Grade-10-Maths",
    demo: "https://innodems.github.io/CBC-Grade-10-Maths/frontmatter.html",
  },
  {
    title: "Interactive Grade 9 Math Textbooks",
    description: "Interactive, open digital textbooks for Junior Secondary School [JSS] math education in Kenya.",
    status: "Ongoing",
    date: null,
    tech: "[Pretext, Stack, WebWork]",
    github: "https://github.com/Rockjunior/CBC-Grade-9-Maths",
    demo: "Coming Soon...",
  },
  {
    title: "Interactive Grade 8 Math Textbooks",
    description: "Interactive, open digital textbooks for Junior Secondary School [JSS] math education in Kenya.",
    status: "Complete",
    date: null,
    tech: "[Pretext, Stack, WebWork]",
    github: "https://github.com/Rockjunior/CBC-Grade-8-Maths",
    demo: "https://innodems.github.io/CBC-Grade-8-Maths/frontmatter.html",
  },
  {
    title: "CBC-career_pathway_guide",
    description: "A CBC-aligned platform to guide Kenyan students in choosing senior school pathways.",
    status: "Complete",
    date: "2025-05-21",
    tech: "[HTML, CSS, JavaScript, React]",
    github: "https://github.com/Rockjunior/CBC-career_pathway_guide",
    demo: "Comming Soon...",
  },
  {
    title: "Interactive Grade 7 Math Textbooks",
    description: "Interactive, open digital textbooks for secondary math education in Kenya.",
    status: "Complete",
    date: "February-7-2025",
    tech: "[Pretext, Stack, WebWork]",
    github: "https://github.com/GHAIDEMS/Grade-7-Maths",
    demo: "https://ghaidems.github.io/Grade-7-Maths/frontmatter.html",
  },
  {
    title: "R-Instat",
    description: "Contributions to the open-source statistical tool with IDEMS International & ADI.",
    status: "Ongoing",
    date: "To Date",
    tech: "[R, RStudio, RMarkdown, Git, GitHub, VisualBasic.NET]",
    github: "https://github.com/Rockjunior/R-Instat",
    demo: "https://r-instat.org/",
  },
  {
    title: "AI for Community Tutoring",
    description: "An idea to build an AI-powered assistant to support math learning in rural schools.",
    status: "Brainstorming",
    date: "To Be Determined",
    tech: "[AI, Machine Learning, Natural Language Processing]",
    github: "Coming Soon...",
    demo: "Coming Soon...",
  },
];

const filters = ["Complete", "Ongoing", "Brainstorming"];

export default function Projects() {
  const [filter, setFilter] = useState("Complete");
  const filtered =
    filter === "Complete"
      ? projects.filter((p) => p.status === filter).sort((a, b) => new Date(b.date) - new Date(a.date))
      : projects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary-400 text-center">📁 Projects 📁</h2>
        <div className="flex justify-center gap-4 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full font-semibold transition border-2 ${filter === f ? "bg-primary-400 text-gray-900 border-primary-400" : "bg-gray-800 text-primary-200 border-gray-700 hover:bg-primary-300 hover:text-gray-900 hover:border-primary-300"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-primary-300">{project.title}</span>
                <span className={`ml-auto px-2 py-1 rounded text-xs font-semibold ${project.status === "Complete" ? "bg-green-600 text-white" : project.status === "Ongoing" ? "bg-yellow-500 text-gray-900" : "bg-blue-600 text-white"}`}>{project.status === "Brainstorming" ? "Idea" : project.status}</span>
              </div>
              <p className="text-gray-200 mb-2">{project.description}</p>
              {project.date && <span className="text-xs text-gray-400">{new Date(project.date).toLocaleString('default', { month: 'short', year: 'numeric' })}</span>}
              <div className="flex gap-2 mt-2">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">GitHub</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary-400 underline">Demo</a>}
                {!project.github && !project.demo && <span className="text-xs text-gray-500">{project.status === "Complete" ? "Coming Soon" : null}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 