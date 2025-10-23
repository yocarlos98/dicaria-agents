import { useState, useEffect, useRef } from "react";

const agentes = {
  samanta: {
    nombre: "Samanta",
    rol: "Agente IA para Clínicas Estéticas",
    precio: "$39 USD / mes",
    imagen: "/images/Samanta.jpg",
    descripcion: `Samanta es la asistente virtual perfecta para tu clínica estética. Atiende a tus clientes día y noche, responde preguntas comunes y agenda citas automáticamente sin que tú muevas un dedo.
    
✅ Se instala en minutos (Plug & Play)  
✅ Funciona en tu página web, WhatsApp o Telegram  
✅ Incluye soporte para ayudarte con la configuración inicial  

💄 Ideal para clínicas que quieren verse profesionales, aumentar sus reservas y no perder clientes por mensajes sin responder.`,
    faqs: [
      { pregunta: "¿Necesito saber de tecnología para usarla?", respuesta: "No, Samanta está lista para usar. Nuestro equipo te guía paso a paso en la instalación." },
      { pregunta: "¿Puedo integrarla con mi WhatsApp Business?", respuesta: "Sí, funciona con WhatsApp, Telegram o directamente en tu página web." },
      { pregunta: "¿Qué pasa si tengo problemas al instalarla?", respuesta: "Tienes soporte incluido para resolver cualquier duda durante la configuración." }
    ]
  },
  cristian: {
    nombre: "Cristian",
    rol: "Agente IA para Inmobiliarias",
    precio: "$49 USD / mes",
    imagen: "/images/Cristian.jpg",
    descripcion: `Cristian es tu nuevo asesor inmobiliario digital. Atiende a interesados en segundos, califica leads automáticamente y agenda visitas sin intervención humana.
    
✅ Instalación rápida y sin complicaciones  
✅ Conecta con tu WhatsApp o sitio web  
✅ Soporte técnico incluido para ayudarte con todo  

🏠 Ideal para inmobiliarias que quieren vender más propiedades con menos esfuerzo y sin perder clientes por demoras.`,
    faqs: [
      { pregunta: "¿Puede Cristian responder en tiempo real?", respuesta: "Sí, responde automáticamente 24/7 a cualquier interesado." },
      { pregunta: "¿Se integra con mis formularios web?", respuesta: "Sí, puedes conectarlo fácilmente a tus formularios o landing pages." },
      { pregunta: "¿Necesito un programador para instalarlo?", respuesta: "No, nuestro soporte te ayuda a instalarlo en minutos." }
    ]
  },
  catalina: {
    nombre: "Catalina",
    rol: "Agente IA para Gimnasios",
    precio: "$29 USD / mes",
    imagen: "/images/Catalina.jpg",
    descripcion: `Catalina mantiene tu gimnasio lleno y a tus clientes motivados. Envía recordatorios de asistencia, mensajes automáticos y cobra membresías atrasadas sin fricción.
    
✅ Se instala fácilmente en tu web o WhatsApp  
✅ No necesitas conocimientos técnicos  
✅ Soporte incluido para ayudarte con la configuración  

🏋️‍♀️ Ideal para gimnasios o estudios fitness que quieren aumentar retención, ventas y fidelización de clientes.`,
    faqs: [
      { pregunta: "¿Catalina motiva a mis clientes?", respuesta: "Sí, envía mensajes automáticos de motivación y recordatorios personalizados." },
      { pregunta: "¿Puedo usarla desde mi celular?", respuesta: "Sí, puedes acceder desde cualquier dispositivo." },
      { pregunta: "¿Incluye soporte?", respuesta: "Sí, nuestro equipo te guía durante la instalación y primeros pasos." }
    ]
  },
  jhoan: {
    nombre: "Jhoan",
    rol: "Agente IA para Emprendedores",
    precio: "$19 USD / mes",
    imagen: "/images/Jhoan.jpg",
    descripcion: `Jhoan es tu coach digital de productividad. Envía recordatorios, mensajes motivadores y consejos diarios personalizados para mantenerte enfocado y avanzar.
    
✅ Instalación tipo Plug & Play  
✅ Compatible con WhatsApp, Telegram o tu web  
✅ Soporte gratuito para ayudarte a activarlo  

🚀 Ideal para emprendedores, freelancers o equipos que quieren mantener la energía, el foco y los resultados día a día.`,
    faqs: [
      { pregunta: "¿Qué tipo de mensajes envía Jhoan?", respuesta: "Recordatorios, frases motivadoras y tips prácticos para mantenerte productivo." },
      { pregunta: "¿Puedo personalizar los mensajes?", respuesta: "Sí, puedes editar el tono, los horarios y los temas." },
      { pregunta: "¿Necesito instalar algo complicado?", respuesta: "No, Jhoan es Plug & Play. En minutos estará funcionando." }
    ]
  }
};

export default function Agentes() {
  const [agenteSeleccionado, setAgenteSeleccionado] = useState(null);
  const [modalView, setModalView] = useState('details'); // 'details', 'chat', 'form'
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);

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
    switch (modalView) {
      case 'chat':
        return (
          <div className="flex flex-col h-[70vh]">
            <div className="flex items-center mb-4 border-b border-gray-700 pb-3">
                <img src={agenteSeleccionado.imagen} alt={agenteSeleccionado.nombre} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                    <h3 className="text-xl font-bold text-white">Chatea con {agenteSeleccionado.nombre}</h3>
                    <p className="text-sm text-green-400">Online</p>
                </div>
            </div>
            <div ref={chatContainerRef} className="flex-grow overflow-y-auto p-4 bg-[#0A1F44]/50 rounded-lg mb-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
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
                className="flex-grow px-4 py-2 rounded-l-lg bg-[#0A1F44] text-white border border-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="Escribe un mensaje..."
              />
              <button onClick={handleSendMessage} className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600">Enviar</button>
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
              <input type="text" required className="w-full px-4 py-2 rounded-lg bg-[#0A1F44] text-white border border-gray-500 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Correo electrónico</label>
              <input type="email" required className="w-full px-4 py-2 rounded-lg bg-[#0A1F44] text-white border border-gray-500 focus:border-orange-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Cuéntanos tu necesidad</label>
              <textarea required rows="3" className="w-full px-4 py-2 rounded-lg bg-[#0A1F44] text-white border border-gray-500 focus:border-orange-500 focus:outline-none"></textarea>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button type="button" onClick={() => setModalView('details')} className="text-gray-300 hover:text-white">← Volver</button>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg">Enviar Solicitud</button>
            </div>
          </form>
        );
      default: // 'details'
        return (
          <>
            <img src={agenteSeleccionado.imagen} alt={agenteSeleccionado.nombre} className="w-full h-64 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-bold text-white">{agenteSeleccionado.nombre}</h2>
            <p className="text-orange-400">{agenteSeleccionado.rol}</p>
            <p className="mt-4 text-gray-300 whitespace-pre-line">{agenteSeleccionado.descripcion}</p>
            <p className="mt-4 font-semibold text-orange-400">{agenteSeleccionado.precio}</p>
            <h3 className="mt-6 text-lg font-semibold text-white">Preguntas Frecuentes</h3>
            <ul className="mt-2 space-y-3">
              {agenteSeleccionado.faqs.map((faq, i) => (
                <li key={i} className="border-b border-gray-700 pb-2">
                  <p className="font-semibold text-orange-400">{faq.pregunta}</p>
                  <p className="text-gray-300 text-sm">{faq.respuesta}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4 mt-6">
                <button onClick={() => setModalView('chat')} className="bg-gray-600 text-white px-5 py-2 rounded-xl hover:bg-gray-700 transition">Conversar</button>
                <button onClick={() => setModalView('form')} className="bg-orange-500 text-white px-5 py-2 rounded-xl hover:bg-orange-600 transition">Contratar</button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1F44] to-[#142F66] text-white py-16 px-6">
      <div className="text-center mb-16">
        <img src="/logo.jpg" alt="Logo de DICARIA" className="mx-auto mb-6 w-24 h-24 rounded-full border-2 border-orange-400 p-1" />
        <h1 className="text-5xl font-bold text-white tracking-tight">DICARIA</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          En DICARIA, transformamos negocios a través de inteligencia artificial. Creamos agentes especializados que automatizan tareas, optimizan procesos y potencian tus resultados, permitiéndote enfocarte en lo que realmente importa: crecer.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Conoce a Nuestros Agentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.values(agentes).map((agente, index) => (
          <div key={index} className="bg-[#1B3577] shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
            <img src={agente.imagen} alt={agente.nombre} className="w-full h-56 object-cover object-top" />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-white">{agente.nombre}</h2>
              <p className="text-gray-300">{agente.rol}</p>
              <p className="mt-2 font-bold text-orange-400">{agente.precio}</p>
              <button onClick={() => abrirModal(agente)} className="mt-4 px-4 py-2 rounded-xl transition bg-orange-500 text-white hover:bg-orange-600">
                Más Información
              </button>
            </div>
          </div>
        ))}
      </div>

      {agenteSeleccionado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-[#142F66] rounded-2xl shadow-lg max-w-lg w-full p-6 relative text-left overflow-y-auto max-h-[90vh]">
            <button onClick={cerrarModal} className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl z-10">&times;</button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </div>
  );
}
