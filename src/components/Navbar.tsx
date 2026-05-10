import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Search, ChevronDown, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
           <div className="w-4 h-4 rounded-full border-2 border-white" />
        </div>
        <span className="text-white font-display font-bold text-xl tracking-tight">Aeline</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-white/90 font-medium text-sm uppercase tracking-wider">
        <a href="#" className="hover:text-white transition-colors">Inicio</a>
        <a href="#" className="hover:text-white transition-colors">Servicios</a>
        <a href="#" className="hover:text-white transition-colors">Nosotros</a>
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          Más Enlaces <ChevronDown size={14} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden md:flex p-2 text-white/80 hover:text-white">
          <Search size={20} />
        </button>
        <button className="bg-brand-lime text-slate-900 px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-tight hover:scale-105 transition-transform truncate max-w-[150px] md:max-w-none">
          Comprar
        </button>
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-900 z-[60] flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-lime flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-900" />
                </div>
                <span className="text-white font-display font-bold text-xl">Aeline</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              <a href="#" className="text-3xl font-display font-medium text-white hover:text-brand-lime transition-colors">Inicio</a>
              <a href="#" className="text-3xl font-display font-medium text-white hover:text-brand-lime transition-colors">Servicios</a>
              <a href="#about" className="text-3xl font-display font-medium text-white hover:text-brand-lime transition-colors">Nosotros</a>
              <a href="#benefits" className="text-3xl font-display font-medium text-white hover:text-brand-lime transition-colors">Beneficios</a>
              <a href="#" className="text-3xl font-display font-medium text-white hover:text-brand-lime transition-colors">Contacto</a>
            </div>

            <div className="mt-auto">
              <button className="w-full bg-brand-lime text-slate-900 py-4 rounded-2xl font-bold text-lg uppercase tracking-widest">
                Comprar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
