"use client";

import AnimateOnView from "../animation-on-view";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MODCON – Modular Content Analytics",
    description:
      "Tableau-based analytics platform for Johnson & Johnson's Modular Content initiative. Covers Executive Summary, User Adoption tracking, Content Development metrics, Content Performance analysis, and Business Impact reporting.",
    tech: ["Tableau", "MySQL", "Excel", "Data Visualization", "KPI Dashboards"],
    accentColor: "border-t-blue-500",
    tagBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "MWAA Audit Analysis",
    description:
      "Comprehensive audit analysis system for Managed Workflows with Apache Airflow (MWAA). Covers EMR Cluster monitoring, DAG List management, ControlM job scheduling, and Daily Snapshot Views with 24-hour cycle reporting.",
    tech: ["MWAA", "EMR Cluster", "DAG Workflows", "ControlM", "Tableau", "MySQL"],
    accentColor: "border-t-purple-500",
    tagBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "ANGEN – Enterprise Brand & Financial Analytics",
    description:
      "End-to-end analytics platform for ANGEN covering financial data, sales metrics, market trends, sales activity, brand health, Share of Voice (SOV), brand loyalty, and AP360 reporting. Includes competitive company rankings, responsiveness metrics, and an optimized reporting UI.",
    tech: ["Tableau", "MySQL", "Excel", "Brand Analytics", "Financial Reporting", "AP360"],
    accentColor: "border-t-emerald-500",
    tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-black">
      <AnimateOnView>
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enterprise data analytics projects delivered at Johnson &amp; Johnson through TCS,
              spanning dashboards, audit systems, and brand reporting.
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`rounded-xl border border-black/10 dark:border-white/10 border-t-2 ${project.accentColor}
                            p-6 bg-white dark:bg-neutral-900 flex flex-col`}
              >
                {/* Enterprise badge */}
                <div className="mb-3">
                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide ${project.tagBg}`}>
                    ENTERPRISE · J&amp;J / TCS
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimateOnView>
    </section>
  );
}
