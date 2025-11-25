import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-medium border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity bg-primary/30" />
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-medium ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img 
                    src={logo} 
                    alt="Priya Mishra Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="font-bold text-lg">Priya Mishra</div>
                <div className="text-xs text-muted-foreground">
                  Digital Marketing Specialist
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth rounded-lg hover:bg-muted"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                size="sm"
                variant="ghost"
                className="text-foreground hover:text-primary"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/priya-mishra-35a827281",
                    "_blank"
                  )
                }
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-medium transition-smooth"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center">
          <nav className="space-y-2 px-6 w-full max-w-sm">
            {navigation.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left px-6 py-4 text-lg font-medium text-foreground hover:text-primary transition-all duration-300 rounded-xl hover:bg-muted hover:scale-105"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMobileMenuOpen
                    ? "slide-in-right 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 px-6 w-full max-w-sm space-y-3">
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-hard transition-smooth"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/priya-mishra-35a827281",
                  "_blank"
                )
              }
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
