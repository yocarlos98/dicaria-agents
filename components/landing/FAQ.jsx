
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para usar un agente?",
    answer: "No, en absoluto. Nuestros agentes son 'Plug & Play'. Nosotros nos encargamos de la configuración inicial y te damos el soporte que necesites para que todo funcione perfectamente."
  },
  {
    question: "¿En qué plataformas funcionan los agentes?",
    answer: "Se integran fácilmente con las herramientas que ya usas: tu página web, WhatsApp Business, Telegram, Messenger y más. Nos adaptamos a tu ecosistema digital."
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer: "El proceso es muy rápido. Dependiendo de la complejidad, tu agente puede estar operativo en tan solo 24-48 horas después de la contratación."
  },
  {
    question: "¿Puedo personalizar las respuestas del agente?",
    answer: "Sí. Aunque vienen pre-entrenados para cada sector, trabajamos contigo para ajustar su tono, respuestas y personalidad a la identidad de tu marca."
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Ofrecemos soporte continuo para resolver cualquier duda o problema. Tu éxito es nuestro éxito, por lo que te acompañamos durante todo el proceso."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-white">{faq.question}</span>
        {isOpen ? <Minus className="text-orange-400" /> : <Plus className="text-orange-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-gray-300">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Preguntas Frecuentes</h2>
        <p className="text-gray-300 mt-2">Resolvemos tus dudas más comunes.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            faq={faq} 
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
