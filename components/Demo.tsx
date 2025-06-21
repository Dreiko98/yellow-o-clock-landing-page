export default function Demo() {
  return (
    <section className="pt-8 pb-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4 px-4">
            Descubre Yellow o'clock en acción
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Observa cómo la aplicación subraya automáticamente los nadadores de tu club en las series
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-2">
          <div className="relative rounded-xl md:rounded-2xl shadow-xl overflow-hidden bg-white p-2 md:p-4">            <img 
              src="/demo.gif" 
              alt="Demostración de Yellow o'clock resaltando clubes en PDF"
              className="w-full h-auto rounded-md md:rounded-lg"
              style={{ maxHeight: '300px', objectFit: 'contain' }}
              loading="lazy"
            />
              {/* Fallback para usuarios con prefers-reduced-motion */}
            <noscript>
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded-md md:rounded-lg">
                <div className="text-center p-4">
                  <div className="text-2xl md:text-4xl mb-2 md:mb-4">🎯</div>
                  <p className="text-gray-600 text-sm md:text-base">Demo estática disponible</p>
                </div>
              </div>
            </noscript>
          </div>        </div>
      </div>
    </section>
  );
}
