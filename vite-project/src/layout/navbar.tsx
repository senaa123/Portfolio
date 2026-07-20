import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    { id: "hero",     label: "home"     },
    { id: "about",    label: "about"    },
    { id: "skills",   label: "skills"   },
    { id: "projects", label: "projects" },
    { id: "contact",  label: "contact"  },
];



export const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [activeId, setActiveId] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            for (const item of [...navItems].reverse()) {
                const el = document.getElementById(item.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveId(item.id);
                        return;
                    }
                }
            }
            setActiveId("hero");
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: "rgba(6, 20, 27, 0.55)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 12px 20px -14px rgba(6, 20, 27, 0.9)",
            }}
        >
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">

                {/* Logo */}
                <a
                    href="/#hero"
                    className="flex items-center gap-3 group bg-transparent border-0 outline-none cursor-pointer no-underline"
                >
                    <div
                        className="w-10 h-10 flex items-center justify-center border border-[#253745] rounded-md text-sm text-[#CCD0CF] animate-logo-box select-none"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        <span>&lt;</span>
                        <span className="animate-logo-slash">/</span>
                        <span>&gt;</span>
                    </div>
                    <span className="text-[#CCD0CF] font-bold text-base sm:text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Senan Jayasinghe
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`/#${item.id}`}
                            className={`relative text-sm font-medium transition-colors duration-200 bg-transparent border-0 outline-none cursor-pointer pb-1 no-underline ${
                                activeId === item.id
                                    ? "text-[#CCD0CF]"
                                    : "text-[#9BA8AB] hover:text-[#CCD0CF]"
                            }`}
                        >
                            {item.label}
                            {activeId === item.id && (
                                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#CCD0CF] rounded-full" />
                            )}
                        </a>
                    ))}
                </div>

                {/* Resume Button */}
                <div className="hidden lg:block">
                    <a
                        href="/Senan_Jayasinghe_CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-[#253745] rounded-md text-[#CCD0CF] transition-all duration-300 hover:bg-white hover:text-[#06141B] hover:border-white"
                    >
                        <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[3px]" />
                        resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-[#CCD0CF] cursor-pointer bg-transparent border-0 outline-none"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span className={`relative block w-6 h-5 ${isMobileMenuOpen ? "is-open" : ""}`}>
                        <span className={`absolute left-0 top-0 block h-[1.5px] w-6 bg-[#CCD0CF] transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "translate-y-[9px] rotate-45" : ""}`} />
                        <span className={`absolute left-0 top-1/2 block h-[1.5px] w-6 -translate-y-1/2 bg-[#CCD0CF] transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`absolute left-0 bottom-0 block h-[1.5px] w-6 bg-[#CCD0CF] transition-transform duration-300 ease-in-out origin-center ${isMobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
                    </span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? "max-h-[420px] translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0 pointer-events-none"}`}
                style={{ backgroundColor: "rgba(6, 20, 27, 0.97)", backdropFilter: "blur(10px)" }}
            >
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`/#${item.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-left text-lg py-2 transition-colors duration-200 bg-transparent border-0 outline-none cursor-pointer no-underline ${
                                    activeId === item.id
                                        ? "text-[#CCD0CF] font-medium"
                                        : "text-[#9BA8AB] hover:text-[#CCD0CF]"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="/Senan_Jayasinghe_CV.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="group mt-2 flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium border border-[#253745] rounded-md text-[#CCD0CF] transition-all duration-300 hover:bg-white hover:text-[#06141B]"
                        >
                            <Download className="w-4 h-4 group-hover:translate-y-[3px] transition-transform duration-300" />
                            resume
                        </a>
                    </div>
            </div>
        </header>
    );
};
