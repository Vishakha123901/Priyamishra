import { Award, Star } from "lucide-react";

const Awards = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30" id="awards">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto" />
          </div>

          {/* Award Card */}
          <div className="relative animate-scale-in">
            {/* Background glow */}
            <div className="absolute -inset-4 gradient-bg-primary rounded-3xl blur-2xl opacity-20" />
            
            {/* Card content */}
            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-hard border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative w-24 h-24 md:w-32 md:h-32 gradient-bg-primary rounded-full flex items-center justify-center shadow-medium">
                      <Award className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <Star className="h-5 w-5 text-accent fill-accent" />
                    <Star className="h-5 w-5 text-accent fill-accent" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Employee of the Quarter
                  </h3>
                  
                  <p className="text-lg font-semibold text-primary mb-4">
                    Spill Your Thought
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Recognized for <span className="text-foreground font-semibold">outstanding performance</span>, 
                    exceptional contribution to team success, and consistently exceeding goals and expectations. 
                    Demonstrated excellence in social media management and campaign execution, driving 
                    <span className="text-foreground font-semibold"> measurable results</span> across multiple client accounts.
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-secondary/20 rounded-full" />
            </div>
          </div>

          {/* Additional achievements */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-xl font-bold gradient-text mb-1">5x-6x</div>
              <div className="text-sm text-muted-foreground">Average ROI Delivered</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-xl font-bold gradient-text mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Successful Client Campaigns</div>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-xl font-bold gradient-text mb-1">Top Voice</div>
              <div className="text-sm text-muted-foreground">LinkedIn Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
