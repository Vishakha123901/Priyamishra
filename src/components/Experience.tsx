import { Briefcase, Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "Marketing Executive",
    company: "Aplus IT Solutions",
    location: "Mumbai, India",
    period: "Nov 2024 – Present",
    current: true,
    achievements: [
      "Planned and executed Google Ads & LinkedIn Ads campaigns, achieving 40% CTR improvement and reducing CPL by 25%",
      "Managed lead generation strategy using LinkedIn Sales Navigator, delivering 500+ qualified B2B leads",
      "Conducted A/B testing for creatives and landing pages to improve conversion performance",
      "Coordinated with design/content teams to ensure ad campaigns aligned with the sales funnel and ROI targets",
    ],
    color: "primary",
  },
  {
    title: "Social Media Strategist & Ads Specialist",
    company: "Spill Your Thought",
    location: "Delhi, India",
    period: "Nov 2023 – Nov 2024",
    current: false,
    achievements: [
      "Managed social media marketing for 10+ brands, including startups, creators, and coaching businesses",
      "Executed Meta Ads campaigns (Facebook & Instagram) generating 1,200+ leads across niches",
      "Achieved a milestone of 8.9M views for a client campaign through strategic content hooks and ads optimization",
      "Developed retargeting & lookalike campaigns, increasing conversions by 30%",
      "Leveraged LinkedIn Ads & Sales Navigator for targeted B2B lead generation, producing 250+ qualified leads",
      "Collaborated with clients and internal teams to track ROI and optimize campaigns using Google Analytics & Meta Insights",
    ],
    color: "secondary",
  },
  {
    title: "Digital Marketing Internship",
    company: "Remit Analyst",
    location: "Remote, USA",
    period: "Jun 2023 – Nov 2023",
    current: false,
    achievements: [
      "Launched WhatsApp & Facebook promotional campaigns to boost reach",
      "Created Canva-based creatives and monitored engagement metrics",
      "Assisted in performance tracking and insights reporting",
      "Helped with keyword optimization and meta updates for multiple client pages",
      "Coordinated tracking codes and landing page updates with developers",
    ],
    color: "accent",
  },
];

const Experience = () => {
  const headerAnimation = useScrollAnimation();

  return (
    <section className="py-12 md:py-20 bg-background" id="experience">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerAnimation.ref}
            className={`text-center mb-10 transition-all duration-700 ${
              headerAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Briefcase className="h-4 w-4" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-white dark:text-white text-lg max-w-2xl mx-auto">
              Track record of delivering results through strategic campaigns and data-driven
              optimization
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line - Desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) => {
  const animation = useScrollAnimation();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={animation.ref}
      className={`relative transition-all duration-700 ${
        animation.isVisible
          ? "opacity-100 translate-x-0"
          : `opacity-0 ${isLeft ? "-translate-x-12" : "translate-x-12"}`
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`md:grid md:grid-cols-2 gap-8 items-center ${
          isLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Content */}
        <div className={isLeft ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
          <div
            className={`bg-card rounded-2xl p-5 md:p-6 shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer group ${
              isLeft ? "" : ""
            }`}
          >
            {/* Header */}
            <div className={`flex items-start gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
              <div
                className={`p-3 rounded-xl group-hover:scale-110 transition-transform ${
                  exp.color === "primary"
                    ? "bg-primary/10"
                    : exp.color === "secondary"
                    ? "bg-secondary/10"
                    : "bg-accent/10"
                }`}
              >
                <Briefcase
                  className={`h-6 w-6 ${
                    exp.color === "primary"
                      ? "text-primary"
                      : exp.color === "secondary"
                      ? "text-secondary"
                      : "text-accent"
                  }`}
                />
              </div>
              <div className={`flex-1 ${isLeft ? "md:text-right" : ""}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white">{exp.title}</h3>
                  {exp.current && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-primary mb-3">{exp.company}</p>
                <div
                  className={`flex flex-wrap gap-3 text-sm ${
                    isLeft ? "md:justify-end" : ""
                  }`}
                >
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-muted rounded-lg text-primary">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-muted rounded-lg text-primary">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />

            {/* Achievements */}
            <ul className={`space-y-2 text-black dark:text-white ${isLeft ? "md:text-right" : ""}`}>
              {exp.achievements.map((achievement, i) => (
                <li key={i} className={`flex gap-3 text-sm md:text-base ${isLeft ? "md:flex-row-reverse" : ""}`}>
                  <span
                    className={`flex-shrink-0 mt-1 ${
                      exp.color === "primary"
                        ? "text-primary"
                        : exp.color === "secondary"
                        ? "text-secondary"
                        : "text-accent"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline dot - Desktop only */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-full blur-md ${
                exp.color === "primary"
                  ? "bg-primary"
                  : exp.color === "secondary"
                  ? "bg-secondary"
                  : "bg-accent"
              } opacity-50 animate-pulse`}
            />
            {/* Dot */}
            <div
              className={`relative w-8 h-8 rounded-full ${
                exp.color === "primary"
                  ? "bg-primary"
                  : exp.color === "secondary"
                  ? "bg-secondary"
                  : "bg-accent"
              } border-4 border-background shadow-medium flex items-center justify-center`}
            >
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
