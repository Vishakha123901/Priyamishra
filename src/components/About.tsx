const About = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30" id="about">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Design */}
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-4 gradient-bg-primary rounded-3xl blur-2xl opacity-20" />
                <div className="relative rounded-3xl shadow-hard w-full aspect-square gradient-bg-primary flex items-center justify-center border-4 border-background overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-background/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-background/10 rounded-full blur-3xl" />
                  
                  {/* Initials */}
                  <div className="relative z-10 text-center">
                    <div className="text-8xl md:text-9xl font-bold text-background mb-4">PM</div>
                    <div className="text-xl md:text-2xl font-semibold text-background/90">Priya Mishra</div>
                    <div className="text-sm md:text-base text-background/70 mt-2">Digital Marketing Specialist</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-medium border border-border">
                  <div className="text-2xl font-bold gradient-text">🏆</div>
                  <div className="text-sm font-semibold mt-1">Employee of</div>
                  <div className="text-xs text-muted-foreground">the Quarter</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6 animate-slide-in-right">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-20 h-1 gradient-bg-primary rounded-full" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Performance-driven Social Media Marketing Specialist with <span className="text-primary font-semibold">2+ years of experience</span> in 
                paid campaigns, lead generation, and social media growth.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in <span className="text-secondary font-semibold">Google Ads, Meta Ads Manager, LinkedIn Ads</span>, and 
                Sales Navigator, with proven ability to generate high-quality B2B & B2C leads and deliver <span className="text-primary font-semibold">5x-6x ROI</span> through 
                targeted campaigns.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Experienced in team collaboration & leadership, managing campaign execution, and aligning 
                marketing strategies with business goals.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-card rounded-xl p-4 border border-border shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-1">📍</div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="text-xs text-muted-foreground">Delhi, India</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="text-2xl mb-1">🎓</div>
                  <div className="text-sm font-semibold">Education</div>
                  <div className="text-xs text-muted-foreground">B.Sc. (2022-2025)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
