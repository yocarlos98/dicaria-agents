import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function ZeusCard({ agente, colors, abrirModal }) {
  return (
    <motion.div
      className="col-span-full md:col-span-3 bg-[#142F66] p-8 rounded-3xl border-4 border-purple-600 shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background effect for "throne" feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 opacity-20 rounded-3xl z-0"></div>
      <div className="absolute inset-0 bg-pattern-grid opacity-5 z-0"></div> {/* Optional: add a subtle grid pattern */}

      <div className="relative z-10 flex flex-col items-center">
        <img src={agente.imagen} alt={agente.nombre} className="w-48 h-48 object-cover rounded-full mb-6 border-8 border-purple-500 shadow-lg" />
        <h3 className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg">{agente.nombre}</h3>
        <p className="text-2xl font-semibold text-purple-400 mb-4">{agente.rol}</p>
        <p className="text-gray-200 text-lg mb-6 max-w-2xl">{agente.descripcion}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {agente.beneficios?.slice(0, 3).map((beneficio, i) => ( // Show top 3 benefits
            <span key={i} className="bg-purple-800 text-white text-sm px-4 py-2 rounded-full shadow-md">
              ✅ {beneficio}
            </span>
          ))}
        </div>

        <p className="text-4xl font-bold text-purple-300 mb-8 drop-shadow-md">{agente.precio}</p>

        <button
          onClick={() => abrirModal(agente)}
          className="bg-purple-700 text-white text-xl font-bold px-10 py-4 rounded-full hover:bg-purple-800 transform hover:scale-105 transition-all duration-300 shadow-xl uppercase tracking-wider"
        >
          Conoce a Zeus
        </button>
      </div>
    </motion.div>
  );
}