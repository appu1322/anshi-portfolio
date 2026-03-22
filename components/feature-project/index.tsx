"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-3">
            Featured Project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            ANGEN – Enterprise Brand & Financial Analytics
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Comprehensive Analytics Platform for J&J – ANGEN
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              ANGEN is an end-to-end enterprise analytics solution built for Johnson & Johnson,
              covering all critical business data streams including financial performance, sales metrics,
              market analysis, brand health, and competitive intelligence across the organization.
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li>• Built Tableau dashboards for financial, sales, and market data reporting</li>
              <li>• Tracked sales activity, brand health, and Share of Voice (SOV) metrics</li>
              <li>• Developed brand loyalty and AP360 analytics with full company data coverage</li>
              <li>• Created competitive ranking views comparing responsiveness across companies</li>
              <li>• Designed intuitive UI for stakeholder reporting and executive-level insights</li>
              <li>• Integrated MySQL queries for data extraction, transformation, and aggregation</li>
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Tableau",
                "MySQL",
                "Excel",
                "Brand Analytics",
                "Financial Reporting",
                "Sales Analysis",
                "Market Analysis",
                "AP360",
                "SOV Tracking",
                "Brand Loyalty",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-black/5 dark:bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise project – J&J / TCS (confidential)</p>
          </div>

          {/* Right Visual */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl border border-black/10 dark:border-white/10
                       bg-white dark:bg-neutral-900 p-8 shadow-sm"
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20
                            flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
              Brand & Financial Analytics Dashboard
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
              Enterprise Tableau dashboard – financial, sales & brand intelligence
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
