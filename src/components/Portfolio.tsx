import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce AI Integration",
    client: "Moda Global",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=600",
    category: "Automatización"
  },
  {
    id: 2,
    title: "Estrategia de Datos 360",
    client: "TecnoCorp",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
    category: "Consultoría"
  },
  {
    id: 3,
    title: "Campaña Viral Inteligente",
    client: "Z-Sports",
    image: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=600",
    category: "Marketing"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 mb-6">
              Impacto real a través de nuestro portafolio
            </h2>
            <p className="text-slate-500 text-lg">
              Descubre cómo hemos transformado negocios utilizando tecnología de vanguardia y pensamiento estratégico.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-sm uppercase tracking-widest whitespace-nowrap w-full md:w-auto"
          >
            Ver todos los proyectos
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full text-slate-900 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ExternalLink size={24} />
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-medium text-slate-900 mb-1">{project.title}</h3>
              <p className="text-slate-400 font-medium">{project.client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
