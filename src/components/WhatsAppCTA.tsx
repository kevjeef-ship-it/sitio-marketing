import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappNumber = "123456789"; // Replace with real number
  const message = "Hola, me gustaría recibir más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Hero Section CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-display font-medium text-white mb-8 tracking-tighter">
                ¿Listo para transformar <br /> tu futuro con IA?
              </h2>
              <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Hablemos por WhatsApp y descubre cómo podemos potenciar tu negocio hoy mismo.
              </p>
              
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-brand-lime text-slate-900 px-10 py-5 rounded-full font-bold text-lg uppercase tracking-tight shadow-xl"
              >
                <MessageCircle size={24} />
                Chatear en WhatsApp
              </motion.a>
            </div>

            {/* Decorative background glass shape */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </section>
    </>
  );
}
