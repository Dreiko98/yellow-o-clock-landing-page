import DownloadButton from './DownloadButton';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-16 pb-24 md:pt-20 md:pb-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"></div>
      
      {/* Gradiente muy suave hacia blanco - más extenso y con más paradas */}
      <div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-t from-white via-white/80 via-white/50 via-white/25 via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Logo - versión mejorada para fondo azul y responsive */}
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/15 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/25 shadow-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                {/* Reloj con tamaños responsive */}
                <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#F7C700" stroke="white" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="16" fill="none" stroke="#174E8C" strokeWidth="1.5"/>
                  <line x1="24" y1="12" x2="24" y2="20" stroke="#174E8C" strokeWidth="1.5"/>
                  <line x1="24" y1="28" x2="24" y2="36" stroke="#174E8C" strokeWidth="1.5"/>
                  <line x1="12" y1="24" x2="20" y2="24" stroke="#174E8C" strokeWidth="1.5"/>
                  <line x1="28" y1="24" x2="36" y2="24" stroke="#174E8C" strokeWidth="1.5"/>
                  <line x1="24" y1="24" x2="30.4" y2="17.6" stroke="#174E8C" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="24" y1="24" x2="24" y2="16" stroke="#174E8C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base md:text-lg leading-tight">Yellow</div>
                <div className="text-blue-100 text-xs md:text-sm font-medium">o'clock</div>
              </div>
            </div>
          </div>          {/* Título principal - responsive */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
            Da color a tus resultados en PDF
          </h1>
          
          {/* Subtítulo - responsive */}
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4 md:mb-6 px-4">
            La aplicación de escritorio que subraya automáticamente los nadadores de tu club 
            en las series de natación. Simple, rápida y completamente offline.
          </p>
          
          {/* Firma del creador */}
          <div className="mb-6 md:mb-8">
            <p className="text-white/90 text-sm md:text-base font-medium">
              Hecho por y para nadadores, por{' '}
              <a 
                href="https://germanmallo.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7C700] hover:text-[#e0b800] underline decoration-2 underline-offset-2 transition-colors"
              >
                Germán Mallo
              </a>
            </p>
          </div>

          {/* CTAs - mejorados para móvil */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center px-4">
            <DownloadButton />            <a 
              href="/demo.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                         border-2 border-white/30 text-white font-semibold text-sm sm:text-base
                         hover:border-white/50 hover:bg-white/10 transition-all backdrop-blur-sm
                         active:scale-95"
            >
              📄 Descargar demo PDF
            </a>
          </div>
        </div>{/* Ilustración Hero con animación */}
        <div className="hidden lg:block mt-16">
          <HeroIllustration className="relative max-w-4xl mx-auto" />
        </div>
      </div>
    </section>
  );
}
