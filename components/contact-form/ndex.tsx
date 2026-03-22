"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      message: e.target.message.value,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("success");
      e.target.reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

       
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Let’s Work Together
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Hiring for a role or want to discuss an opportunity?  
            Drop a message — I usually respond within 24 hours.
          </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <input
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-black/10
                       dark:border-white/10 bg-transparent"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Work Email"
            className="w-full p-4 rounded-lg border border-black/10
                       dark:border-white/10 bg-transparent"
          />

          <input
            name="company"
            placeholder="Company (optional)"
            className="w-full p-4 rounded-lg border border-black/10
                       dark:border-white/10 bg-transparent"
          />

          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell me about the role or opportunity"
            className="w-full p-4 rounded-lg border border-black/10
                       dark:border-white/10 bg-transparent resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white
                       font-semibold hover:opacity-90 transition"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center text-sm">
              Thanks! I’ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
};

export default ContactForm;
