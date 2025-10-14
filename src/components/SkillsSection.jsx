import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming & Data Handling
  { name: "Python", level: 95, category: "programming" },
  { name: "SQL", level: 90, category: "programming" },
  { name: "Java", level: 85, category: "programming" },
  { name: "C/C++", level: 80, category: "programming" },

  // Data Science & Machine Learning
  { name: "DoubleML", level: 95, category: "data science" },
  { name: "pandas", level: 95, category: "data science" },
  { name: "NumPy", level: 95, category: "data science" },
  { name: "scikit-learn", level: 95, category: "data science" },
  { name: "TensorFlow", level: 75, category: "data science" },
  { name: "PyTorch", level: 75, category: "data science" },

  // Databases & Backend
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "Oracle Database", level: 90, category: "database" },
  { name: "MongoDB", level: 70, category: "database" },
  { name: "Node.js", level: 80, category: "programming" },

  // Data Visualization & Reporting
  { name: "Tableau", level: 95, category: "visualization" },
  { name: "Power BI", level: 80, category: "visualization" },
  { name: "matplotlib", level: 85, category: "visualization" },
  { name: "seaborn", level: 80, category: "visualization" },
  { name: "Plotly", level: 80, category: "visualization" },

  // Web & Frontend (for dashboards / interfaces)
  { name: "React", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Vite", level: 90, category: "frontend" },
  { name: "Unity", level: 80, category: "frontend" },

  // Tools & DevOps
  { name: "Git/GitHub", level: 95, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];


const categories = ["all", "data science","programming", "database", "visualization", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
