
'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Desde que integramos a Samanta, nuestras reservas aumentaron un 30%. Es increíble cómo gestiona las citas sin que tengamos que intervenir. ¡Totalmente recomendado!",
    name: "Ana García",
    title: "CEO, Clínica Estética Belleza Total",
    image: "/images/AnaGarcia.jpg"
  },
  {
    quote: "Cristian califica a los leads de una forma que nuestro equipo no podía. Ahora solo hablamos con clientes realmente interesados. Nos ahorra horas de trabajo cada día.",
    name: "Fernando Restrepo",
    title: "Emprendedor, Innovación Digital",
    image: "/images/FernandoRestrepo.jpg"
  },
  {
    quote: "Tener a Catalina en nuestro gimnasio ha mejorado la retención de clientes. Los mensajes de motivación y recordatorios son un éxito. ¡Nuestros socios la adoran!",
    name: "Laura Fernández",
    title: "Manager, PowerFit Gym",
    image: "/images/LauraFernandez.jpg"
  }
];

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

export default function Testimonials() {
  return (
    <div className="py-20 px-6 bg-[#0A1F44]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Lo que Dicen Nuestros Clientes</h2>
        <p className="text-gray-300 mt-2">Resultados reales para negocios reales.</p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-[#142F66] p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover object-top mb-6 border-4 border-orange-400" />
            <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
            <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
            <p className="text-orange-400">{testimonial.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
