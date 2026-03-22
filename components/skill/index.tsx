import {
  BarChart2,
  Database,
  FileSpreadsheet,
  Search,
  Wrench,
} from "lucide-react";
import AnimateOnView from "@/components/animation-on-view";

const skills = [
  {
    title: "Data Visualization",
    icon: <BarChart2 size={20} className="text-blue-500" />,
    iconBg: "bg-blue-500/10",
    borderColor: "border-t-blue-500",
    items: ["Tableau", "Interactive Dashboards", "Charts & Reports", "KPI Tracking"],
  },
  {
    title: "Database & Querying",
    icon: <Database size={20} className="text-purple-500" />,
    iconBg: "bg-purple-500/10",
    borderColor: "border-t-purple-500",
    items: ["MySQL", "SQL Queries", "Data Modeling", "Database Design"],
  },
  {
    title: "Spreadsheet & Reporting",
    icon: <FileSpreadsheet size={20} className="text-emerald-500" />,
    iconBg: "bg-emerald-500/10",
    borderColor: "border-t-emerald-500",
    items: ["Microsoft Excel", "Pivot Tables", "Data Cleaning", "VBA Macros"],
  },
  {
    title: "Data Analysis",
    icon: <Search size={20} className="text-orange-500" />,
    iconBg: "bg-orange-500/10",
    borderColor: "border-t-orange-500",
    items: [
      "Business Intelligence",
      "Trend Analysis",
      "Brand Health Analytics",
      "Financial Reporting",
      "Sales Analysis",
      "Audit Analysis",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={20} className="text-pink-500" />,
    iconBg: "bg-pink-500/10",
    borderColor: "border-t-pink-500",
    items: ["Tableau", "ControlM", "MWAA", "EMR Cluster", "DAG Workflows"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 dark:bg-black transition-colors"
    >
      <AnimateOnView>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Tools and technologies I use to analyze data, build dashboards,
              and deliver actionable insights.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className={`rounded-xl border border-black/10 dark:border-white/10 border-t-2 ${skill.borderColor}
                           bg-white dark:bg-neutral-900 p-6 hover:shadow-lg transition`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${skill.iconBg}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-base font-semibold">{skill.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>
    </section>
  );
}
