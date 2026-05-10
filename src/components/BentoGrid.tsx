import { motion } from "motion/react";
import { Cpu, Lightbulb, Target, Code, BarChart3, Globe } from "lucide-react";

export default function BentoGrid() {
  const services = [
    {
      title: "Automatización con IA",
      description: "Implementamos agentes inteligentes que optimizan tus flujos de trabajo y reducen costos operativos en un 40%.",
      icon: <Cpu size={32} />,
      className: "md:col-span-3 lg:col-span-3 bg-brand-blue text-white",
      iconBg: "bg-white/10"
    },
    {
      title: "Estrategia Digital",
      description: "Consultoría 360 para definir el roadmap de crecimiento de tu empresa en la era digital.",
      icon: <Lightbulb size={32} />,
      className: "md:col-span-3 lg:col-span-3 bg-white border border-slate-100 text-slate-900",
      iconBg: "bg-slate-50"
    },
    {
      title: "Marketing de Datos",
      description: "Campañas de ultra-precisión basadas en el comportamiento real de tus usuarios.",
      icon: <Target size={32} />,
      className: "md:col-span-2 lg:col-span-2 bg-brand-lime text-slate-900",
      iconBg: "bg-black/5"
    },
    {
      title: "Desarrollo Moderno",
      description: "Webs y Apps escalables con las tecnologías más rápidas del mercado.",
      icon: <Code size={32} />,
      className: "md:col-span-2 lg:col-span-2 bg-slate-900 text-white",
      iconBg: "bg-white/10"
    },
    {
      title: "BI & Analítica",
      description: "Dashboards en tiempo real para que tomes decisiones informadas al instante.",
      icon: <BarChart3 size={32} />,
      className: "md:col-span-2 lg:col-span-2 bg-white border border-slate-100 text-slate-900",
      iconBg: "bg-slate-50"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            <div className="w-1 h-1 rounded-full bg-brand-blue" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900">
            Soluciones integrales para la <br /> nueva economía digital.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${service.className} rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[380px] shadow-sm hover:shadow-xl transition-all group`}
            >
              <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                {service.icon}
              </div>
              
              <div>
                <h3 className="text-3xl font-display font-medium mb-4 group-hover:translate-x-2 transition-transform">
                  {service.title}
                </h3>
                <p className="text-lg opacity-70 leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Global Reach Small Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-6 lg:col-span-6 bg-slate-100/50 border border-dashed border-slate-200 rounded-[2rem] p-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400">
                <Globe size={24} />
              </div>
              <p className="text-slate-500 font-medium font-display uppercase tracking-widest text-sm">
                Presencia global en más de 20 países y 4 continentes
              </p>
            </div>
            <div className="hidden md:flex -space-x-3">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300" />
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

