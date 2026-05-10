/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoClouds from "./components/LogoClouds";
import About from "./components/About";
import Benefits from "./components/Benefits";
import WhoWeAre from "./components/WhoWeAre";
import BentoGrid from "./components/BentoGrid";
import Testimonials from "./components/Testimonials";
import WhatsAppCTA from "./components/WhatsAppCTA";

export default function App() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <WhoWeAre />
      <BentoGrid />
      <Testimonials />
      <WhatsAppCTA />
      
      {/* Footer Minimalist */}
      <footer className="py-20 px-6 border-t border-slate-100 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-white" />
            </div>
            <span className="text-slate-900 font-display font-bold text-xl tracking-tight">Aeline</span>
          </div>
          
          <div className="flex gap-8 text-slate-400 font-medium text-sm">
            <a href="#" className="hover:text-slate-900 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
          
          <p className="text-slate-400 text-sm">© 2026 Agencia Aeline. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
