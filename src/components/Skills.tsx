import { Target, BarChart3, Share2, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Paid Campaigns",
    icon: Target,
    color: "primary",
    skills: [
      "Google Ads",
      "Meta Ads Manager",
      "LinkedIn Ads",
      "YouTube Campaigns",
      "Display Ads",
      "Remarketing"
    ]
  },
  {
    title: "Analytics & Optimization",
    icon: BarChart3,
    color: "secondary",
    skills: [
      "Google Analytics",
      "A/B Testing",
      "ROI Tracking",
      "Conversion Strategy",
      "Keyword Research",
      "Performance Metrics"
    ]
  },
  {
    title: "Social Media Tools",
    icon: Share2,
    color: "accent",
    skills: [
      "Buffer",
      "Hootsuite",
      "Canva",
      "SEMrush",
      "HubSpot",
      "Meta Business Suite"
    ]
  },
  {
    title: "Growth Marketing",
    icon: TrendingUp,
    color: "primary",
    skills: [
      "LinkedIn Growth Strategy",
      "Engagement Marketing",
      "Influencer Marketing",
      "Lead Generation",
      "Content Strategy",
      "Community Building"
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30" id="skills">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing toolkit spanning paid advertising, analytics, and growth strategies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${
                      category.color === 'primary' 
                        ? 'bg-primary/10' 
                        : category.color === 'secondary' 
                        ? 'bg-secondary/10' 
                        : 'bg-accent/10'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        category.color === 'primary' 
                          ? 'text-primary' 
                          : category.color === 'secondary' 
                          ? 'text-secondary' 
                          : 'text-accent'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-muted rounded-lg text-sm font-medium hover:bg-muted/70 transition-smooth cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
