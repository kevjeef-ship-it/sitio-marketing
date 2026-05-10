import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "La integración de IA en nuestros procesos no solo nos ahorró tiempo, sino que nos abrió puertas a mercados que ni imaginábamos.",
    author: "Ricardo S.",
    position: "CEO en GlobalModa",
    rating: 5
  },
  {
    id: 2,
    content: "Un equipo excepcional que entiende el negocio más allá de la tecnología. La mejor inversión técnica de software que hemos hecho.",
    author: "Laura G.",
    position: "CMO en TecnoCorp",
    rating: 5
  },
  {
    id: 3,
    content: "Resultados medibles desde el primer mes. Su enfoque basado en datos es simplemente refrescante y altamente efectivo.",
    author: "Carlos P.",
    position: "Director de Innovación",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-medium text-slate-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex justify-center gap-1 text-brand-lime">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-50 rounded-[2.5rem] relative"
            >
              <Quote className="text-brand-blue/10 absolute top-8 left-8" size={60} />
              <div className="relative z-10">
                <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
                <div>
                  <div className="font-display font-bold text-slate-900">{t.author}</div>
                  <div className="text-slate-400 text-sm">{t.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
