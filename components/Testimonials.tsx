"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sergio Bermejo",
      role: "Entrenador Principal",
      club: "Club Natación Mediterráneo",
      avatar: "👨‍🏫",
      quote: "Yellow o'clock me ahorra más de 2 horas en cada competición. Antes tenía que revisar resultado por resultado manualmente.",
      rating: 5
    },
    {
      name: "Beatriz Pérez",
      role: "Delegada de Equipo",
      club: "Club Natación Mediterráneo",
      avatar: "🙋‍♂️",
      quote: "Perfecto para manejas múltiples clubes al mismo tiempo, estaba harta de estar cambiando constantemente de rotulador.",
      rating: 5
    },
    {
      name: "Pablo Estivalis",
      role: "Director Deportivo",
      club: "Club Natación Mediterráneo",
      avatar: "👨‍💻",
      quote: "La funcionalidad offline es clave para nosotros. No dependemos de conexión a internet en las piscinas.",
      rating: 5
    }
  ];  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Lo que dicen los profesionales
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Entrenadores, padres y organizadores ya confían en Yellow o&apos;clock
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    className="text-yellow-500 text-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-blue-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.club}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Utilizado por clubes en toda España</p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏊‍♂️</span>
              <span className="text-sm font-medium">+50 Clubes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⏱️</span>
              <span className="text-sm font-medium">+1000 Horas ahorradas</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📄</span>
              <span className="text-sm font-medium">+5000 PDFs procesados</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
