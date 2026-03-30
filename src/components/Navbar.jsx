import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const links = ["home", "about", "projects", "contact"]

function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const scrollPos = window.scrollY + 200

      links.forEach(id => {
        const section = document.getElementById(id)
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        
        <div className="font-bold text-base md:text-lg">Eyad</div>

        <div className="hidden md:flex gap-6 relative">
          {links.map(link => (
            <div key={link}>
              <a
                href={`#${link}`}
                className={`capitalize text-sm ${
                  active === link ? "text-primary font-medium" : "text-gray-600"
                }`}
              >
                {link}
              </a>

              {active === link && (
                <motion.div layoutId="underline" className="h-[2px] bg-primary mt-1" />
              )}
            </div>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="flex flex-col items-center py-6 gap-4">
            {links.map(link => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="text-gray-700 capitalize"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar