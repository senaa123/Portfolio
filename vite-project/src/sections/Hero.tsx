import { ArrowRight, Github, Linkedin } from "lucide-react";

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-[#06141B] pt-20 overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-x-0 top-20 h-40 lg:inset-0 lg:h-auto overflow-hidden pointer-events-none select-none z-0">
                <span 
                    className="absolute font-bold leading-none text-[#11212D] opacity-40 text-[clamp(90px,28vw,130px)] lg:text-[28vw] whitespace-nowrap tracking-[-0.03em]" 
                    style={{ 
                        fontFamily: 'Space Grotesk, sans-serif', 
                        top: '80px', /* 80px matches the pt-20 of the section, putting it just below navbar */
                        left: '-2vw',
                        lineHeight: 0.85
                    }}
                >
                    SJ
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Intro */}
                    <div className="space-y-4 animate-entrance lg:col-start-1 lg:row-start-1">
                            <p className="text-sm font-mono-custom text-[#9BA8AB]">
                                &lt;01&gt; software engineer / ai-ml
                            </p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#CCD0CF]">
                                Senan<br />Jayasinghe
                            </h1>
                    </div>

                    {/* Photo & Floating Tags */}
                    <div className="relative h-[260px] sm:h-[320px] lg:h-[500px] flex items-center justify-center animate-entrance animation-delay-200 lg:col-start-2 lg:row-start-1 lg:row-span-2">
                        <div className="relative w-36 h-36 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full border border-[#253745] bg-[#11212D] flex items-center justify-center animate-float-photo z-10 shadow-xl overflow-hidden">
                            <img src="/profile-photo2.jpeg" alt="Senan Jayasinghe" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-[20%] left-[20%] sm:left-[17%] lg:left-[17%] lg:left-[8%] px-3 sm:px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-xs sm:text-sm font-mono-custom text-[#CCD0CF] animate-bubble-1" style={{ animationDelay: "0s" }}>AWS</div>
                        <div className="absolute top-[17%] right-[18%] sm:right-[15%] lg:right-[15%] px-3 sm:px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-xs sm:text-sm font-mono-custom text-[#CCD0CF] animate-bubble-2" style={{ animationDelay: "0.4s" }}>.NET</div>
                        <div className="absolute bottom-[11%] left-[25%] sm:left-[25%] lg:left-[25%] px-3 sm:px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-xs sm:text-sm font-mono-custom text-[#CCD0CF] animate-bubble-3" style={{ animationDelay: "0.8s" }}>Python</div>
                        <div className="absolute bottom-[18%] right-[20%] sm:right-[20%] lg:right-[20%] px-3 sm:px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-xs sm:text-sm font-mono-custom text-[#CCD0CF] animate-bubble-4" style={{ animationDelay: "1.2s" }}>YOLO</div>
                    </div>

                    {/* Description and actions */}
                    <div className="space-y-6 animate-entrance lg:col-start-1 lg:row-start-2">
                        <p className="text-base sm:text-lg text-[#9BA8AB] max-w-lg leading-relaxed">
                            I build full-stack platforms, RAG pipelines, and ML models that go beyond prototypes, with the architecture and edge cases handled to actually ship to production.
                        </p>

                        <div className="flex flex-col items-stretch sm:items-start gap-4 pt-2">
                            {/* CTA Button */}
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative w-full sm:w-auto justify-center inline-flex items-center gap-3 px-6 py-3 bg-[#E5E7EB] text-[#06141B] font-medium rounded hover:shadow-[0_8px_20px_-8px_rgba(229,231,235,0.4)] transition-all duration-300 hover:-translate-y-[2px] cursor-pointer border-0 outline-none"
                            >
                                view work
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[4px]" />
                            </button>

                            
                        </div>

                        {/* Social Buttons */}
                        <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                            <a
                                href="https://github.com/senaa123/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#FFFFFF] hover:border-[#4A5C6A]"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/senan-jayasinghe/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded border border-[#253745] text-[#4A5C6A] transition-all duration-300 hover:-translate-y-[2px] hover:text-[#FFFFFF] hover:border-[#4A5C6A]"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
