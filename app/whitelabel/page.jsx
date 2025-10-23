"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Palette, Rocket, Check } from "lucide-react";

export default function WhiteLabelPage() {
  // Demo interactiva (nombre, color, logo)
  const [name, setName] = useState("Samanta");
  const [color, setColor] = useState("#ff7a00"); // naranja por defecto
  const [logo, setLogo] = useState("/images/sample_agent.jpg");

  const colorOptions = [
    { name: "Naranja", code: "#ff7a00" },
    { name: "Azul", code: "#2563eb" },
    { name: "Morado", code: "#8b5cf6" },
    { name: "Verde", code: "#22c55e" },
  ];

  function handleLogoUpload(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setLogo(URL.createObjectURL(f));
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight"
        >
          Tu agente inteligente, <span className="text-orange-400">con tu marca</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12 }}
          className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto"
        >
          Convierte nuestros agentes IA en productos que puedas vender con tu logo,
          nombre y estilo. Plug & Play — integración en web, WhatsApp o Telegram y soporte incluido.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#form"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
          >
            Solicitar acceso
          </a>
          <a
            href="#how"
            className="border border-white/20 px-6 py-3 rounded-2xl font-semibold text-white/90 hover:bg-white/5 transition"
          >
            Cómo funciona
          </a>
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-white/5 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/6 rounded-2xl p-6 text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <User className="text-orange-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">1. Elige un agente</h3>
            <p className="text-blue-100">Selecciona el agente perfecto para tu nicho (estética, inmobiliaria, fitness, emprendedores).</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/6 rounded-2xl p-6 text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Palette className="text-orange-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">2. Personalízalo</h3>
            <p className="text-blue-100">Cambia nombre, logo, colores y texto. Todo en una interfaz visual y sin código.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/6 rounded-2xl p-6 text-center"
          >
            <div className="mx-auto w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
              <Rocket className="text-orange-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">3. Véndelo como tuyo</h3>
            <p className="text-blue-100">Activa, cobra y escala tu negocio con soporte y hosting por DICARIA.</p>
          </motion.div>
        </div>
      </section>

      {/* DEMO INTERACTIVA */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Demo visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 text-blue-900 shadow-2xl"
          >
            <div className="flex flex-col items-center">
              <div
                className="w-48 h-48 rounded-full overflow-hidden border-8"
                style={{ borderColor: color }}
              >
                <img src={logo} alt="logo" className="w-full h-full object-cover" />
              </div>

              <h3 className="mt-6 text-3xl font-bold" style={{ color }}>{name}</h3>
              <p className="mt-2 text-sm text-blue-700 text-center max-w-xs">
                Ejemplo visual de cómo se verá tu agente cuando lo vendas con tu identidad.
              </p>

              <div className="mt-6 w-full">
                <div className="mb-3">
                  <label className="block text-sm font-medium text-blue-700 mb-2">Nombre del agente</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg px-4 py-2 border border-blue-100"
                  />
                </div>

                <div className="mb-3">
                  <label className="block text-sm font-medium text-blue-700 mb-2">Color principal</label>
                  <div className="flex gap-3">
                    {colorOptions.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => setColor(c.code)}
                        title={c.name}
                        className={`w-10 h-10 rounded-full border-2 ${color === c.code ? 'ring-4 ring-white/40' : ''}`}
                        style={{ backgroundColor: c.code }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Subir logo (demo)</label>
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="w-full text-sm" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto de apoyo + beneficios */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}>
            <h3 className="text-3xl font-bold mb-4">Personaliza en segundos y véndelo como tu producto</h3>
            <p className="text-blue-100 mb-6">
              No necesitas programar. Ofrece a tus clientes una solución completa (instalación en web, WhatsApp o Telegram)
              y gana por licencias y suscripciones. Nosotros mantenemos la IA y el soporte.
            </p>

            <div className="grid gap-4">
              <div className="flex items-start gap-3 bg-white/6 p-4 rounded-xl">
                <Check className="text-orange-400 mt-1" />
                <div>
                  <div className="font-semibold">Soporte incluido</div>
                  <div className="text-blue-100 text-sm">Ayudamos con la configuración inicial y actualizaciones.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/6 p-4 rounded-xl">
                <Check className="text-orange-400 mt-1" />
                <div>
                  <div className="font-semibold">Instalación Plug & Play</div>
                  <div className="text-blue-100 text-sm">Snippet para web, integración con WhatsApp o enlace directo.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/6 p-4 rounded-xl">
                <Check className="text-orange-400 mt-1" />
                <div>
                  <div className="font-semibold">Monetización inmediata</div>
                  <div className="text-blue-100 text-sm">Vende el agente y ofrece mantenimiento opcional.</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#form" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-semibold shadow">Quiero ser Partner</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLANS & CTA */}
      <section className="py-14 bg-white/6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Planes para partners</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-blue-900">
              <h4 className="font-semibold text-xl">Starter</h4>
              <p className="text-sm text-blue-700 my-3">1 licencia marca blanca + soporte básico</p>
              <div className="font-bold text-2xl">$99 / mes</div>
              <div className="mt-4"><a href="#form" className="inline-block bg-orange-500 px-4 py-2 rounded-lg text-white">Aplicar</a></div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-blue-900 border-2 border-orange-500">
              <h4 className="font-semibold text-xl">Agency</h4>
              <p className="text-sm text-blue-700 my-3">5 licencias + dashboard + soporte prioritario</p>
              <div className="font-bold text-2xl">$299 / mes</div>
              <div className="mt-4"><a href="#form" className="inline-block bg-orange-500 px-4 py-2 rounded-lg text-white">Aplicar</a></div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-blue-900">
              <h4 className="font-semibold text-xl">Enterprise</h4>
              <p className="text-sm text-blue-700 my-3">Licencias ilimitadas + API y soporte dedicado</p>
              <div className="font-bold text-2xl">$699 / mes</div>
              <div className="mt-4"><a href="#form" className="inline-block bg-orange-500 px-4 py-2 rounded-lg text-white">Aplicar</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-14 px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-blue-900 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Únete como Partner</h3>
          <p className="text-sm text-blue-700 mb-6">Déjanos tus datos y un especialista te contactará.</p>

          <form onSubmit={(e) => { e.preventDefault(); alert('Solicitud enviada. Te contactamos pronto.'); e.target.reset(); }}>
            <div className="grid grid-cols-1 gap-3">
              <input className="border px-4 py-2 rounded-md" placeholder="Nombre completo" required />
              <input type="email" className="border px-4 py-2 rounded-md" placeholder="Correo electrónico" required />
              <input className="border px-4 py-2 rounded-md" placeholder="Empresa (opcional)" />
              <textarea className="border px-4 py-2 rounded-md" rows={4} placeholder="Cuéntanos tu interés" required />
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-blue-700">Te responderemos en 24–48 horas.</div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-2xl font-semibold">Enviar solicitud</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-white/60">
        © DICARIA 2025 — Plataforma White Label de Agentes IA
      </footer>
    </main>
  );
}
