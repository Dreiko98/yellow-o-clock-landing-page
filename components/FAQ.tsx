"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqs = [
    {
      question: "¿Cómo descargo Yellow o'clock?",
      answer: "Simplemente haz clic en el botón 'Descargar Gratis' y se descargará el archivo ejecutable (.exe). No requiere instalación compleja, es un ejecutable portable que puedes usar inmediatamente."
    },
    {
      question: "¿Es realmente gratis?",
      answer: "Sí, Yellow o'clock es completamente gratuito. No hay costes ocultos, suscripciones ni pagos. Es mi forma de contribuir a la comunidad de natación."
    },
    {
      question: "¿Funciona con todos los PDFs de natación?",
      answer: "Yellow o'clock funciona con PDFs de resultados de natación estándar y series. Si tienes un formato específico que no funciona, contáctame a través de germanmallo.com y trabajaré para añadir soporte."
    },
    {
      question: "¿En cuántos ordenadores puedo usarlo?",
      answer: "Puedes usar Yellow o'clock en todos los dispositivos que quieras, sin ningún tipo de limitación. Es tuyo para siempre."
    },
    {
      question: "¿Necesito conexión a internet para usar la aplicación?",
      answer: "No, Yellow o'clock funciona completamente offline. Solo necesitas internet para la descarga inicial. Todos tus PDFs permanecen en tu ordenador y tu privacidad está garantizada."
    },
    {
      question: "¿Puedo crear perfiles para diferentes clubes?",
      answer: "Sí, puedes crear perfiles ilimitados para diferentes clubes, equipos o categorías. Perfecto para entrenadores que trabajan con múltiples grupos."
    },
    {
      question: "¿Qué requisitos necesita mi ordenador?",
      answer: "Yellow o'clock funciona en Windows 10 o superior. Es una aplicación ligera que no requiere grandes recursos del sistema."
    },
    {
      question: "¿Ofrecéis soporte técnico personalizado?",
      answer: "Sí, ofrezco servicios de soporte técnico profesional y personalizado para empresas, clubes o federaciones que requieran asistencia prioritaria, personalización de funcionalidades o formación especializada. Contacta conmigo en info@germanmallo.com para más información sobre los servicios disponibles."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-neutral-600">
            Resolvemos todas tus dudas sobre Yellow o'clock
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-blue-900">
                  {faq.question}
                </span>
                <span className="text-2xl text-blue-900 transform transition-transform">
                  {openItem === index ? '−' : '+'}
                </span>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4">
                  <p className="text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-4">
            ¿Tienes otra pregunta?
          </p>
          <a 
            href="mailto:info@germanmallo.com" 
            className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
          >
            📧 Contáctanos por email
          </a>
        </div>
      </div>
    </section>
  );
}
