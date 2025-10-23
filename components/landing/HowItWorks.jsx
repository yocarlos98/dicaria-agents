
import React from 'react';
import { File, AppWindow, Globe } from 'lucide-react'; // Usaremos íconos para hacerlo más visual

const steps = [
  {
    icon: <File size={40} className="text-orange-400" />,
    title: "1. Elige tu Agente",
    description: "Explora nuestros agentes especializados y selecciona el que mejor se adapte a las necesidades de tu negocio."
  },
  {
    icon: <AppWindow size={40} className="text-orange-400" />,
    title: "2. Lo Integramos por Ti",
    description: "Nuestro equipo se encarga de la configuración e integración en tus canales (web, WhatsApp, etc.) de forma rápida y sin complicaciones."
  },
  {
    icon: <Globe size={40} className="text-orange-400" />,
    title: "3. Empieza a Crecer",
    description: "Tu agente empieza a trabajar de inmediato, atendiendo clientes, agendando citas y optimizando tu negocio 24/7."
  }
];

export default function HowItWorks() {
  return (
    <div className="py-20 px-6 bg-[#0A1F44]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Empieza a Automatizar en 3 Pasos</h2>
        <p className="text-gray-300 mt-2">Nuestro proceso está diseñado para ser rápido y eficiente.</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {steps.map((step, index) => (
          <div key={index} className="bg-[#142F66] p-8 rounded-xl border border-gray-700 transform hover:scale-105 hover:border-orange-400 transition">
            <div className="flex justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
