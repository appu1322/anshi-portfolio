import React from 'react'

const stats = [
  { label: "Years at TCS", value: "3+" },
  { label: "Projects Delivered", value: "3" },
  { label: "Primary Tool", value: "Tableau" },
  { label: "Client", value: "J&J" },
]

const tools = ["Tableau", "MySQL", "Excel", "Business Intelligence", "Audit Analysis"]

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="max-w-4xl text-center">

        <p className="text-blue-500 font-semibold tracking-wide text-sm uppercase mb-4">
          👋 Hi, I'm Anshi Singh
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
          Data Analyst
        </h1>

        <p className="text-gray-500 dark:text-gray-400 font-medium mb-5">
          System Engineer @ TCS &nbsp;·&nbsp; Johnson &amp; Johnson Project
        </p>

        {/* Open to Opportunities Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm rounded-full
                     bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to Opportunities
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
          I transform complex business data into actionable insights using
          <span className="font-semibold text-black dark:text-white"> Tableau, MySQL, and Excel</span>{" "}
          to drive data-driven decisions at enterprise scale.
        </p>

        {/* Tool Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-black/10 dark:border-white/10"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition shadow-sm shadow-blue-500/30"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-black/20 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            Let's Talk
          </a>
        </div>

        {/* Quick Stats Strip */}
        <div className="flex flex-wrap justify-center gap-8 border-t border-black/10 dark:border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-blue-500">{s.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
