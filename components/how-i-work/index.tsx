import { TrendingUp, ShieldCheck, PieChart, DatabaseZap, Users } from "lucide-react";
import AnimateOnView from "../animation-on-view";

const principles = [
  {
    num: "01",
    icon: <TrendingUp size={20} className="text-blue-500" />,
    iconBg: "bg-blue-500/10",
    title: "Data-Driven Decision Making",
    desc: "Translating raw data into clear, actionable insights for business stakeholders.",
  },
  {
    num: "02",
    icon: <ShieldCheck size={20} className="text-purple-500" />,
    iconBg: "bg-purple-500/10",
    title: "Accuracy & Attention to Detail",
    desc: "Ensuring data integrity, consistency, and precision across all reports and dashboards.",
  },
  {
    num: "03",
    icon: <PieChart size={20} className="text-emerald-500" />,
    iconBg: "bg-emerald-500/10",
    title: "Visual Storytelling",
    desc: "Designing intuitive Tableau dashboards that communicate complex data at a glance.",
  },
  {
    num: "04",
    icon: <DatabaseZap size={20} className="text-orange-500" />,
    iconBg: "bg-orange-500/10",
    title: "Structured Query Thinking",
    desc: "Writing efficient MySQL queries to extract, transform, and surface meaningful patterns.",
  },
  {
    num: "05",
    icon: <Users size={20} className="text-pink-500" />,
    iconBg: "bg-pink-500/10",
    title: "Stakeholder-First Reporting",
    desc: "Building reports that answer real business questions and support executive decision-making.",
  },
];

const HowIWork = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-neutral-950">
      <AnimateOnView>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How I Work
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            My approach to turning data into insights that drive real business impact.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl border border-black/10 dark:border-white/10
                           bg-white dark:bg-neutral-900 hover:shadow-md transition"
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg}`}>
                  {item.icon}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{item.num}</span>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnView>
    </section>
  );
};

export default HowIWork;
