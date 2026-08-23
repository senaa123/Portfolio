import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

type ProjectCategory = "All" | "AI / ML" | "Full Stack" | "Data Science & Analytics" | "Automation" | "Mobile";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  deployment?: string;
  comingSoon?: boolean;
  categories: ProjectCategory[];
};

const projects: Project[] = [
  {
    title: "Bidify - Online Bidding Platform",
    description:
      "Modern bidding website with smooth animations and responsive design. Built with HTML, CSS, JavaScript frontend, and a Java backend.",
    image: "/project/bidify.jpg",
    tags: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    github: "https://github.com/senaa123/Bidify",
    categories: ["Full Stack"],
  },
  {
    title: "Snazzy - Smart Shoe Store",
    description:
      "Full-stack e-commerce site with React frontend, Node.js backend, and MongoDB database. Features cart functionality and payment processing.",
    image: "/project/snazzy.jfif",
    tags: ["Node.js", "React", "Stripe", "Express", "MongoDB"],
    github: "https://github.com/BinadaPasandul/snazzy",
    categories: ["Full Stack"],
  },
  {
    title: "Wed.In - Wedding Reservation System",
    description:
      "A wedding hotel reservation system with booking, hotel listing, and admin management features.",
    image: "/project/Wedin.jfif",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    github: "https://github.com/senaa123/Hotel-Reservation-System-for-Weddings",
    categories: ["Full Stack"],
  },
  {
    title: "BookMe - Online Reservation App",
    description:
      "A smart app to easily book restaurants, cafes, and hotels all in one place using Kotlin for the frontend.",
    image: "/project/bookme.jfif",
    tags: ["Kotlin", "Android", "UI/UX Design"],
    github: "https://github.com/senaa123/BookNow",
    categories: ["Mobile"],
  },
  {
    title: "Movie Reviews Sentiment Analysis",
    description:
      "A machine learning project that analyzes movie reviews to determine whether the expressed sentiment is positive or negative.",
    image: "/project/movie.jpg",
    tags: ["Python", "ML", "TF-IDF"],
    github: "https://github.com/senaa123/Movie-Reviews-Sentiment-Analysis",
    categories: ["AI / ML"],
  },
  {
    title: "Stock Price Predictor",
    description:
      "A forecasting model that analyzes historical stock data to predict future price movements and trends.",
    image: "/project/stock2.jpg",
    tags: ["Python", "ML", "yfinance", "NumPy", "LSTM"],
    github: "https://github.com/senaa123/Stock-Price-Predictor",
    categories: ["AI / ML", "Data Science & Analytics"],
  },
  {
    title: "Arfy AI - Personal Voice Assistant",
    description:
      "A Jarvis-style AI voice assistant that listens, thinks, remembers, and acts, powered by LLaMA 70B and LangGraph.",
    image: "/project/arfy.jpg",
    tags: ["Python", "LangChain", "PyTorch", "Groq LLM"],
    github: "https://github.com/senaa123/Arfy-Ai",
    categories: ["AI / ML"],
  },
  {
    title: "HR Analysis",
    description:
      "A statistical modeling project that explores employee trust, leadership, and organizational commitment through correlation and regression analysis.",
    image: "/project/hr-analysis.png",
    tags: ["R", "Statistics", "Regression", "Data Analysis"],
    github: "https://github.com/senaa123/HR-Analysis",
    categories: ["Data Science & Analytics"],
  },
  {
    title: "CareerPulse AI",
    description:
      "An AI-powered automation workflow that collects job postings, filters and scores them with LLMs, stores matches in Supabase, and sends alerts.",
    image: "/project/careerpulse1.jpg",
    tags: ["n8n", "LLM", "Supabase", "Telegram", "Email"],
    github: "https://github.com/senaa123/CareerPulse-AI",
    categories: ["AI / ML", "Automation"],
  },
  {
    title: "Pharmacy DWBI Project",
    description:
      "A pharmacy data warehouse and business intelligence project focused on structured reporting, SQL-based analysis, and decision-ready insights.",
    image: "/project/pharmacy1.jpg",
    tags: ["T-SQL", "DWBI", "Data Warehouse", "Analytics"],
    github: "https://github.com/senaa123/pharmacy-dwbi-project",
    categories: ["Data Science & Analytics"],
  },
  {
    title: "Library Management System",
    description:
      "A C# library management system for organizing books, members, issuing, returning, and day-to-day library administration.",
    image: "/project/library2.jpg",
    tags: ["C#", ".NET", "SQL", "Management System"],
    github: "https://github.com/senaa123/Library-management-system",
    categories: ["Full Stack"],
  },
  {
    title: "Opus Project",
    description:
      "A focused software project presented as part of the portfolio, built around a clean, practical workflow and polished user experience.",
    image: "/project/opus.jpg",
    tags: ["Software", "UI/UX", "Productivity", "Workflow"],
    github: "https://github.com/senaa123/Opus---smart-campus",
    categories: ["Full Stack"],
  },
  {
    title: "Project & Team Management Platform",
    description:
      "A full-stack project and team task management platform with JWT authentication and role-based access control, built with Next.js and NestJS.",
    image: "/project/pm2.jpg",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "RBAC"],
    github: "https://github.com/senaa123/Project-and-Team-Task-Management-Platform",
    deployment: "https://project-and-team-task-management-pl-lyart.vercel.app",
    categories: ["Full Stack"],
  },
  {
    title: "CampusMind - University Learning RAG Platform",
    description:
      "A production-style RAG platform for university learning materials, using hybrid retrieval and chunking benchmarks, with a multi-LLM router across Gemini, Groq, Qwen, and Cohere for educational QA.",
    image: "/project/campus2.jpg",
    tags: ["Python", "FastAPI", "RAG", "Next.js", "qdrant"],
    github: "https://github.com/senaa123/CampusMind-AI",
    categories: ["AI / ML", "Full Stack"],
  },
  {
    title: "CeylonLeaf – ERP Analytics & BI Solution",
    description:
      "End-to-end ERP analytics platform that transforms operational data into actionable insights across sales, inventory, procurement, and executive performance.",
    image: "/project/erp.jpg",
    tags: ["Python", "Odoo", "MS Fabric", "PowerBI", "Power Query"],
    deployment: "https://app.powerbi.com/links/HeCyrHTQFr?ctid=44e3cf94-19c9-4e32-96c3-14f5bf01391a&pbi_source=linkShare",
    github: "https://github.com/senaa123/CeylonLeaf-ERP-Analytics",
    categories: ["Data Science & Analytics", "AI / ML"],
  },
  {
    title: "PawCare - AI Pet Health Classifier",
    description:
      "A cat breed classifier and health-monitoring system combining YOLOv8, ResNet18, and audio classification, trained on 60 breeds and deployed via ONNX for real-time inference.",
    image: "/project/pawcare2.jpg",
    tags: ["PyTorch", "YOLOv8", "EfficiantNet18", "ONNX", "Computer Vision"],
    github: "https://github.com/senaa123/PawCare",
    categories: ["AI / ML", "Full Stack"],
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "A real-time attendance system using OpenCV face detection and KNN recognition, with duplicate-prevention logic and a Streamlit dashboard for daily attendance records.",
    image: "/project/facerec2.jpg",
    tags: ["Python", "OpenCV", "KNN", "Streamlit"],
    github: "https://github.com/senaa123/Face-recognition-attendance-system",
    categories: ["AI / ML"],
  },
  {
    title: "Heart Disease Classifier",
    description:
      "A machine learning classifier for predicting heart disease risk from health indicators and model-driven analysis.",
    image: "/project/heart.jpg",
    tags: ["Python", "ML", "Healthcare", "Classifier"],
    github: "#",
    comingSoon: true,
    categories: ["AI / ML"],
  },
  {
    title: "Bangkok Airbnb Market Analysis",
    description:
      "An end-to-end data pipeline analyzing Bangkok Airbnb listings covering ingestion, ML modeling, sentiment analysis, an LLM-generated executive summary, and an interactive Streamlit dashboard.",
    image: "/project/airbnb2.jpg",
    tags: ["Python", "Pandas", "ML", "Statistical Analysis", "Streamlit"],
    github: "https://github.com/senaa123/Airbnb-Market-Intelligence",
    comingSoon: true,
    categories: ["Data Science & Analytics", "AI / ML"],
  },
];

const categories: { label: ProjectCategory }[] = [
  { label: "All" },
  { label: "AI / ML" },
  { label: "Full Stack" },
  { label: "Data Science & Analytics" },
  { label: "Automation" },
  { label: "Mobile" },
];

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [displayedCategory, setDisplayedCategory] = useState<ProjectCategory>("All");
  const [isGridFading, setIsGridFading] = useState(false);

  const filteredProjects = displayedCategory === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(displayedCategory));

  const handleCategoryChange = (newCategory: ProjectCategory) => {
    if (newCategory === activeCategory) return;
    setActiveCategory(newCategory);
    setIsGridFading(true);
    setTimeout(() => {
      setDisplayedCategory(newCategory);
      setIsGridFading(false);
    }, 150);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      hasAnimatedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.01,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden bg-[#06141B]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Header & Filter Layout */}
        <div className="mb-10 animate-entrance">
          <div className="mb-6">
            <p className="text-sm font-mono-custom text-[#9BA8AB] mb-2">
              &lt;04&gt; selected work
            </p>
            <h2 className="text-4xl font-bold text-[#CCD0CF]">
              Projects
            </h2>
          </div>

          {/* Filter Tab Row */}
          <div className="w-full overflow-x-auto no-scrollbar pb-2 -mb-2">
            <div className="inline-flex gap-2 min-w-max">
              {categories.map((cat) => {
                const count = cat.label === "All"
                  ? projects.length
                  : projects.filter((p) => p.categories.includes(cat.label)).length;
                const isActive = activeCategory === cat.label;

                return (
                  <button
                    key={cat.label}
                    onClick={() => handleCategoryChange(cat.label)}
                    className={`h-9 px-4 rounded-[8px] border text-[13px] font-mono-custom flex items-center gap-2 whitespace-nowrap transition-colors duration-250 ease-out select-none ${
                      isActive
                        ? "bg-[#CCD0CF] text-[#06141B] border-[#CCD0CF] font-medium"
                        : "bg-transparent text-[#9BA8AB] border-[#253745] hover:border-[#4A5C6A] hover:text-[#CCD0CF]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[12px] ${
                        isActive ? "opacity-75" : "opacity-65"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Grid with 150ms Fade Transition */}
        <div
          ref={containerRef}
          className={`grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl transition-opacity duration-150 ease-in-out ${
            isGridFading ? "opacity-0" : isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredProjects.map((project, idx) => {
            const isComingSoon = project.comingSoon === true;

            return (
              <div
                key={project.title}
                className={`group flex flex-col bg-[#11212D] border border-[#253745] rounded-xl overflow-hidden mobile-active-card md:hover:-translate-y-[2px] ${
                  isVisible ? "animate-entrance-15" : "opacity-0"
                }`}
                style={{ animationDelay: `${(idx % 6) * 80}ms` }}
              >
                {/* Image Area */}
                <div className="relative aspect-video overflow-hidden border-b border-[#253745] bg-[#0d1f28]">
                  {/* Fallback pattern if image is missing */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0d1f28] text-sm font-mono-custom text-[#9BA8AB]">
                    [ project screenshot ]
                  </div>
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`absolute inset-0 z-10 w-full h-full object-cover transition-all duration-400 ease-out 
                      ${isComingSoon ? "blur-[4px] md:blur-0 md:group-hover:scale-[1.08] md:group-hover:blur-[4px]" : "md:group-hover:scale-[1.08]"}`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 z-20 transition-opacity duration-300 ease-out opacity-100 md:opacity-0 md:group-hover:opacity-100
                    ${isComingSoon ? "bg-[rgba(6,20,27,0.55)] md:bg-[rgba(6,20,27,0.7)] items-center justify-center" : "bg-transparent md:bg-[rgba(6,20,27,0.55)] items-end justify-end p-4 md:items-center md:justify-center md:p-0"} flex gap-4`}
                  >
                    {isComingSoon ? (
                      <div className="text-center transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                        <span className="block font-bold text-white tracking-widest uppercase mb-1">Coming Soon</span>
                        <span className="text-[#9BA8AB] text-sm">currently in development</span>
                      </div>
                    ) : (
                      <>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-[42px] h-[42px] bg-[#11212D] border-[0.5px] border-[#253745] rounded-full flex items-center justify-center text-[#CCD0CF] hover:scale-110 hover:bg-[#16262f] hover:border-[#4A5C6A] transition-all duration-300 md:transform md:translate-y-4 md:group-hover:translate-y-0 cursor-pointer"
                          style={{ transitionDelay: "50ms" }}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.deployment || undefined}
                          target={project.deployment ? "_blank" : undefined}
                          rel={project.deployment ? "noreferrer" : undefined}
                          className={`w-[42px] h-[42px] bg-[#11212D] border-[0.5px] border-[#253745] rounded-full flex items-center justify-center text-[#CCD0CF] transition-all duration-300 md:transform md:translate-y-4 md:group-hover:translate-y-0 ${
                            project.deployment 
                              ? "hover:scale-110 hover:bg-[#16262f] hover:border-[#4A5C6A] cursor-pointer" 
                              : "opacity-40 cursor-not-allowed pointer-events-none"
                          }`}
                          style={{ transitionDelay: "100ms" }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono-custom text-[#4A5C6A] uppercase tracking-wider">
                      {project.categories.join(" • ")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#CCD0CF] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#9BA8AB] text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-[#253745] text-xs font-mono-custom text-[#9BA8AB]"
                      >
                        {tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
