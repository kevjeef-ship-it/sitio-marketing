import { motion } from "motion/react";
import { Zap, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Eficiencia Radical",
    description: "Reducimos costos operativos automatizando tareas repetitivas con IA avanzada.",
    icon: <Zap className="text-brand-lime" size={32} />,
    color: "bg-slate-900"
  },
  {
    id: 2,
    title: "Escalabilidad Total",
    description: "Sistemas diseñados para crecer contigo, sin fricciones ni miedos tecnológicos.",
    icon: <Cpu className="text-brand-lime" size={32} />,
    color: "bg-brand-blue"
  },
  {
    id: 3,
    title: "Crecimiento Medible",
    description: "Impactamos directamente en tu ROI con estrategias basadas 100% en datos.",
    icon: <TrendingUp className="text-brand-lime" size={32} />,
    color: "bg-slate-900"
  },
  {
    id: 4,
    title: "Seguridad Robusta",
    description: "Protegemos tu activo más valioso con arquitectura de datos de grado empresarial.",
    icon: <ShieldCheck className="text-brand-lime" size={32} />,
    color: "bg-brand-blue"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 mb-6">
              Beneficios de <br /> elegir a Aeline
            </h2>
            <p className="text-slate-500 text-lg">
              No solo implementamos tecnología; construimos la ventaja competitiva que tu negocio necesita para dominar el mercado.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-display font-medium text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
