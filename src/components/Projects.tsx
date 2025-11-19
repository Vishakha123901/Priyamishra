import { TrendingUp, Users, Eye, Target, Briefcase, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Instagram Marketing – Vastukimaya",
    type: "Social Media Growth",
    icon: Eye,
    metrics: [
      { label: "Views", value: "1M+", color: "primary" },
      { label: "Engagement", value: "+150%", color: "secondary" },
    ],
    achievements: [
      "Designed content calendar with reels, stories, and carousels focused on emotional storytelling",
      "Helped the brand cross 1M+ views on reels with trend-based hooks and audience-driven content",
      "Executed influencer tie-ups in the astrology niche to boost organic engagement and credibility",
    ],
  },
  {
    title: "Cafe Branding – Cafe The Old School",
    type: "Local Business Marketing",
    icon: Target,
    metrics: [
      { label: "Footfall", value: "+65%", color: "accent" },
      { label: "Social Growth", value: "+200%", color: "primary" },
    ],
    achievements: [
      "Built monthly content calendar showcasing food culture, café vibes, and customer experiences",
      "Executed influencer marketing collaborations with food bloggers, increasing café visits & brand buzz",
      "Created reels and ad campaigns that enhanced local visibility and increased customer footfall",
    ],
  },
  {
    title: "Agency Growth – Spill Your Thoughts",
    type: "B2B Marketing",
    icon: TrendingUp,
    metrics: [
      { label: "Campaign Views", value: "8.9M+", color: "secondary" },
      { label: "Leads Generated", value: "1,200+", color: "primary" },
      { label: "Page Growth", value: "800%+", color: "accent" },
    ],
    achievements: [
      "Managed 10+ client accounts with strategic content calendars and posting schedules",
      "Planned & delivered influencer campaigns generating 8.9M+ campaign views and 1,200+ leads",
      "Achieved 800%+ page growth through consistent content delivery and targeted social storytelling",
    ],
  },
  {
    title: "LinkedIn Personal Branding – Shalini Mishra",
    type: "Thought Leadership",
    icon: Users,
    metrics: [
      { label: "Followers", value: "24,820", color: "primary" },
      { label: "Growth", value: "From 300", color: "secondary" },
    ],
    achievements: [
      "Created daily content calendar with posts, polls, and engagement-driven discussions",
      "Scaled LinkedIn from 300 to 24,820 followers organically",
      "Positioned as Top Personal Development Voice through community-focused content strategy",
    ],
  },
  {
    title: "LinkedIn Marketing – Rahul Thusath Suresh",
    type: "Founder Branding",
    icon: Target,
    metrics: [
      { label: "Authority", value: "+320%", color: "accent" },
      { label: "B2B Leads", value: "+180%", color: "primary" },
    ],
    achievements: [
      "Developed thought-leadership content calendar around AI, automation & business insights",
      "Built personal brand as Founder of Simple Intelligence, enhancing credibility & B2B lead flow",
      "Leveraged collaborations and discussions to increase profile reach & engagement",
    ],
  },
  {
    title: "LinkedIn NGO Branding – Ruby Sharma",
    type: "Non-Profit Marketing",
    icon: Users,
    metrics: [
      { label: "Followers", value: "8,000+", color: "secondary" },
      { label: "Growth", value: "From 800", color: "primary" },
    ],
    achievements: [
      "Designed content calendar highlighting NGO initiatives, volunteer stories, and social impact campaigns",
      "Enhanced profile as Founder of Saksham Care Foundation, positioning as voice in nonprofit sector",
      "Executed cause-based influencer collaborations, increasing awareness and engagement",
      "Scaled profile from 800 to 8,000+ followers, establishing as recognizable NGO leader",
    ],
  },
];

const Projects = () => {
  const headerAnimation = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-background" id="projects">
      <div className="container px-6">
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
              <Briefcase className="h-4 w-4" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projects & <span className="gradient-text">Case Studies</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from strategic campaigns across diverse industries and platforms
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const animation = useScrollAnimation();
  const Icon = project.icon;
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={animation.ref}
      className={`bg-card rounded-3xl p-6 md:p-8 shadow-soft border border-border hover:shadow-hard transition-all duration-700 cursor-pointer group ${
        animation.isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Icon & Type */}
        <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
          <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="md:text-center">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-1 bg-muted rounded-full">
              {project.type}
            </span>
          </div>
        </div>

        <div className="flex-1 space-y-5">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className={`px-5 py-3 rounded-xl hover:scale-105 transition-transform ${
                  metric.color === "primary"
                    ? "bg-primary/10 border border-primary/20"
                    : metric.color === "secondary"
                    ? "bg-secondary/10 border border-secondary/20"
                    : "bg-accent/10 border border-accent/20"
                }`}
              >
                <div
                  className={`text-2xl md:text-3xl font-bold mb-1 ${
                    metric.color === "primary"
                      ? "text-primary"
                      : metric.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  }`}
                >
                  {metric.value}
                </div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <ul className="space-y-3 text-muted-foreground">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-3 text-sm md:text-base">
                <span className="text-primary mt-1 flex-shrink-0">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
