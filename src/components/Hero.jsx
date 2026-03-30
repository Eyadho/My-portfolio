import { motion } from "framer-motion"
import myimg from "../assets/my-img.jpg"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } }
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f8f9ff]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* BLOBS */}
      <motion.div
        animate={{ y: [0, -24, 0], rotate: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute top-[-80px] right-[10%] w-80 h-80 rounded-full opacity-30 blur-3xl bg-blue-500"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
        className="absolute bottom-[-60px] left-[5%] w-64 h-64 rounded-full opacity-30 blur-3xl bg-purple-500"
      />

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 py-24 md:py-32">

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-lg"
        >
          {/* STATUS BADGE */}
          <motion.div variants={item} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl leading-[1.08] font-normal mb-5 text-gray-900"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Hej, jag är{" "} <br />
            <em className="text-primary not-italic font-bold">Eyad Hussen</em>
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            variants={item}
            className="text-xl text-gray-600 mb-4 font-light"
          >
            Frontend Developer med fokus på UX och e-handel
          </motion.h2>

          {/* DESC */}
          <motion.p
            variants={item}
            className="text-base leading-relaxed text-gray-500 mb-10 font-light"
          >
            Jag utvecklar moderna, responsiva och användarvänliga webbplatser
            med fokus på frontend, UX och e-handel.
          </motion.p>

          {/* BUTTONS */}
          <motion.div variants={item} className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              Se mina projekt
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm border border-gray-300 text-gray-700 transition-all duration-200 hover:-translate-y-1 hover:border-gray-400 hover:shadow-sm"
            >
              Kontakta mig
            </a>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="relative z-10 shrink-0 hidden md:block"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{ duration: 0.8, y: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
        >
          <div className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[360px] md:h-[360px] rounded-[40%_60%_60%_40%/40%_40%_60%_60%] overflow-hidden border-4 border-white shadow-xl">
            <img src={myimg} alt="ُEyad Hussen" className="w-full h-full object-cover" draggable ="false" oncontextMenu="return false;" style={{ objectPosition: "80%" }} />
          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase text-gray-400">scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-px bg-gray-300 origin-top"
          style={{ height: 32 }}
        />
      </div>

    </section>
  )
}

export default Hero