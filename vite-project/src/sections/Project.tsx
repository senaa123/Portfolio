import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";
const projects = [
  {
    title: "Bidify - Online Bidding Platform",
    description:
      "Modern betting website with smooth animations and responsive design. Built with HTML, CSS and JavaScript Fronend and Java backend.",
    image: "/project/bidify.jpg",
    tags: ["Java", "JavaScript", "SQL","HTML", "CSS"],
    link: "#",
    github: "https://github.com/senaa123/Bidify",
  },
  {
    title: "Snazzy - Smart Shoe Store",
    description:
      "Full-stack e-commerce site with React frontend, Node.js backend, and MongoDB database. Features cart functionality and payment processing.",
    image: "/project/snazzy.jfif",
    tags: ["Node.js","React", "Stripe", "Express", "MongoDB"],
    link: "#",
    github: "https://github.com/BinadaPasandul/snazzy",
  },
  {
    title: "Wed.In - Wedding Reservation System",
    description:
      "A wedding hotel reservation system with booking, hotel listing and admin management features.",
    image: "/project/Wedin.jfif",
    tags: ["PHP", "HTML", "CSS", "Java Script", "SQL"],
    link: "#",
    github: "https://github.com/senaa123/Hotel-Reservation-System-for-Weddings",
  },
  {
    title: "BookMe - Online Reservation App",
    description:
      "A smart app to easily book restaurants, cafés, and hotels all in one place Using Kotline (only frontend)",
    image: "/project/bookme.jfif",
    tags: ["Kotlin", "Android", "UI/UX Design"],
    link: "#",
    github: "https://github.com/senaa123/BookNow",
  },
  {
    title: "Movie Reviews Sentiment Analysis",
    description:
      "A machine learning project that analyzes movie reviews to automatically determine whether the sentiment expressed is positive or negative",
    image: "/project/movie.jpg",
    tags: ["Python", "ML", "TF-IDF"],
    link: "#",
    github: "https://github.com/senaa123/Movie-Reviews-Sentiment-Analysis",
  },
  {
    title: "Stock Price Predictor",
    description:
      "model that analyzes historical stock data to forecast future price movements and trends",
    image: "/project/stock2.jpg",
    tags: ["Python", "ML", "yfinance","numpy", "LSTM"],
    link: "#",
    github: "https://github.com/senaa123/Stock-Price-Predictor",
  },
  {
    title: "Arfy AI — Personal Voice Assistant",
    description:
      "A Jarvis-style AI voice assistant that listens, thinks, remembers and acts — powered by LLaMA 70B and LangGraph.",
    image: "/project/arfy.jpg",
    tags: ["Python", "LangChain", "PyTorch", "Groq LLM"],
    link: "#",
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
            <span className="font-serif italic font-bold">
                {" "}
                I’ve
            </span> 
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
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 relative"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${"comingSoon" in project && project.comingSoon ? "group-hover:blur-sm group-hover:scale-100" : ""}`}
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {"comingSoon" in project && project.comingSoon ? (
                  /* Coming Soon overlay — image area only, on hover */
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <h4 className="text-2xl font-bold text-white tracking-widest uppercase mb-2">
                      Coming Soon
                    </h4>
                    <p className="text-white/70 text-sm text-center px-8">
                      Stay tuned — something exciting is on the way.
                    </p>
                  </div>
                ) : (
                  /* Normal hover overlay with links */
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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