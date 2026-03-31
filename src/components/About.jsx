import { motion } from "framer-motion"

const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS / Tailwind", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "UX Design", icon: "✏️" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Responsive Design", icon: "📱" },
  { name: "Firebase", icon: "🔥" },
  { name: "PHP & MySQL", icon: "🐘" },
]

function About() {
  return (
    <section id="about" className="relative py-32 bg-[#f8f9ff] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* TEXT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100"
        >
          <h2 className="text-4xl font-bold mb-6">Om mig</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Jag är en webbutvecklare med fokus på frontend, UX och e-handel.
            Jag brinner för att skapa moderna och användarvänliga digitala
            upplevelser som inte bara ser bra ut – utan också fungerar effektivt.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Under min utbildning har jag arbetat med teknologier som React,
            JavaScript och moderna CSS-verktyg, samt fått en stark förståelse
            för användarbeteende och digitala affärer. 
            Jag är en nyfiken och lösningsorienterad person som trivs med att lära mig nya tekniker och arbeta med verkliga problem.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2 } }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <span className="text-base">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About