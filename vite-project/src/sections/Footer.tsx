import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {

    const quickLinks = [
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" }
    ];

    return (
        <footer className="relative bg-[#11212D] pt-20 pb-8 text-[#9BA8AB]">
            {/* Top Divider with Soft Glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] flex justify-center">
                {/* Base gradient line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#253745] to-transparent" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4A5C6A] to-transparent blur-[2px] opacity-50" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    
                    {/* Left Column: Name & Status */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl font-bold text-[#CCD0CF] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                            Senan Jayasinghe
                        </h2>
                        <p className="font-mono-custom text-sm mb-8">
                            software engineer / ai-ml
                        </p>
                        
                        <div className="flex items-center">
                            <span
                                className="font-mono-custom"
                                style={{ fontSize: "13px", color: "#CCD0CF" }}
                            >
                                <span className="text-[#9BA8AB]">[</span>
                                {" "}open_to_work{" "}
                                <span className="text-[#9BA8AB]">]</span>
                            </span>
                            <span className="font-mono-custom text-[#CCD0CF] animate-blink" style={{ fontSize: "13px" }}>_</span>
                        </div>
                    </div>

                    {/* Middle Column: Quick Links */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-medium tracking-wider uppercase text-[#CCD0CF] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                            QUICK LINKS
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="inline-block transition-all duration-250 ease-out hover:text-white hover:translate-x-[3px]"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Socials */}
                    <div className="flex flex-col">
                        <h3 className="text-sm font-medium tracking-wider uppercase text-[#CCD0CF] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                            CONNECT
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href="https://github.com/senaa123" 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2.5 rounded-lg border border-[#253745] text-[#4A5C6A] transition-all duration-250 hover:-translate-y-[2px] hover:border-[#4A5C6A] hover:text-[#CCD0CF]"
                            >
                                <Github className="w-[17px] h-[17px]" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/senan-jayasinghe/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2.5 rounded-lg border border-[#253745] text-[#4A5C6A] transition-all duration-250 hover:-translate-y-[2px] hover:border-[#4A5C6A] hover:text-[#CCD0CF]"
                            >
                                <Linkedin className="w-[17px] h-[17px]" />
                            </a>
                            <a 
                                href="mailto:senandulneth1@gmail.com" 
                                className="p-2.5 rounded-lg border border-[#253745] text-[#4A5C6A] transition-all duration-250 hover:-translate-y-[2px] hover:border-[#4A5C6A] hover:text-[#CCD0CF]"
                            >
                                <Mail className="w-[17px] h-[17px]" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#11212D] flex justify-center items-center">
                    <p className="font-mono-custom text-xs text-[#9BA8AB] text-center">
                        © 2026 senan jayasinghe. all rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
