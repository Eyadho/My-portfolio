import { motion } from "framer-motion"
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"

const projects = [
  {
    title: "React Webshop — Firebase & Firestore",
    description: "Single-page shop with cart & checkout.",
    image: project1,
    live: "https://webb24-js2-slutprojekt-eyad-hussen.netlify.app/",
    github: "https://github.com/Eyadho/React-Webshop-Firebase-Project"
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio, no frameworks used.",
    image: project2,
    live: "https://eyadho.github.io/Portfolio-project/#",
    github: "https://github.com/Eyadho/Portfolio-project"
  },
  {
    title: "Webshop — PHP, MySQL & Docker",
    description: "Full-stack webshop with admin panel.",
    image: project3,
    live: "https://github.com/Eyadho/webshop-php-mysql?tab=readme-ov-file#%EF%B8%8F-setup--installation",
    github: "https://github.com/Eyadho/webshop-php-mysql"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-32 bg-white">
      
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Mina projekt
          </h2>
          <p className="text-gray-500">
            Här är några av mina senaste arbeten inom frontend, UX och e-handel.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl  transition-all duration-300 "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {project.description}
                </p>
              </div>

              {/* OVERLAY */}
              <div className="bg-black/60 backdrop-blur-sm absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">

                <a
                  href={project.live}
                  className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:scale-105 transition"
                  target="_blank" rel="noreferrer"
                >
                  Live
                </a>

                <a
                  href={project.github}
                  className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:scale-105 transition"
                  target="_blank" rel="noreferrer"
                >
                  GitHub
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects







// new version - fixing cardsoverlay
// import { motion } from "framer-motion"
// import project1 from "../assets/project-1.png"
// import project2 from "../assets/project-2.png"
// import project3 from "../assets/project-3.png"

// const projects = [
//   {
//     title: "React Webshop — Firebase & Firestore",
//     description: "Single-page shop with cart & checkout.",
//     image: project1,
//     live: "https://webb24-js2-slutprojekt-eyad-hussen.netlify.app/",
//     github: "https://github.com/Eyadho/React-Webshop-Firebase-Project"
//   },
//   {
//     title: "Portfolio Website",
//     description: "Responsive portfolio, no frameworks used.",
//     image: project2,
//     live: "https://eyadho.github.io/Portfolio-project/#",
//     github: "https://github.com/Eyadho/Portfolio-project"
//   },
//   {
//     title: "Webshop — PHP, MySQL & Docker",
//     description: "Full-stack webshop with admin panel.",
//     image: project3,
//     live: "https://github.com/Eyadho/webshop-php-mysql?tab=readme-ov-file#%EF%B8%8F-setup--installation",
//     github: "https://github.com/Eyadho/webshop-php-mysql"
//   }
// ]

// function Projects() {
//   return (
//     <section id="projects" className="py-32 bg-white">
      
//       <div className="max-w-6xl mx-auto px-4 md:px-6">

//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4">
//             Mina projekt
//           </h2>
//           <p className="text-gray-500">
//             Här är några av mina senaste arbeten inom frontend, UX och e-handel.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl  transition-all duration-300 "
//             >

//               {/* IMAGE */}
//               <div className="overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm">
//                   {project.description}
//                 </p>
//               </div>

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4 transition duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">

//                 <a
//                   href={project.live}
//                   className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:scale-105 transition"
//                   target="_blank" rel="noreferrer"
//                 >
//                   Live
//                 </a>

//                 <a
//                   href={project.github}
//                   className="px-4 py-2 bg-white rounded-lg text-sm font-medium hover:scale-105 transition"
//                   target="_blank" rel="noreferrer"
//                 >
//                   GitHub
//                 </a>

//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Projects