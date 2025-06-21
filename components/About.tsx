export default function About() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Hecho por y para clubes de natación
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="text-4xl mr-4">🏊‍♂️</div>
              <div className="text-4xl mr-4">💡</div>
              <div className="text-4xl">⚡</div>
            </div>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Yellow o'clock nace de la experiencia real de un nadador. Desarrollado por{' '}
              <span className="font-semibold text-blue-900">Germán Mallo Faure</span>, 
              nadador del <span className="font-semibold text-blue-900">Club Natación Mediterráneo Valencia</span>, 
              esta herramienta surge de la necesidad de acabar con el tedioso proceso de subrayar 
              manualmente las series en cada competición.
            </p>
            
            <p className="text-neutral-600 leading-relaxed">
              Sabemos lo que necesitas porque <strong>nosotros también lo vivimos</strong>. 
              Yellow o'clock es la solución que siempre quisiste tener: automática, rápida y pensada 
              específicamente para el mundo de la natación competitiva.
            </p>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-blue-100 rounded-xl p-6">
            <p className="text-sm text-blue-800 font-medium">
              💙 Desarrollado con cariño en Valencia para la comunidad de natación española 🏊‍♀️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
