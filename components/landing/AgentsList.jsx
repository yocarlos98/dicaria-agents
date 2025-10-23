'use client';
import { useState, useEffect, useRef } from "react";
import { agentsData } from "@/app/whitelabel/agents-data.js";
import AgentCard from "./AgentCard.jsx";

// Definimos los colores para que Tailwind CSS pueda detectarlos
const colorClasses = {
  orange: {
    text: 'text-orange-400',
    bg: 'bg-orange-500',
    hoverBg: 'hover:bg-orange-600',
    border: 'focus:border-orange-500',
    chatBubble: 'bg-orange-500'
  },
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500',
    hoverBg: 'hover:bg-blue-600',
    border: 'focus:border-blue-500',
    chatBubble: 'bg-blue-500'
  },
  pink: {
    text: 'text-pink-400',
    bg: 'bg-pink-500',
    hoverBg: 'hover:bg-pink-600',
    border: 'focus:border-pink-500',
    chatBubble: 'bg-pink-500'
  },
  green: {
    text: 'text-green-400',
    bg: 'bg-green-500',
    hoverBg: 'hover:bg-green-600',
    border: 'focus:border-green-500',
    chatBubble: 'bg-green-500'
  }
};

export default function AgentsList() {
  const [agenteSeleccionado, setAgenteSeleccionado] = useState(null);
  const [modalView, setModalView] = useState('details'); // 'details', 'chat', 'form'
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);

  // Agrupar agentes por categoría
  const agentesPorCategoria = agentsData.reduce((acc, agente) => {
    const categoria = agente.categoria || 'General';
    if (!acc[categoria]) acc[categoria] = [];
    acc[categoria].push(agente);
    return acc;
  }, {});

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const abrirModal = (agente) => {
    setAgenteSeleccionado(agente);
    setModalView('details');
    setMessages([]);
  };

  const cerrarModal = () => {
    setAgenteSeleccionado(null);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    setTimeout(() => {
      const botResponse = { text: 'Hola! Gracias por tu mensaje. Soy un bot de demostración para que veas cómo funciono. ¿En qué más te puedo ayudar?', sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    }, 1200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('✅ Tu solicitud de contrato ha sido enviada. Pronto nos pondremos en contacto.');
    cerrarModal();
  };

  const renderModalContent = () => {
    if (!agenteSeleccionado) return null;
    
    const colors = colorClasses[agenteSeleccionado.color] || colorClasses.orange;

    switch (modalView) {
      case 'chat':
        return (
          <div className="flex flex-col h-[70vh]">
            <div className="flex items-center mb-4 border-b border-gray-700 pb-3">
                <img src={agenteSeleccionado.imagen} alt={agenteSeleccionado.nombre} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                    <h3 className="text-xl font-bold text-white">Chatea con {agenteSeleccionado.nombre}</h3>
                    <p className={`text-sm ${colors.text}`}>Online</p>
                </div>
            </div>
            <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 bg-[#0A1F44]/50 rounded-lg mb-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? `${colors.chatBubble} text-white` : 'bg-gray-700 text-gray-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className={`flex-grow px-4 py-2 rounded-l-lg bg-[#0A1F44] text-white border border-gray-500 ${colors.border} focus:outline-none`}
                placeholder="Escribe un mensaje..."
              />
              <button onClick={handleSendMessage} className={`${colors.bg} text-white px-6 py-2 rounded-r-lg ${colors.hoverBg}`}>Enviar</button>
            </div>
            <button onClick={() => setModalView('details')} className="text-gray-300 hover:text-white mt-4 text-sm">← Volver a detalles</button>
          </div>
        );
      case 'form':
        return (
          <form onSubmit={handleFormSubmit} className="text-left space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-4 text-white">Solicitud para {agenteSeleccionado.nombre}</h2>
            <div>
              <label className="block text-gray-300 mb-1">Nombre completo</label>
              <input type="text" required className={`w-full px-4 py-2 rounded-lg bg-[#0A1F44] text-white border border-gray-500 ${colors.border} focus:outline-none`} />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Correo electrónico</label>
              <input type="email" required className={`w-full px-4 py-2 rounded-lg bg-[#0A1F44] text-white border border-gray-500 ${colors.border} focus:outline-none`} />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Cuéntanos tu necesidad</label>
              <textarea required rows="3" className={`w-full px-4 py-2 rounded-lg bg-[#0A1F44] text-white border border-gray-500 ${colors.border} focus:outline-none`}></textarea>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button type="button" onClick={() => setModalView('details')} className="text-gray-300 hover:text-white">← Volver</button>
              <button type="submit" className={`${colors.bg} ${colors.hoverBg} text-white font-semibold py-2 px-6 rounded-lg`}>Enviar Solicitud</button>
            </div>
          </form>
        );
      default: // 'details'
        return (
          <>
            <img src={agenteSeleccionado.imagen} alt={agenteSeleccionado.nombre} className="w-full object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold text-white">{agenteSeleccionado.nombre}</h2>
            <p className={colors.text}>{agenteSeleccionado.rol}</p>
            {agenteSeleccionado.personalidad && <p className="text-gray-400 text-sm mt-1">**Personalidad:** {agenteSeleccionado.personalidad}</p>}
            <p className="mt-4 text-gray-300">{agenteSeleccionado.descripcion}</p>
            
            {agenteSeleccionado.funcionClave1 && agenteSeleccionado.funcionClave2 && (
              <div className="mt-4 text-left">
                <h4 className="text-lg font-semibold text-white">Funciones Clave:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>{agenteSeleccionado.funcionClave1}</li>
                  <li>{agenteSeleccionado.funcionClave2}</li>
                </ul>
              </div>
            )}

            {agenteSeleccionado.beneficioCentral && (
              <p className={`mt-4 text-lg font-bold ${colors.text}`}>🎯 Beneficio Central: {agenteSeleccionado.beneficioCentral}</p>
            )}

            <div className="mt-4 text-left">
              {agenteSeleccionado.beneficios?.map((beneficio, i) => (
                <p key={i} className="text-gray-300">✅ {beneficio}</p>
              ))}
            </div>

            <p className={`mt-4 font-semibold ${colors.text}`}>{agenteSeleccionado.precio}</p>
            <h3 className="mt-6 text-lg font-semibold text-white">Preguntas del Agente</h3>
            <ul className="mt-2 space-y-3 text-left">
              {agenteSeleccionado.faqs.map((faq, i) => (
                <li key={i} className="border-b border-gray-700 pb-2">
                  <p className={`font-semibold ${colors.text}`}>{faq.pregunta}</p>
                  <p className="text-gray-300 text-sm">{faq.respuesta}</p>
                </li>
              ))}
            </ul>
            {agenteSeleccionado.integracion && (
              <div className="mt-6 text-left">
                <h3 className="text-lg font-semibold text-white">Requisitos de Integración:</h3>
                <ul className="mt-2 space-y-2 text-gray-300">
                  <li><span className="font-semibold">Compatibilidad de Canal:</span> {agenteSeleccionado.integracion.compatibilidadCanal.join(', ')}</li>
                  <li><span className="font-semibold">Requisitos de Conexión:</span> {agenteSeleccionado.integracion.requisitosConexion}</li>
                  <li><span className="font-semibold">Funciones de Marca Blanca:</span> {agenteSeleccionado.integracion.funcionesMarcaBlanca}</li>
                </ul>
              </div>
            )}
            <div className="flex justify-center gap-4 mt-6">
                <button onClick={() => setModalView('chat')} className="bg-gray-600 text-white px-5 py-2 rounded-xl hover:bg-gray-700 transition">Conversar</button>
                <button onClick={() => setModalView('form')} className={`${colors.bg} text-white px-5 py-2 rounded-xl ${colors.hoverBg} transition`}>Contratar</button>
            </div>
          </>
        );
    }
  };

  return (
    <div id="agentes" className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Un Marketplace de Agentes para cada Necesidad</h2>
        <p className="text-gray-300 mt-2 max-w-3xl mx-auto">Explora nuestras categorías y encuentra el agente de IA perfecto para llevar tu negocio al siguiente nivel.</p>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(agentesPorCategoria).map(([categoria, agentes]) => (
          <div key={categoria}>
            <h3 className="text-3xl font-bold text-orange-400 mb-8 text-center md:text-left">{categoria}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentes.map((agente) => {
                const colors = colorClasses[agente.color] || colorClasses.orange;
                return (
                  <AgentCard
                    key={agente.id}
                    agente={agente}
                    colors={colors}
                    abrirModal={abrirModal}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {agenteSeleccionado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4">
          <div className="bg-[#142F66] rounded-2xl shadow-lg max-w-lg w-full p-6 relative text-left overflow-y-auto max-h-[90vh] border border-gray-700">
            <button onClick={cerrarModal} className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl z-10">&times;</button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
}