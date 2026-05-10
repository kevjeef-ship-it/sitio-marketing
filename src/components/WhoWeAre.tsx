import { motion } from "motion/react";

const team = [
  {
    name: "Elena Rivas",
    role: "Directora de Estrategia",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Marcos Soria",
    role: "Lead de IA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Sofía Mendez",
    role: "Diseño de Producto",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
  }
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-32 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-display font-medium text-slate-900 leading-tight mb-8">
                Mentes inquietas, soluciones brillantes.
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed mb-10 max-w-lg">
                Somos un colectivo de estrategas, diseñadores y expertos en IA unidos por una misión: redefinir los límites de lo posible.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-brand-blue mb-2">10+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-lime mb-2">45+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Talentos creativos</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background shape */}
            <div className="absolute top-1/2 -left-32 w-[120%] aspect-square bg-brand-blue/5 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-20 h-20 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-slate-900">{member.name}</h4>
                  <p className="text-slate-400 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
