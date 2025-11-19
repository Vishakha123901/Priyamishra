import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Marketing Executive",
    company: "Aplus IT Solutions",
    location: "Mumbai, India",
    period: "Nov 2024 – Present",
    achievements: [
      "Planned and executed Google Ads & LinkedIn Ads campaigns, achieving 40% CTR improvement and reducing CPL by 25%",
      "Managed lead generation strategy using LinkedIn Sales Navigator, delivering 500+ qualified B2B leads",
      "Conducted A/B testing for creatives and landing pages to improve conversion performance",
      "Coordinated with design/content teams to ensure ad campaigns aligned with the sales funnel and ROI targets"
    ],
    color: "primary"
  },
  {
    title: "Social Media Strategist & Ads Specialist",
    company: "Spill Your Thought",
    location: "Delhi, India",
    period: "Nov 2023 – Nov 2024",
    achievements: [
      "Managed social media marketing for 10+ brands, including startups, creators, and coaching businesses",
      "Executed Meta Ads campaigns (Facebook & Instagram) generating 1,200+ leads across niches",
      "Achieved a milestone of 8.9M views for a client campaign through strategic content hooks and ads optimization",
      "Developed retargeting & lookalike campaigns, increasing conversions by 30%",
      "Leveraged LinkedIn Ads & Sales Navigator for targeted B2B lead generation, producing 250+ qualified leads",
      "Collaborated with clients and internal teams to track ROI and optimize campaigns using Google Analytics & Meta Insights"
    ],
    color: "secondary"
  },
  {
    title: "Digital Marketing Internship",
    company: "Remit Analyst",
    location: "Remote, USA",
    period: "Jun 2023 – Nov 2023",
    achievements: [
      "Launched WhatsApp & Facebook promotional campaigns to boost reach",
      "Created Canva-based creatives and monitored engagement metrics",
      "Assisted in performance tracking and insights reporting",
      "Helped with keyword optimization and meta updates for multiple client pages",
      "Coordinated tracking codes and landing page updates with developers"
    ],
    color: "accent"
  }
];

const Experience = () => {
  return (
    <section className="py-20 md:py-32 bg-background" id="experience">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 gradient-bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Track record of delivering results through strategic campaigns and data-driven optimization
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className={`md:grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                      <div className={`bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border hover:shadow-hard hover:scale-105 transition-all duration-300 cursor-pointer ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="flex items-start gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${exp.color === 'primary' ? 'bg-primary/10' : exp.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'}`}>
                            <Briefcase className={`h-5 w-5 ${exp.color === 'primary' ? 'text-primary' : exp.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex gap-2 text-sm md:text-base">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className={`w-6 h-6 rounded-full ${exp.color === 'primary' ? 'bg-primary' : exp.color === 'secondary' ? 'bg-secondary' : 'bg-accent'} border-4 border-background shadow-medium`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
