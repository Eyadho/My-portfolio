import { motion } from "framer-motion"
import { useState } from "react"

function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#f8f9ff] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full" />

      <div className="max-w-2xl mx-auto px-4 md:px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-widest uppercase text-gray-400 mb-3 block">
            Kom i kontakt
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakta mig
          </h2>
          <p className="text-gray-500">
            Jag söker en LIA-praktik inom frontend, UX eller e-handel. Tveka
            inte att höra av dig!
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl shadow-lg p-8 md:p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Meddelandet skickat!
              </h3>
              <p className="text-gray-500 text-sm">
                Jag återkommer så snart som möjligt.
              </p>
            </motion.div>
          ) : (
            <form
              className="flex flex-col gap-5"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true)

                const formData = new FormData(e.target);

                await fetch("https://formspree.io/f/mykbzyka", {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "application/json",
                  },
                });
                e.target.reset()
                setLoading(false)
                setSent(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Namn
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Ditt namn"
                    required
                    className="p-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Din email"
                    required
                    className="p-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Meddelande
                </label>
                <textarea
                  name="message"
                  placeholder="Skriv ditt meddelande..."
                  rows="5"
                  required
                  className="p-3 rounded-xl border border-gray-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 font-medium disabled:opacity-70"
              >
                {loading ? "Skickar..." : "Skicka meddelande →"}
              </button>
            </form>
          )}
        </motion.div>

        {/* EMAIL */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          Eller direkt via{" "}
          <a
            href="mailto:eyadhosain40@gmail.com"
            className="text-primary font-medium hover:underline "
          >
            eyadhosain40@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}

export default Contact