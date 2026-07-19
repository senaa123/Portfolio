import { ChevronDown } from "lucide-react";

const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Python",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
    "TailwindCSS"
];

export const TechMarquee = () => {
    // Duplicate the array so it can scroll seamlessly
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <section className="relative w-full bg-[#06141B] py-16 overflow-hidden flex flex-col items-center border-t border-b border-[#11212D]/30">
            {/* Heading */}
            <h3 
                className="text-center mb-12"
                style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    color: "#9BA8AB", 
                    fontSize: "15px",
                    fontWeight: 500
                }}
            >
                What I build with
            </h3>

            {/* Marquee Container */}
            <div 
                className="relative w-full max-w-7xl mx-auto overflow-hidden flex items-center"
                style={{
                    maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)"
                }}
            >
                {/* Scrolling Track */}
                <div className="flex animate-marquee w-max">
                    {duplicatedTech.map((tech, index) => (
                        <span 
                            key={`${tech}-${index}`}
                            className="mx-8 lg:mx-12 cursor-default transition-colors duration-300"
                            style={{ 
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "26px",
                                fontWeight: 700,
                                color: "#253745"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "#4A5C6A"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "#253745"}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 flex flex-col items-center gap-3">
                <span 
                    className="uppercase tracking-[0.2em]"
                    style={{ 
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: "#9BA8AB"
                    }}
                >
                    scroll
                </span>
                <ChevronDown className="w-5 h-5 text-[#4A5C6A] animate-bounce-soft" />
            </div>
        </section>
    );
};
