import { Target, BarChart3, Share2, TrendingUp, Sparkles, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Paid Campaigns",
    icon: Target,
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
    skills: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "YouTube Campaigns", "Display Ads", "Remarketing"],
  },
  {
    title: "Analytics & Optimization",
    icon: BarChart3,
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
    skills: ["Google Analytics", "A/B Testing", "ROI Tracking", "Conversion Strategy", "Keyword Research", "Performance Metrics"],
  },
  {
    title: "Social Media Tools",
    icon: Share2,
    color: "accent",
    gradient: "from-accent/20 to-accent/5",
    skills: ["Buffer", "Hootsuite", "Canva", "SEMrush", "HubSpot", "Meta Business Suite"],
  },
  {
    title: "Growth Marketing",
    icon: TrendingUp,
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
    skills: ["LinkedIn Growth", "Engagement Marketing", "Influencer Marketing", "Lead Generation", "Content Strategy", "Community Building"],
  },
];

const Skills = () => {
  const headerAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
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
              <Sparkles className="h-4 w-4" />
              <span>My Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Capabilities</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-black dark:text-white text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing toolkit spanning paid advertising, analytics, and growth strategies
            </p>
          </div>

          {/* Skills Grid - New Design */}
          <div
            ref={gridAnimation.ref}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                category={category}
                index={index}
                isVisible={gridAnimation.isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({
  category,
  index,
  isVisible,
}: {
  category: (typeof skillCategories)[0];
  index: number;
  isVisible: boolean;
}) => {
  const Icon = category.icon;

  return (
    <div
      className={`relative group transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card */}
      <div className={`relative bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-3xl p-6 border border-border shadow-soft hover:shadow-hard transition-all duration-300 hover:scale-105 cursor-pointer h-full`}>
        {/* Glow effect on hover */}
        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl ${
          category.color === "primary"
            ? "bg-primary/20"
            : category.color === "secondary"
            ? "bg-secondary/20"
            : "bg-accent/20"
        }`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div
              className={`inline-flex p-4 rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                category.color === "primary"
                  ? "bg-primary/20"
                  : category.color === "secondary"
                  ? "bg-secondary/20"
                  : "bg-accent/20"
              }`}
            >
              <Icon
                className={`h-8 w-8 ${
                  category.color === "primary"
                    ? "text-primary"
                    : category.color === "secondary"
                    ? "text-secondary"
                    : "text-accent"
                }`}
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-4 text-black dark:text-white group-hover:text-primary transition-colors">
            {category.title}
          </h3>

          {/* Skills as tags */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/50 backdrop-blur-sm rounded-lg text-xs font-medium text-primary border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-200 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 150 + i * 50}ms` }}
              >
                <Zap className={`h-3 w-3 ${
                  category.color === "primary"
                    ? "text-primary"
                    : category.color === "secondary"
                    ? "text-secondary"
                    : "text-accent"
                }`} />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Corner decoration */}
        <div className={`absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 ${
          category.color === "primary"
            ? "bg-primary"
            : category.color === "secondary"
            ? "bg-secondary"
            : "bg-accent"
        } blur-2xl group-hover:opacity-40 transition-opacity`} />
      </div>
    </div>
  );
};

export default Skills;
