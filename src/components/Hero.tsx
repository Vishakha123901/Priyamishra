import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
        
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border-2 border-accent/20 rounded-lg -rotate-12 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-primary/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Digital Marketing Expert</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="block text-foreground">Hi, I'm</span>
                  <span className="block gradient-text mt-2">Priya Mishra</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Transforming brands through data-driven campaigns and strategic marketing excellence
                </p>
              </div>

              {/* Key Points */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-muted-foreground">5x-6x ROI Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="text-muted-foreground">1200+ Leads Generated</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="text-muted-foreground">8.9M Campaign Views</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-hard transition-smooth hover:scale-105 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Let's Work Together
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-border hover:bg-muted shadow-soft hover:shadow-medium transition-smooth hover:scale-105"
                  onClick={() => window.open('https://linkedin.com/in/priya-mishra-35a827281', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  View Profile
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                <a href="mailto:priyamishra242509pm@gmail.com" className="flex items-center gap-2 hover:text-primary transition-smooth group">
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  priyamishra242509pm@gmail.com
                </a>
                <a href="tel:+916307267385" className="flex items-center gap-2 hover:text-primary transition-smooth group">
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  +91 6307267385
                </a>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Stat Card 1 */}
              <div className="col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-primary/20 hover:shadow-medium transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/20 rounded-xl group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold gradient-text">2+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Professional Experience</h3>
                <p className="text-sm text-muted-foreground">Delivering exceptional results across diverse industries</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-secondary/20 hover:shadow-medium transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-secondary/20 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">1200+</div>
                <div className="text-sm text-muted-foreground">Quality Leads</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-accent/20 hover:shadow-medium transition-all duration-300 hover:scale-105 group">
                <div className="p-3 bg-accent/20 rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">8.9M</div>
                <div className="text-sm text-muted-foreground">Campaign Views</div>
              </div>

              {/* Expertise Badge */}
              <div className="col-span-2 bg-card/80 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Lead Generation', 'Social Media', 'ROI Optimization'].map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-muted rounded-lg text-xs font-medium hover:bg-muted/70 transition-smooth cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
