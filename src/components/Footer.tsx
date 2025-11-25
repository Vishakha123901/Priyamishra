import { Mail, Phone, Linkedin, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from "@/assets/logo.png";

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
      className={`relative bg-black border-t border-white/10 text-white overflow-hidden transition-all duration-1000 ${footerAnimation.isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
        }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="relative container px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-50 bg-primary/30 group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl ring-2 ring-white/10 group-hover:ring-primary/50 transition-all duration-500">
                    <img
                      src={logo}
                      alt="Priya Mishra Logo"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Priya <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Mishra</span>
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    Digital Marketing Specialist
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                Performance-driven marketing expert specializing in paid campaigns,
                lead generation, and social media growth with proven 5x-6x ROI results.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/priya-mishra-35a827281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/5 hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:priyamishra242509pm@gmail.com"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/5 hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="tel:+916307267385"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/5 hover:border-primary/50 flex items-center justify-center transition-all duration-300 group"
                >
                  <Phone className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Quick Links</h4>
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
                      className="text-gray-400 hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-lg text-white">Get In Touch</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="mailto:priyamishra242509pm@gmail.com"
                    className="flex items-start gap-3 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/10 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="break-all mt-1">priyamishra242509pm@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916307267385"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-md bg-white/5 group-hover:bg-primary/10 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>+91 6307267385</span>
                  </a>
                </li>
                <li>
                  <p className="flex items-start gap-3 text-gray-400">
                    <div className="p-2 rounded-md bg-white/5">
                      <span className="text-sm">📍</span>
                    </div>
                    <span className="mt-1">Delhi, India</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
              <p>© {currentYear} Priya Mishra. All rights reserved.</p>
              <span className="hidden md:block text-gray-700">•</span>
              <p className="flex items-center gap-1.5">
                Crafted with{" "}
                <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />{" "}
                for digital excellence
              </p>
            </div>

            {/* Back to top button */}
            <Button
              size="sm"
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-primary hover:text-white text-gray-300 border border-white/5 hover:border-primary shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
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
