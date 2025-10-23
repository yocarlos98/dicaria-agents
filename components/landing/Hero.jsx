
import React from 'react';

export default function Hero() {
  return (
    <div className="text-center py-20 px-6">
      <img src="/logo.jpg" alt="Logo de DICARIA" className="mx-auto mb-6 w-28 h-28 rounded-full border-4 border-orange-400 p-1" />
      <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        Inteligencia Artificial que <span className="text-orange-400">Trabaja para Ti</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6">
        En DICARIA transformamos negocios con agentes de IA que automatizan tareas, optimizan procesos y potencian tus resultados, permitiéndote enfocarte en lo que realmente importa: crecer.
      </p>
      <div className="mt-10">
        <a
          href="#agentes"
          className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-orange-600 transition transform hover:scale-105"
        >
          Conoce a los Agentes
        </a>
      </div>
    </div>
  );
}
