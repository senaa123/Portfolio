import { useEffect, useRef, useState } from "react";
import { 
  FileCode2, FileJson, Hash, Code, Coffee, BarChart, 
  Atom, Server, Leaf, LayoutGrid, Workflow, 
  Flame, Cpu, Calculator, Link, Network, Search, 
  Table, Grid3x3, Eye, AudioLines, Hexagon, Palette, 
  Database, TableProperties, HardDrive, 
  Container, Repeat, Cloud, CloudLightning, BarChart3, GitBranch
} from "lucide-react";

const skillCategories = [
  {
    category: "languages",
    skills: [
      { name: "Python", icon: FileCode2 },
      { name: "TypeScript", icon: FileJson },
      { name: "C#", icon: Hash },
      { name: "C++", icon: Code },
      { name: "Java", icon: Coffee },
      { name: "R", icon: BarChart },
    ],
  },
  {
    category: "frameworks",
    skills: [
      { name: "React / Next.js", icon: Atom },
      { name: "NestJS", icon: Server },
      { name: "Spring Boot", icon: Leaf },
      { name: ".NET", icon: LayoutGrid },
      { name: "Redux TK", icon: Workflow },
    ],
  },
  {
    category: "ai / ml",
    skills: [
      { name: "PyTorch", icon: Flame },
      { name: "TensorFlow", icon: Cpu },
      { name: "Scikit-learn", icon: Calculator },
      { name: "LangChain", icon: Link },
      { name: "LangGraph", icon: Network },
      { name: "RAG", icon: Search },
    ],
  },
  {
    category: "data / nlp",
    skills: [
      { name: "Pandas", icon: Table },
      { name: "NumPy", icon: Grid3x3 },
      { name: "OpenCV", icon: Eye },
      { name: "faster-whisper", icon: AudioLines },
      { name: "Qdrant", icon: Hexagon },
      { name: "ChromaDB", icon: Palette },
    ],
  },
  {
    category: "database",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Leaf },
      { name: "SQL", icon: TableProperties },
      { name: "Oracle DB", icon: HardDrive },
    ],
  },
  {
    category: "tools",
    skills: [
      { name: "Docker", icon: Container },
      { name: "CI/CD", icon: Repeat },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: CloudLightning },
      { name: "Power BI", icon: BarChart3 },
      { name: "n8n", icon: GitBranch },
    ],
  },
];

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden bg-[#06141B]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="mb-16 animate-entrance">
          <p className="text-sm font-mono-custom text-[#9BA8AB] mb-2">
            &lt;03&gt; skills
          </p>
          <h2 className="text-4xl font-bold text-[#CCD0CF]">
            Technologies I work with
          </h2>
        </div>

        <div ref={containerRef} className="max-w-5xl">
          {skillCategories.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className={`flex flex-col md:flex-row items-start md:items-center py-6 sm:py-8 border-b border-[#253745] last:border-0 ${
                isVisible ? "animate-entrance" : "opacity-0"
              }`}
              style={{ animationDelay: `${groupIdx * 100}ms` }}
            >
              {/* Category Label */}
              <div className="w-full md:w-48 mb-3 md:mb-0">
                <span className="text-sm font-mono-custom text-[#9BA8AB]">
                  {group.category}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-3 sm:gap-4 flex-1">
                {group.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skillIdx}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border border-[#253745] bg-transparent text-[#CCD0CF] text-sm group cursor-default transition-all duration-250 ease-out hover:-translate-y-[2px] hover:bg-[#0d1f28] hover:border-[#4A5C6A] md:animate-none mobile-active-pill ${
                        isVisible ? "" : "opacity-0"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-[#4A5C6A] group-hover:text-white transition-colors duration-250 ease-out" />
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
