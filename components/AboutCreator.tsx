export default function AboutCreator() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hecho por y para nadadores
            </h2>
            <div className="h-1 w-24 bg-[#F7C700] mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
              {/* Foto nadando - lado izquierdo */}
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-48 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white/30">
                  <img 
                    src="/foto_nadando.png" 
                    alt="Germán Mallo nadando" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content central */}
              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Germán Mallo
                </h3>
                <p className="text-blue-100 text-lg mb-4">
                  Nadador • Ingeniero de Software • Científico de Datos
                </p>
                
                <p className="text-white/90 leading-relaxed mb-6">
                  Como nadador del Club Natación Mediterráneo Valencia, conocía perfectamente 
                  el problema: perder tiempo subrayando series manualmente en cada competición. 
                  Yellow o'clock nace de esa necesidad real, desarrollada por alguien que vive 
                  el mundo de la natación competitiva cada día y cuenta con las habilidades técnicas 
                  para crear la solución perfecta.
                </p>
                
                <a 
                  href="https://germanmallo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F7C700] text-blue-900 
                             font-bold rounded-lg hover:bg-[#e0b800] transition-all duration-200
                             shadow-lg hover:shadow-xl active:scale-95"
                >
                  🌐 Visita germanmallo.com
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              {/* Foto profesional - lado derecho */}
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-48 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white/30">
                  <img 
                    src="/foto_profesional.png" 
                    alt="Germán Mallo - Ingeniero de Software" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Fotos en móvil - horizontal */}
            <div className="flex md:hidden gap-4 justify-center mt-6">
              <div className="w-32 h-40 rounded-lg overflow-hidden shadow-xl border-2 border-white/30">
                <img 
                  src="/foto_nadando.png" 
                  alt="Germán nadando" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-32 h-40 rounded-lg overflow-hidden shadow-xl border-2 border-white/30">
                <img 
                  src="/foto_profesional.png" 
                  alt="Germán profesional" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-blue-100 text-sm">
              💙 Desarrollado con pasión en Valencia para la comunidad de natación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
