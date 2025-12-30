import {
  Code2,
  Database,
  Cloud,
  GitBranch,
  FileCode,
  Globe,
  Server,
} from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: FileCode,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "Language",
  },
  {
    name: ".NET",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    category: "Framework",
  },
  {
    name: "C#",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    category: "Language",
  },
  {
    name: "C++",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    category: "Language",
  },
  {
    name: "C",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    category: "Language",
  },
  {
    name: "Java",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "Language",
  },
  {
    name: "MERN Stack",
    icon: Server,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Stack",
  },
  {
    name: "Angular",
    icon: Globe,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    category: "Framework",
  },
  {
    name: "GitHub",
    icon: GitBranch,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tool",
  },
  {
    name: "Vue.js",
    icon: Globe,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    category: "Framework",
  },
  {
    name: "TypeScript",
    icon: FileCode,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    category: "Language",
  },
  {
    name: "SQL",
    icon: Database,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "Database",
  },
  {
    name: "AWS",
    icon: Cloud,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    category: "Cloud",
  },
  {
    name: "Kotlin",
    icon: Code2,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    category: "Language",
  },
  {
    name: "R",
    icon: FileCode,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    category: "Language",
  },
  {
    name: "Linux",
    icon: Server,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: "OS",
  },
  {
    name: "React",
    icon: Globe,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Framework",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Skills & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies I
            <span className="font-serif italic font-normal text-white">
              {" "}
              work with.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A comprehensive toolkit of languages, frameworks, and tools I use to
            build modern, scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {skill.logo ? (
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(12%) sepia(95%) saturate(4000%) hue-rotate(320deg) brightness(0.55) contrast(1.3)",
                    }}
                    onError={(e) => {
                      // Fallback to icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const iconElement = target.parentElement?.querySelector(".skill-icon") as HTMLElement;
                      if (iconElement) {
                        iconElement.style.display = "block";
                      }
                    }}
                  />
                ) : null}
                <skill.icon className={`w-6 h-6 text-primary ${skill.logo ? "hidden skill-icon" : ""}`} />
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs text-muted-foreground">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

