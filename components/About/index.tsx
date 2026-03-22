import { Briefcase, FolderKanban, Building2, BarChart2 } from "lucide-react";
import AnimateOnView from "../animation-on-view";

const stats = [
  { icon: <Briefcase size={18} className="text-blue-500" />, bg: "bg-blue-500/10", value: "3+", label: "Years Experience" },
  { icon: <FolderKanban size={18} className="text-purple-500" />, bg: "bg-purple-500/10", value: "3+", label: "Projects Delivered" },
  { icon: <Building2 size={18} className="text-emerald-500" />, bg: "bg-emerald-500/10", value: "TCS", label: "Current Company" },
  { icon: <BarChart2 size={18} className="text-orange-500" />, bg: "bg-orange-500/10", value: "J&J", label: "Client Project" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 dark:bg-neutral-950 transition-colors"
    >
      <AnimateOnView>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I'm a <span className="font-semibold text-black dark:text-white">Data Analyst</span> with 3+ years of experience at{" "}
            <span className="font-semibold text-black dark:text-white">Tata Consultancy Services (TCS)</span>, working as a System
            Engineer on the Johnson &amp; Johnson project. I specialize in transforming raw business data into meaningful
            insights through interactive dashboards, auditing pipelines, and comprehensive financial &amp; brand analytics
            reporting using <span className="font-semibold text-black dark:text-white">Tableau, MySQL, and Excel</span>.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-black/10 dark:border-white/10
                         bg-white dark:bg-neutral-900 shadow-sm"
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.bg}`}>
                {s.icon}
              </div>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{s.label}</p>
            </div>
          ))}
        </div>
      </AnimateOnView>
    </section>
  );
}
