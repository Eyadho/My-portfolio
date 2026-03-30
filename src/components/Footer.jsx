import { motion } from "framer-motion"

function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-white py-16 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl font-bold"
          >
            Eyad Hussen <span className="text-primary">.</span>
          </motion.div>

          {/* LINKS */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

        </div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-6 mb-10 text-gray-400"
        >
          <a href="https://www.linkedin.com/in/eyad-kh-0318142a0/" target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://github.com/Eyadho" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>

        </motion.div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Eyad. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer