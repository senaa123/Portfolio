import { TypewriterCode } from "../Components/TypewriterCode";

const aboutTokens = [
  [
    { text: "const", className: "text-[#4A5C6A]" },
    { text: " senan ", className: "text-[#CCD0CF]" },
    { text: "=", className: "text-[#4A5C6A]" },
    { text: " {", className: "text-[#CCD0CF]" }
  ],
  [
    { text: "  role", className: "text-[#9BA8AB]" },
    { text: ": ", className: "text-[#4A5C6A]" },
    { text: '"data science undergrad"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  university", className: "text-[#9BA8AB]" },
    { text: ": ", className: "text-[#4A5C6A]" },
    { text: '"SLIIT"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  specialization", className: "text-[#9BA8AB]" },
    { text: ": ", className: "text-[#4A5C6A]" },
    { text: '"data science"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  stack", className: "text-[#9BA8AB]" },
    { text: ": [", className: "text-[#4A5C6A]" },
    { text: '"react"', className: "text-[#CCD0CF]" },
    { text: ", ", className: "text-[#4A5C6A]" },
    { text: '"nestjs"', className: "text-[#CCD0CF]" },
    { text: ", ", className: "text-[#4A5C6A]" },
  ],
  [
    { text: '    "python"', className: "text-[#CCD0CF]" },
    { text: "],", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  interests", className: "text-[#9BA8AB]" },
    { text: ": [", className: "text-[#4A5C6A]" },
    { text: ' "agentic ai"', className: "text-[#CCD0CF]" },
    { text: ", ", className: "text-[#4A5C6A]" },
    { text: '"computer', className: "text-[#CCD0CF]" }
  ],
  [
    { text: '    vision"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" },
    { text: ' "full-stack"', className: "text-[#CCD0CF]" },
    { text: "],", className: "text-[#4A5C6A]" }
  ],
    [
    { text: "  exploring", className: "text-[#9BA8AB]" },
    { text: ": {", className: "text-[#4A5C6A]" },
    { text: ' "cloud"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" },
    { text: ' "fine-tuning"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" }
  ],
  [
    { text: ' "llms"', className: "text-[#CCD0CF]" },
    { text: "],", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  nowLearning", className: "text-[#9BA8AB]" },
    { text: ": [", className: "text-[#4A5C6A]" },
    { text: ' "vector search"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" },
    { text: ' "MLOps" ', className: "text-[#CCD0CF]" },
    { text: "],", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  funFact", className: "text-[#9BA8AB]" },
    { text: ": ", className: "text-[#4A5C6A]" },
    { text: '"debugs better after 2am"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  basedIn", className: "text-[#9BA8AB]" },
    { text: ": ", className: "text-[#4A5C6A]" },
    { text: '"colombo, lk"', className: "text-[#CCD0CF]" },
    { text: ",", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "  status", className: "text-[#9BA8AB]" },
    { text: ": ", className: "text-[#4A5C6A]" },
    { text: '"open_to_work"', className: "text-[#CCD0CF]" },
    { text: " // true", className: "text-[#4A5C6A]" }
  ],
  [
    { text: "};", className: "text-[#CCD0CF]" }
  ]
];

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#06141B]">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div className="mb-12 animate-entrance">
          <p className="text-sm font-mono-custom text-[#9BA8AB] mb-2">
            &lt;02&gt; about
          </p>
          <h2 className="text-4xl font-bold text-[#CCD0CF]">
            About me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8 text-[#9BA8AB] text-lg leading-relaxed animate-entrance animation-delay-100">
            <p>
              I'm a software engineer and AI/ML practitioner who builds systems end-to-end, from the interface a user touches to the data pipeline and model reasoning behind it. My full-stack work spans React, .NET, Node.js, and TypeScript, covering everything from e-commerce platforms to reservation systems.
            </p>
            <p>
              On the data and AI side, I work across the full pipeline: data ingestion and engineering, exploratory analysis, and building models with PyTorch and TensorFlow. I extend this into applied AI, including agentic systems with LangChain and LangGraph, and LLM powered voice assistants, turning raw data into systems that reason and act.
            </p>
            <p>
              I'm currently a Data Science undergraduate, which keeps my engineering grounded in statistical and analytical fundamentals rather than just tooling. I'm looking for opportunities where data, models, and engineering aren't treated as separate disciplines, where solving the problem well means being strong at all three.
            </p>
          </div>

          {/* Right Column - Code Card */}
          <div className="animate-entrance animation-delay-200 mobile-active-card">
            <TypewriterCode lines={aboutTokens} fileName="about.ts" typingSpeed={15} />
          </div>
        </div>
      </div>
    </section>
  );
};
