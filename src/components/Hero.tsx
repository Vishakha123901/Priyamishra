import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Priya Mishra</span>
              <span className="block gradient-text mt-2">Digital Marketing Specialist</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Performance-driven marketing expert specializing in paid campaigns, lead generation, 
              and social media growth with proven 5x-6x ROI results
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-smooth">
              <div className="text-4xl font-bold gradient-text">2+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-smooth">
              <div className="text-4xl font-bold gradient-text">1200+</div>
              <div className="text-sm text-muted-foreground mt-1">Leads Generated</div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-smooth">
              <div className="text-4xl font-bold gradient-text">8.9M</div>
              <div className="text-sm text-muted-foreground mt-1">Campaign Views</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-hard transition-smooth"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-soft hover:shadow-medium transition-smooth"
              onClick={() => window.open('https://linkedin.com/in/priya-mishra-35a827281', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground pt-4">
            <a href="mailto:priyamishra242509pm@gmail.com" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Mail className="h-4 w-4" />
              priyamishra242509pm@gmail.com
            </a>
            <a href="tel:+916307267385" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Phone className="h-4 w-4" />
              +91 6307267385
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
