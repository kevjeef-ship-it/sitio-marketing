import { motion } from "motion/react";
import { Menu, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
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
        <button className="bg-brand-lime text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-tight hover:scale-105 transition-transform">
          Consultar Precios
        </button>
        <button className="md:hidden p-2 text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
