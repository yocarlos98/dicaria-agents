
import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] border-t border-gray-700 text-white">
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img src="/logo.jpg" alt="Logo de DICARIA" className="w-16 h-16 rounded-full mx-auto md:mx-0"/>
          <h3 className="font-bold text-2xl mt-2">DICARIA</h3>
          <p className="text-gray-400">Inteligencia Artificial para Negocios.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-orange-400 transition"><Twitter /></a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition"><Linkedin /></a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition"><Instagram /></a>
        </div>
      </div>
      <div className="bg-black/20 py-4 px-6">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} DICARIA. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
