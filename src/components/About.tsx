import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 mb-8"
        >
          <div className="w-1 h-1 rounded-full bg-slate-400" />
          Sobre Nosotros
        </motion.div>
        
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-display font-medium text-slate-900 leading-[1.2] md:leading-[1.1] mb-12 flex flex-wrap justify-center items-center gap-2">
          Un socio estratégico global dedicado a construir soluciones{" "}
          <span className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-brand-blue rounded-full text-white shrink-0">
            <svg className="w-5 h-5 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </span>
          {" "}más inteligentes y{" "}
          <span className="inline-flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-brand-lime rounded-full text-slate-900 shrink-0">
            <svg className="w-5 h-5 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
              <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z" />
            </svg>
          </span>
          {" "}más adaptativas
        </h2>
      </div>
    </section>
  );
}
