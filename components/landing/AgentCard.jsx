
import React from 'react';

const AgentCard = ({ agente, colors, abrirModal }) => {
  return (
    <div className="bg-[#1B3577] shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col">
      <img src={agente.imagen} alt={agente.nombre} className="w-full h-56 object-cover object-top" />
      <div className="p-6 text-center flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-white">{agente.nombre}</h2>
        <p className={`text-sm ${colors.text}`}>{agente.rol}</p>
        <p className="mt-2 font-bold text-white">{agente.precio}</p>
        <div className="mt-auto pt-4">
          <button onClick={() => abrirModal(agente)} className={`w-full px-5 py-2 rounded-lg transition ${colors.bg} text-white ${colors.hoverBg}`}>
            Más Información
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
