import { Mail, Phone, BarChart2 } from "lucide-react";
import Resume from "../resume";
import AnimateOnView from "../animation-on-view";

const contacts = [
  {
    icon: <Mail size={20} className="text-blue-500" />,
    bg: "bg-blue-500/10",
    label: "Email",
    display: "singhanshi761@gmail.com",
    href: "mailto:signanshi761@gmail.com",
    external: false,
  },
  {
    icon: <Phone size={20} className="text-emerald-500" />,
    bg: "bg-emerald-500/10",
    label: "Phone",
    display: "+91 88991 26625",
    href: "tel:+918899126625",
    external: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-sky-500">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    bg: "bg-sky-500/10",
    label: "LinkedIn",
    display: "linkedin.com/in/anshi-singh",
    href: "https://www.linkedin.com/in/anshi-singh-b587522a6",
    external: true,
  },
  {
    icon: <BarChart2 size={20} className="text-orange-500" />,
    bg: "bg-orange-500/10",
    label: "Tableau Public",
    display: "View my dashboards",
    href: "#", // TODO: replace with your Tableau Public profile link
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 dark:bg-black"
    >
      <AnimateOnView>
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Interested in collaborating or discussing data opportunities?
              Feel free to reach out.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-xl border border-black/10 dark:border-white/10
                           bg-white dark:bg-neutral-900 hover:shadow-md hover:border-blue-500/30
                           dark:hover:border-blue-400/30 transition group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium group-hover:text-blue-500 transition text-sm">
                    {item.label}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.display}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-14">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Open to full-time, contract, and freelance data analyst roles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:signanshi761@gmail.com"
                className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
              >
                Get in Touch
              </a>
              <Resume isResponsive />
            </div>
          </div>

        </div>
      </AnimateOnView>
    </section>
  );
}
