import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  deployment?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Bidify - Online Bidding Platform",
    description:
      "Modern bidding website with smooth animations and responsive design. Built with HTML, CSS, JavaScript frontend, and a Java backend.",
    image: "/project/bidify.jpg",
    tags: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
    github: "https://github.com/senaa123/Bidify",
  },
  {
    title: "Snazzy - Smart Shoe Store",
    description:
      "Full-stack e-commerce site with React frontend, Node.js backend, and MongoDB database. Features cart functionality and payment processing.",
    image: "/project/snazzy.jfif",
    tags: ["Node.js", "React", "Stripe", "Express", "MongoDB"],
    github: "https://github.com/BinadaPasandul/snazzy",
  },
  {
    title: "Wed.In - Wedding Reservation System",
    description:
      "A wedding hotel reservation system with booking, hotel listing, and admin management features.",
    image: "/project/Wedin.jfif",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "SQL"],
    github: "https://github.com/senaa123/Hotel-Reservation-System-for-Weddings",
  },
  {
    title: "BookMe - Online Reservation App",
    description:
      "A smart app to easily book restaurants, cafes, and hotels all in one place using Kotlin for the frontend.",
    image: "/project/bookme.jfif",
    tags: ["Kotlin", "Android", "UI/UX Design"],
    github: "https://github.com/senaa123/BookNow",
  },
  {
    title: "Movie Reviews Sentiment Analysis",
    description:
      "A machine learning project that analyzes movie reviews to determine whether the expressed sentiment is positive or negative.",
    image: "/project/movie.jpg",
    tags: ["Python", "ML", "TF-IDF"],
    github: "https://github.com/senaa123/Movie-Reviews-Sentiment-Analysis",
  },
  {
    title: "Stock Price Predictor",
    description:
      "A forecasting model that analyzes historical stock data to predict future price movements and trends.",
    image: "/project/stock2.jpg",
    tags: ["Python", "ML", "yfinance", "NumPy", "LSTM"],
    github: "https://github.com/senaa123/Stock-Price-Predictor",
  },
  {
    title: "Arfy AI - Personal Voice Assistant",
    description:
      "A Jarvis-style AI voice assistant that listens, thinks, remembers, and acts, powered by LLaMA 70B and LangGraph.",
    image: "/project/arfy.jpg",
    tags: ["Python", "LangChain", "PyTorch", "Groq LLM"],
    github: "https://github.com/senaa123/Arfy-Ai",
  },
  {
    title: "HR Analysis",
    description:
      "A statistical modeling project that explores employee trust, leadership, and organizational commitment through correlation and regression analysis.",
    image: "/project/hr-analysis.png",
    tags: ["R", "Statistics", "Regression", "Data Analysis"],
    github: "https://github.com/senaa123/HR-Analysis",
  },
  {
    title: "CareerPulse AI",
    description:
      "An AI-powered automation workflow that collects job postings, filters and scores them with LLMs, stores matches in Supabase, and sends alerts.",
    image: "/project/careerpulse1.jpg",
    tags: ["n8n", "LLM", "Supabase", "Telegram", "Email"],
    github: "https://github.com/senaa123/CareerPulse-AI",
  },
  {
    title: "Pharmacy DWBI Project",
    description:
      "A pharmacy data warehouse and business intelligence project focused on structured reporting, SQL-based analysis, and decision-ready insights.",
    image: "/project/pharmacy1.jpg",
    tags: ["T-SQL", "DWBI", "Data Warehouse", "Analytics"],
    github: "https://github.com/senaa123/pharmacy-dwbi-project",
  },
  {
    title: "Library Management System",
    description:
      "A C# library management system for organizing books, members, issuing, returning, and day-to-day library administration.",
    image: "/project/library2.jpg",
    tags: ["C#", ".NET", "SQL", "Management System"],
    github: "https://github.com/senaa123/Library-management-system",
  },
  {
    title: "Opus Project",
    description:
      "A focused software project presented as part of the portfolio, built around a clean, practical workflow and polished user experience.",
    image: "/project/opus.jpg",
    tags: ["Software", "UI/UX", "Productivity", "Workflow"],
    github: "https://github.com/senaa123/Opus---smart-campus",
  },
  {
    title: "Heart Disease Classifier",
    description:
      "A machine learning classifier for predicting heart disease risk from health indicators and model-driven analysis.",
    image: "/project/heart.jpg",
    tags: ["Python", "ML", "Healthcare", "Classifier"],
    github: "#",
    comingSoon: true,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects
            <span className="font-serif italic font-bold"> I've</span>
            <span className="font-serif italic font-normal text-white">
              {" "}
              Worked On.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => {
            const isComingSoon = project.comingSoon === true;
            const hasDeployment = Boolean(project.deployment);

            return (
              <div
                key={project.title}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 relative"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                      isComingSoon
                        ? "group-hover:blur-sm group-hover:scale-100"
                        : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  {isComingSoon ? (
                    /* Coming Soon overlay - image area only, on hover */
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <h4 className="text-2xl font-bold text-white tracking-widest uppercase mb-2">
                        Coming Soon
                      </h4>
                      <p className="text-white/70 text-sm text-center px-8">
                        Stay tuned - something exciting is on the way.
                      </p>
                    </div>
                  ) : (
                    /* Normal hover overlay with links */
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {hasDeployment ? (
                        <a
                          href={project.deployment}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open deployment for ${project.title}`}
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          aria-label={`Deployment coming soon for ${project.title}`}
                          title="Deployment coming soon"
                          className="p-3 rounded-full glass text-muted-foreground/60 cursor-not-allowed opacity-55"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </button>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open GitHub repository for ${project.title}`}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 shrink-0
                    text-muted-foreground group-hover:text-primary
                     group-hover:translate-x-1
                     group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
