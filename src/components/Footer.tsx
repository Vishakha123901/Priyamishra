import { Mail, Phone, Linkedin, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerAnimation = useScrollAnimation(0.1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      ref={footerAnimation.ref}
      className={`relative bg-gradient-to-br from-foreground via-foreground to-foreground/95 text-background overflow-hidden transition-all duration-1000 ${
        footerAnimation.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative container px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-50 bg-primary/30" />
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-medium ring-2 ring-background/20">
                    <img 
                      src={logo} 
                      alt="Priya Mishra Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Priya <span className="gradient-text">Mishra</span>
                  </h3>
                  <p className="text-sm text-background/70">
                    Digital Marketing Specialist
                  </p>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed mb-6 max-w-md">
                Performance-driven marketing expert specializing in paid campaigns, 
                lead generation, and social media growth with proven 5x-6x ROI results.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/priya-mishra-35a827281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                >
                  <Linkedin className="h-5 w-5 text-background/80 group-hover:text-white transition-smooth" />
                </a>
                <a
                  href="mailto:priyamishra242509pm@gmail.com"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                >
                  <Mail className="h-5 w-5 text-background/80 group-hover:text-white transition-smooth" />
                </a>
                <a
                  href="tel:+916307267385"
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-smooth group"
                >
                  <Phone className="h-5 w-5 text-background/80 group-hover:text-white transition-smooth" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "About Me", href: "#about" },
                  { name: "Experience", href: "#experience" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Awards", href: "#awards" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-primary transition-smooth hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:priyamishra242509pm@gmail.com"
                    className="flex items-start gap-2 text-background/80 hover:text-primary transition-smooth group"
                  >
                    <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">priyamishra242509pm@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916307267385"
                    className="flex items-center gap-2 text-background/80 hover:text-primary transition-smooth group"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+91 6307267385</span>
                  </a>
                </li>
                <li>
                  <p className="flex items-start gap-2 text-background/80">
                    <span className="text-lg">📍</span>
                    <span>Delhi, India</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-background/30 to-transparent mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-background/70">
              <p>© {currentYear} Priya Mishra. All rights reserved.</p>
              <span className="hidden md:block">•</span>
              <p className="flex items-center gap-1.5">
                Crafted with{" "}
                <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />{" "}
                for digital excellence
              </p>
            </div>

            {/* Back to top button */}
            <Button
              size="sm"
              onClick={scrollToTop}
              className="bg-background/10 hover:bg-primary text-background border-0 shadow-soft hover:shadow-medium transition-smooth group"
            >
              <span className="mr-2">Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
