import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Target, TrendingUp, Users } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  const leftAnimation = useScrollAnimation();
  const rightAnimation = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-muted/30" id="about">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Logo */}
            <div
              ref={leftAnimation.ref}
              className={`order-2 md:order-1 transition-all duration-700 flex justify-center md:justify-start ${
                leftAnimation.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <div className="relative max-w-md w-full">
                {/* Glow effect */}
                <div className="absolute -inset-4 gradient-bg-primary rounded-3xl blur-2xl opacity-20" />
                
                {/* Main card */}
                <div className="relative shadow-hard w-full aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center border-4 border-background overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                  
                  {/* Logo */}
                  <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-background">
                    <img 
                      src={logo} 
                      alt="Priya Mishra" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Achievement badge */}
                <div className="absolute -bottom-4 md:-bottom-6 left-1/2 md:left-auto md:-right-6 transform -translate-x-1/2 md:translate-x-0 bg-card p-4 md:p-6 shadow-hard border border-border hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary">Employee of</div>
                      <div className="text-xs text-black dark:text-white">the Quarter</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div
              ref={rightAnimation.ref}
              className={`order-1 md:order-2 space-y-6 transition-all duration-700 ${
                rightAnimation.isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  <Users className="h-4 w-4" />
                  <span>About Me</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Driving Growth Through <span className="gradient-text">Strategic Marketing</span>
                </h2>
                <div className="w-20 h-1 gradient-bg-primary rounded-full" />
              </div>

              <p className="text-lg text-white dark:text-white leading-relaxed">
                Performance-driven Social Media Marketing Specialist with{" "}
                <span className="text-primary font-semibold">2+ years of experience</span> in
                paid campaigns, lead generation, and social media growth.
              </p>

              <p className="text-lg text-white dark:text-white leading-relaxed">
                Skilled in{" "}
                <span className="text-primary font-semibold">
                  Google Ads, Meta Ads Manager, LinkedIn Ads
                </span>
                , and Sales Navigator, with proven ability to generate high-quality B2B & B2C
                leads and deliver{" "}
                <span className="text-primary font-semibold">5x-6x ROI</span> through targeted
                campaigns.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-card p-5 border border-border shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">5x-6x</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">Average ROI</div>
                  <div className="text-xs text-black dark:text-white">Delivered consistently</div>
                </div>

                <div className="bg-card rounded-xl p-5 border border-border shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="text-2xl font-bold gradient-text">10+</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">Client Brands</div>
                  <div className="text-xs text-black dark:text-white">Successfully managed</div>
                </div>
              </div>

              {/* Location & Education */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <span className="text-lg">📍</span>
                  <div>
                    <div className="text-sm font-semibold text-primary">Delhi, India</div>
                    <div className="text-xs text-black dark:text-white">Based in</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <span className="text-lg">🎓</span>
                  <div>
                    <div className="text-sm font-semibold text-primary">B.Sc. (2022-2025)</div>
                    <div className="text-xs text-black dark:text-white">Education</div>
                  </div>
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
