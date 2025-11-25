import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const headerAnimation = useScrollAnimation();
  const leftAnimation = useScrollAnimation();
  const rightAnimation = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden" id="contact">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${patternBg})` }}
        />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div 
            ref={headerAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              headerAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to elevate your digital marketing strategy? Let's discuss how we can drive results together
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div 
              ref={leftAnimation.ref}
              className={`space-y-6 transition-all duration-700 ${
                leftAnimation.isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:priyamishra242509pm@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      priyamishra242509pm@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:+916307267385"
                      className="text-muted-foreground hover:text-secondary transition-smooth"
                    >
                      +91 6307267385
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/priya-mishra-35a827281"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      linkedin.com/in/priya-mishra-35a827281
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div 
              ref={rightAnimation.ref}
              className={`bg-card rounded-2xl p-8 shadow-soft border border-border transition-all duration-700 ${
                rightAnimation.isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Ready to Work Together?</h3>
                    <p className="text-muted-foreground">
                      I specialize in delivering high-quality leads and measurable ROI through strategic 
                      digital marketing campaigns. Let's discuss your goals and create a winning strategy.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Google Ads & Meta Ads Specialist</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span>LinkedIn B2B Lead Generation Expert</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>Social Media Growth Strategist</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>ROI-Focused Campaign Manager</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-hard transition-smooth"
                    onClick={() => window.location.href = 'mailto:priyamishra242509pm@gmail.com'}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-soft hover:shadow-medium transition-smooth"
                    onClick={() => window.open('https://linkedin.com/in/priya-mishra-35a827281', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
