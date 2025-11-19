import { Award, Star, Trophy, Target, TrendingUp, Users, Sparkles, Crown, Medal } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Awards = () => {
  const headerAnimation = useScrollAnimation();
  const mainAwardAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" id="awards">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              headerAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Trophy className="h-4 w-4" />
              <span>Recognition</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Awards & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Recognized for excellence and outstanding contributions in digital marketing
            </p>
          </div>

          {/* Main Award - Featured */}
          <div
            ref={mainAwardAnimation.ref}
            className={`mb-12 transition-all duration-700 ${
              mainAwardAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl opacity-60 animate-pulse" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-card via-card to-card/95 rounded-3xl p-8 md:p-12 shadow-hard border border-border overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

                <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 items-center">
                  {/* Trophy Icon */}
                  <div className="flex justify-center md:justify-start">
                    <div className="relative">
                      {/* Rotating ring */}
                      <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-spin" style={{ animationDuration: '8s' }} />
                      <div className="absolute inset-2 rounded-full border-4 border-accent/20 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                      
                      {/* Center icon */}
                      <div className="relative w-32 h-32 md:w-40 md:h-40 gradient-bg-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <Crown className="h-16 w-16 md:h-20 md:w-20 text-white" />
                      </div>

                      {/* Sparkles */}
                      <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-accent animate-pulse" />
                      <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left">
                    {/* Stars */}
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-accent fill-accent"
                          style={{
                            animation: 'pulse 2s ease-in-out infinite',
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-primary transition-colors">
                      Employee of the Quarter
                    </h3>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                      <Medal className="h-5 w-5 text-primary" />
                      <p className="text-lg font-semibold text-primary">
                        Spill Your Thought
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                      Recognized for{" "}
                      <span className="text-foreground font-semibold">
                        outstanding performance
                      </span>
                      , exceptional contribution to team success, and consistently exceeding goals
                      and expectations. Demonstrated excellence in social media management and
                      campaign execution, driving{" "}
                      <span className="text-foreground font-semibold">measurable results</span>{" "}
                      across multiple client accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div
            ref={statsAnimation.ref}
            className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
              statsAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Stat 1 */}
            <div
              className="relative group"
              style={{ transitionDelay: '0ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">5x-6x</div>
                  </div>
                </div>
                <h4 className="text-sm font-semibold mb-1">Average ROI</h4>
                <p className="text-xs text-muted-foreground">Consistently Delivered</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div
              className="relative group"
              style={{ transitionDelay: '150ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">10+</div>
                  </div>
                </div>
                <h4 className="text-sm font-semibold mb-1">Client Campaigns</h4>
                <p className="text-xs text-muted-foreground">Successfully Managed</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div
              className="relative group"
              style={{ transitionDelay: '300ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold gradient-text">Top Voice</div>
                  </div>
                </div>
                <h4 className="text-sm font-semibold mb-1">LinkedIn Recognition</h4>
                <p className="text-xs text-muted-foreground">Industry Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
