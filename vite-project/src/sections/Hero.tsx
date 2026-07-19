import { ArrowRight, Github, Linkedin } from "lucide-react";

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-[#06141B] pt-20 overflow-hidden">
            {/* Background Watermark */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
                <span 
                    className="absolute font-bold leading-none text-[#11212D] opacity-40" 
                    style={{ 
                        fontFamily: 'Space Grotesk, sans-serif', 
                        fontSize: '28vw',
                        top: '80px', /* 80px matches the pt-20 of the section, putting it just below navbar */
                        left: '-2vw',
                        lineHeight: 0.85
                    }}
                >
                    SJ
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 animate-entrance">
                        <div className="space-y-4">
                            <p className="text-sm font-mono-custom text-[#9BA8AB]">
                                &lt;01&gt; software engineer / ai-ml
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#CCD0CF]">
                                Senan<br />Jayasinghe
                            </h1>
                        </div>

                        <p className="text-lg text-[#9BA8AB] max-w-lg leading-relaxed">
                            I build full-stack platforms, RAG pipelines, and ML models that go beyond prototypes, with the architecture and edge cases handled to actually ship to production.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                            {/* CTA Button */}
                            <button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#E5E7EB] text-[#06141B] font-medium rounded hover:shadow-[0_8px_20px_-8px_rgba(229,231,235,0.4)] transition-all duration-300 hover:-translate-y-[2px] cursor-pointer border-0 outline-none"
                            >
                                view work
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[4px]" />
                            </button>

                            {/* Scroll Indicator 
                            <span className="text-sm font-mono-custom text-[#9BA8AB] hidden sm:block">
                                scroll to explore
                            </span>*/}
                        </div>

                        {/* Social Buttons */}
                        <div className="flex items-center gap-4 pt-6">
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

                    {/* Right Column - Photo & Bubbles */}
                    <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-entrance animation-delay-200">
                        {/* Photo Circle */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-[#253745] bg-[#11212D] flex items-center justify-center animate-float-photo z-10 shadow-xl overflow-hidden">
                            {/* Photo */}
                            <img src="/profile-photo2.jpeg" alt="Senan Jayasinghe" className="absolute inset-0 w-full h-full object-cover" />
                        </div>

                        {/* Floating Bubbles */}
                        <div className="absolute top-[10%] left-[15%] px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-sm font-mono-custom text-[#CCD0CF] animate-bubble-1" style={{ animationDelay: '0s' }}>
                            react
                        </div>
                        <div className="absolute top-[20%] right-[10%] px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-sm font-mono-custom text-[#CCD0CF] animate-bubble-2" style={{ animationDelay: '0.4s' }}>
                            .net
                        </div>
                        <div className="absolute bottom-[15%] left-[20%] px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-sm font-mono-custom text-[#CCD0CF] animate-bubble-3" style={{ animationDelay: '0.8s' }}>
                            python
                        </div>
                        <div className="absolute bottom-[25%] right-[15%] px-4 py-1.5 rounded-full border border-[#253745] bg-[#11212D] text-sm font-mono-custom text-[#CCD0CF] animate-bubble-4" style={{ animationDelay: '1.2s' }}>
                            langchain
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};