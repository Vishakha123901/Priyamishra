import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Priya <span className="text-primary">Mishra</span>
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Digital Marketing Specialist delivering performance-driven results through 
                strategic campaigns and data-driven optimization.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#about" 
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-background/80 hover:text-primary transition-smooth"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a 
                    href="mailto:priyamishra242509pm@gmail.com"
                    className="flex items-center gap-2 text-background/80 hover:text-primary transition-smooth"
                  >
                    <Mail className="h-4 w-4" />
                    priyamishra242509pm@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+916307267385"
                    className="flex items-center gap-2 text-background/80 hover:text-primary transition-smooth"
                  >
                    <Phone className="h-4 w-4" />
                    +91 6307267385
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/priya-mishra-35a827281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-background/80 hover:text-primary transition-smooth"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
              <p>
                © {currentYear} Priya Mishra. All rights reserved.
              </p>
              <p className="flex items-center gap-1">
                Crafted with <Heart className="h-4 w-4 text-primary fill-primary" /> for digital excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
