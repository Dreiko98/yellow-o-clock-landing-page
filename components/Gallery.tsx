"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Antes: PDF original",
      description: "Resultados sin procesar - difícil encontrar tu club",
      image: "📄",
      bgColor: "from-gray-100 to-gray-200",
      textColor: "text-gray-700"
    },
    {
      title: "Después: Yellow o'clock",
      description: "Nadadores de tu club destacados automáticamente",
      image: "✨",
      bgColor: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800"
    },
    {
      title: "Configuración simple",
      description: "Interfaz intuitiva para gestionar perfiles de clubes",
      image: "⚙️",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-800"
    },
    {
      title: "Múltiples formatos",
      description: "Compatible con diferentes tipos de series y competiciones",
      image: "📊",
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-800"
    },
    {
      title: "Resultados instantáneos",
      description: "Procesamiento en segundos, sin esperas",
      image: "⚡",
      bgColor: "from-purple-100 to-purple-200",
      textColor: "text-purple-800"
    },
    {
      title: "Totalmente offline",
      description: "Funciona sin conexión a internet, datos seguros",
      image: "🔒",
      bgColor: "from-red-100 to-red-200",
      textColor: "text-red-800"
    }
  ];

  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Antes vs Después
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo Yellow o'clock transforma tu experiencia analizando resultados de natación
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">😓</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Antes: Manual y lento</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-3">❌</span>
                  Revisar línea por línea manualmente
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-3">❌</span>
                  Perder nadadores entre cientos de resultados
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-3">❌</span>
                  Horas de trabajo por competición
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-3">❌</span>
                  Errores por cansancio visual
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-300 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center relative z-10">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Después: Automático y preciso</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center text-yellow-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Detección automática instantánea
                </div>
                <div className="flex items-center text-yellow-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Subrayado visual destacado
                </div>
                <div className="flex items-center text-yellow-700">
                  <span className="text-green-500 mr-3">✅</span>
                  Procesamiento en segundos
                </div>
                <div className="flex items-center text-yellow-700">
                  <span className="text-green-500 mr-3">✅</span>
                  100% precisión, cero errores
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-yellow-300 text-4xl opacity-20">⭐</div>
            <div className="absolute bottom-4 left-4 text-yellow-300 text-3xl opacity-20">✨</div>
          </motion.div>
        </div>        {/* Feature Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Funcionalidades destacadas</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cada función está diseñada pensando en la eficiencia y facilidad de uso para entrenadores y gestores deportivos
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{galleryItems.map((item, index) => (            <motion.div
              key={index}
              className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-500 hover:border hover:border-white/30 group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="text-center transform group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.image}</div>
                <h3 className={`font-bold mb-2 ${item.textColor} group-hover:scale-95 transition-transform duration-300`}>{item.title}</h3>
                <p className={`text-sm ${item.textColor} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>{item.description}</p>
              </div>            </motion.div>
          ))}
        </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu flujo de trabajo?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Únete a los profesionales que ya ahorran horas con Yellow o&apos;clock
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 Descargar PDF de ejemplo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>      {/* Modal for enlarged view */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">{galleryItems[selectedImage].image}</div>
              <h3 className="text-xl font-bold mb-4">{galleryItems[selectedImage].title}</h3>
              <p className="text-gray-600 mb-6">{galleryItems[selectedImage].description}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
