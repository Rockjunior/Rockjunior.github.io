import React from "react";

const skills = [
  {
    category: "Tools & Languages",
    items: ["R", "Python", "SPSS", "Stata", "Excel", "SQL", ".NET", "JavaScript", "HTML", "CSS", "Git", "GitHub", "R-Instat", "PreText", "WebWork"],
  },
  {
    category: "Hard Skills",
    items: ["Data Cleaning", "Statistical Analysis", "AI Prompting", "Data Visualization", "Data Science", "Data Analysis", "Machine Learning", "Statistical Modelling"],
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Communication", "Teamwork", "Problem Solving", "Adaptability", "Time Management", "Critical Thinking", "Attention to Detail"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-80 px-4 bg-gray-900 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-primary-400 text-center">🧠 Skills 🧠 </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold mb-4 text-primary-300">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-gray-700 text-primary-200 rounded-full text-sm font-medium shadow">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 