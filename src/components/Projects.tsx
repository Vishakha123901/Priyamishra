import { TrendingUp, Users, Eye, Target, Briefcase, Sparkles, MapPin, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "LinkedIn Ads – Simple Intelligence",
    type: "B2B Lead Gen & Branding",
    icon: Target,
    metrics: [
      { label: "Qualified Leads", value: "350+", color: "primary" },
      { label: "CTR Increase", value: "40%", color: "secondary" },
      { label: "CPL Reduction", value: "28%", color: "accent" },
    ],
    achievements: [
      "Managed LinkedIn Ads for targeted B2B lead generation using Sales Navigator for custom audiences",
      "Wrote clear, benefit-focused ad copy and created strong creatives",
      "Continuously optimized campaigns for engagement and cost efficiency",
      "Enhanced founder credibility and profile engagement",
    ],
  },
  {
    title: "Meta Ads – Vastukimaya & Souljourneybyshikha",
    type: "Astrology & Spiritual Brands",
    icon: Sparkles,
    metrics: [
      { label: "Total Leads", value: "800+", color: "primary" },
      { label: "Conversion Rate", value: "+30%", color: "secondary" },
      { label: "Bookings", value: "Consistent", color: "accent" },
    ],
    achievements: [
      "Ran Facebook & Instagram lead-generation campaigns tailored to astrology and healing audiences",
      "Designed creatives based on emotions, trust-building and storytelling",
      "Implemented retargeting for users who engaged with reels, pages and ads",
      "Improved page reach and visibility with content + ads strategy",
    ],
  },
  {
    title: "Local Business Ads – Café The Old School",
    type: "Local Business Growth",
    icon: MapPin,
    metrics: [
      { label: "Local Reach", value: "50k+", color: "primary" },
      { label: "Footfall", value: "Increased", color: "secondary" },
      { label: "Visits", value: "Weekend Boost", color: "accent" },
    ],
    achievements: [
      "Created geo-targeted Facebook & Instagram ads focused on ambience, food photography and offers",
      "Collaborated with food bloggers to combine influencer content with paid ads",
      "Designed reels and static creatives capturing café vibes",
      "Improved brand visibility in local areas through consistent ads",
    ],
  },
  {
    title: "Local Business Ads – YourFitness",
    type: "Fitness Studio Marketing",
    icon: Activity,
    metrics: [
      { label: "Inquiries", value: "300+", color: "primary" },
      { label: "Enrollments", value: "Increased", color: "secondary" },
      { label: "Reach", value: "Hyper-local", color: "accent" },
    ],
    achievements: [
      "Set up hyper-local ads targeting people interested in fitness, weight loss and wellness",
      "Created ad creatives showing transformations, gym equipment and trainer expertise",
      "Used lead forms + WhatsApp integration for fast follow-up",
      "Improved local reach and awareness among targeted pin codes",
    ],
  },
  {
    title: "LinkedIn Ads – Aplus IT Solutions",
    type: "B2B SaaS & IT Services",
    icon: Briefcase,
    metrics: [
      { label: "B2B Leads", value: "500+", color: "primary" },
      { label: "CPL Reduction", value: "25%", color: "secondary" },
      { label: "Funnel", value: "Strengthened", color: "accent" },
    ],
    achievements: [
      "Designed and managed LinkedIn Lead Gen campaigns for IT services and SaaS solutions",
      "Built targeted audiences using Sales Navigator filters such as industry, company size & decision-makers",
      "Collaborated with the tech team for landing page improvements",
      "Monitored performance using LinkedIn Insights and optimized for conversions",
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
            className={`text-center mb-16 transition-all duration-700 ${headerAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
              }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Briefcase className="h-4 w-4" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-white">
              Projects & Case Studies
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-white dark:text-white text-lg max-w-2xl mx-auto">
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
      className={`bg-card p-6 md:p-8 shadow-soft border border-border hover:shadow-hard transition-all duration-700 cursor-pointer group ${animation.isVisible
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
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white transition-colors">
            {project.title}
          </h3>

          {/* Metrics */}
          <div className="flex flex-wrap gap-4">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className={`px-5 py-3 rounded-xl hover:scale-105 transition-transform ${metric.color === "primary"
                    ? "bg-primary/10 border border-primary/20"
                    : metric.color === "secondary"
                      ? "bg-secondary/10 border border-secondary/20"
                      : "bg-accent/10 border border-accent/20"
                  }`}
              >
                <div
                  className={`text-2xl md:text-3xl font-bold mb-1 ${metric.color === "primary"
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
          <ul className="space-y-3 text-black dark:text-white">
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
