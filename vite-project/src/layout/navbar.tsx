import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";

interface NavLink {
    href: string;
    label: string;
}
const navLinks: NavLink[] = [
    {href:"#", label:"Home"},
    {href:"#about", label:"About"},
    {href:"#skills", label:"Skills"},
    {href:"#projects", label:"Projects"},
    {href:"#contact", label:"Contact"},
]

export const NavBar = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [activeLink, setActiveLink] = useState("#");

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1) || 'hero');
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveLink(`#${currentSection}`);
      } else if (window.scrollY < 100) {
        setActiveLink("#");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight group"
          onClick={() => setActiveLink("#")}
        >
          <ArrowRight className="w-5 h-5 text-primary rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300" />
          <span className="text-foreground">Senan</span>
          <span className="text-primary">Jayasinghe</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={() => setActiveLink(link.href)}
              className={`relative text-sm font-medium transition-colors ${
                activeLink === link.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {activeLink === link.href && (
                <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
              )}
            </a>
          ))}
        </div>

        {/* Contact Me Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/25"
            onClick={() => setActiveLink("#contact")}
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveLink(link.href);
                }}
                className={`text-lg py-2 transition-colors ${
                  activeLink === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveLink("#contact");
              }}
              className="relative overflow-hidden rounded-lg px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25 mt-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};