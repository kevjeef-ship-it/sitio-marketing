import { motion } from "motion/react";
import { ArrowUpRight, Play, Zap } from "lucide-react";

const projects = [
  { id: 1, type: "chart", title: "Inteligencia en cada decisión", delay: 0 },
  { id: 2, type: "image", src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400", title: "Estrategia, Datos e IA combinados", delay: 0.2 },
  { id: 3, type: "stat", value: "520k+", label: "Puntos de datos", delay: 0.4 },
  { id: 4, type: "icon", title: "Entrenamiento de datos", subtitle: "Contenido actualizado", delay: 0.1 },
  { id: 5, type: "chart", title: "Analizado mensualmente", delay: 0.3 },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen hero-gradient pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden px-4 md:px-6">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-brand-lime/10 rounded-full blur-3xl opacity-50 md:opacity-100" />
      <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl opacity-50 md:opacity-100" />

      <div className="max-w-4xl mx-auto text-center relative z-10 px-2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/90 mb-4 md:mb-6 hover:bg-white/20 transition-all cursor-default"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
          Sitio Web creado por Kevin Ramirez
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[2.5rem] sm:text-6xl md:text-8xl text-white font-display font-medium leading-[1] md:leading-[0.9] mb-6 md:mb-8"
        >
          Construyendo el futuro con <br className="hidden md:block" /> IA y <span className="relative inline-block">
            estrategia
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 45 }}
              animate={{ scale: 1, opacity: 1, rotate: -15 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="absolute -top-7 -right-4 md:-top-8 md:-right-16 bg-brand-lime text-slate-900 px-3 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl text-[8px] md:text-xs font-black uppercase tracking-tight shadow-[0_10px_40px_rgba(163,230,53,0.5)] cursor-pointer animate-float flex items-center gap-1.5 md:gap-2 border-2 border-white/40 z-20"
            >
              <Zap size={10} className="md:w-3.5 md:h-3.5" fill="currentColor" strokeWidth={3} />
              50% OFF HOY
            </motion.div>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light md:font-normal px-4"
        >
          Ayudamos a las organizaciones a desbloquear el crecimiento y la eficiencia mediante consultoría basada en datos y automatización inteligente.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative w-full sm:w-auto">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
          >
            <Play size={18} fill="currentColor" />
            VER DEMO
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto bg-brand-lime text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2"
          >
            EMPEZAR AHORA
            <ArrowUpRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
