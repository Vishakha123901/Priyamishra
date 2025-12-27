import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full max-w-full bg-black">
      {/* Desktop - Banner Image */}
      <div className="hidden md:block w-full max-w-full">
        <img 
          src="https://res.cloudinary.com/dez7clpi8/image/upload/v1764699237/Screenshot_2025-12-02_234329_udxynn.png"
          alt="Hero Background"
          className="w-full h-auto object-cover block"
        />
      </div>

      {/* Mobile - Text Content */}
      <div className="block md:hidden min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center space-y-8 max-w-md mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-white text-sm font-medium shadow-lg">
            <Sparkles className="h-4 w-4" />
            <span>Digital Marketing Expert</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight leading-tight">
              <span className="block text-white">PRIYA MISHRA</span>
            </h1>
            <h2 className="text-xl font-bold text-primary">
              SOCIAL MEDIA MANAGER | DIGITAL MARKETING SPECIALIST | GROW BRANDS ONLINE
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Turn clicks into customers with data-driven digital marketing strategies!
            </p>
          </div>

          {/* Contact Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 group px-8 py-6 text-lg w-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              CONTACT US
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 pt-4">
            <a href="mailto:priyamishra242509pm@gmail.com" className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-smooth">
              <Mail className="h-4 w-4" />
              priyamishra242509pm@gmail.com
            </a>
            <a href="tel:+916307267385" className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-smooth">
              <Phone className="h-4 w-4" />
              +916307267385
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
