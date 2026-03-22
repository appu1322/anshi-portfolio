import { MapPin, Calendar } from "lucide-react";
import AnimateOnView from "../animation-on-view";

const experiences = [
  {
    role: "System Engineer – Data Analyst",
    company: "Tata Consultancy Services (TCS)",
    project: "Project: Johnson & Johnson",
    location: "India",
    period: "Aug 2022 – Present",
    tenure: "3+ Years",
    points: [
      "Working as a Data Analyst on the Johnson & Johnson (J&J) account, handling data across multiple enterprise dashboards and reporting platforms.",
      "Built and maintained Tableau dashboards for MODCON (Modular Content) covering Executive Summary, User Adoption, Content Development, Content Performance, and Business Impact.",
      "Conducted MWAA Audit Analysis involving EMR Cluster monitoring, DAG List management, ControlM job scheduling, and Daily Snapshot Views (24-hour cycle).",
      "Developed comprehensive analytics for ANGEN covering financial data, sales metrics, market trends, sales activity, brand health, Share of Voice (SOV), brand loyalty, and AP360 reporting.",
      "Built competitive intelligence views with company rankings, responsiveness metrics, and improved UI for stakeholder reporting.",
      "Collaborated with cross-functional teams to ensure data accuracy, report consistency, and timely delivery of insights.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 dark:bg-black transition-colors"
    >
      <AnimateOnView>
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional experience delivering data analytics, dashboards, and insights at a leading global IT firm.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-blue-500/30 pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[11px] top-5 w-5 h-5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

                {/* Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-xl border border-black/10 dark:border-white/10 border-l-4 border-l-blue-500 p-6 shadow-sm">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-blue-500 font-semibold mt-0.5">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.project}</p>
                    </div>
                    <span className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium self-start">
                      {exp.tenure}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-5 mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>
    </section>
  );
}
