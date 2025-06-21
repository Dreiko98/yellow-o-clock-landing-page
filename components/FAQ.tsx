"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqs = [
    {
      question: "¿Cómo instalo Yellow o'clock?",
      answer: "Después de la compra, recibirás un enlace de descarga por email. Simplemente descarga el archivo .exe y ejecútalo. No requiere instalación compleja, es un ejecutable portable."
    },
    {
      question: "¿Funciona con todos los PDFs de natación?",
      answer: "Yellow o'clock funciona con PDFs de resultados de natación estándar y series. Si tienes un formato específico que no funciona, contáctanos y trabajaremos para añadir soporte."
    },
    {
      question: "¿En cuántos ordenadores puedo usar mi licencia?",
      answer: "Tu licencia te permite usar Yellow o'clock en todos tus dispositivos personales o de tu club deportivo. No hay límite de instalaciones."
    },
    {
      question: "¿Necesito conexión a internet para usar la aplicación?",
      answer: "No, Yellow o'clock funciona completamente offline. Solo necesitas internet para la descarga inicial. Todos tus PDFs permanecen en tu ordenador."
    },
    {
      question: "¿Puedo crear perfiles para diferentes clubes?",
      answer: "Sí, puedes crear perfiles ilimitados para diferentes clubes, equipos o categorías. Perfecto para entrenadores que trabajan con múltiples grupos."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "Ofrecemos garantía de devolución de 30 días sin preguntas. Si no estás satisfecho, te devolvemos el dinero completo."
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
            href="mailto:germanmallo04@gmail.com" 
            className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
          >
            📧 Contáctanos por email
          </a>
        </div>
      </div>
    </section>
  );
}
