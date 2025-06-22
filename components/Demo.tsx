"use client";

export default function Demo() {
  const videoId = "YvfpLE1QvVw";
  const videoUrl = `https://youtu.be/${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="pt-8 pb-8 bg-gradient-to-br from-blue-50 to-yellow-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4 px-4">
            Descubre Yellow o'clock en acción
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Mira cómo la aplicación resalta automáticamente los nadadores de tu club
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-2">
          <div className="relative group">
            {/* Tarjeta del video */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
              {/* Imagen del video */}
              <div className="relative aspect-video">
                <img 
                  src={thumbnailUrl}
                  alt="Demostración de Yellow o'clock en YouTube"
                  className="w-full h-full object-cover"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Botón de play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => window.open(videoUrl, '_blank')}
                    className="group/play bg-red-600 hover:bg-red-700 text-white p-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Ver video de demostración en YouTube"
                  >
                    <svg 
                      className="w-12 h-12 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>

                {/* Badge de YouTube */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </div>

                {/* Duración */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  3:45
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Yellow o'clock - Demo completa
                </h3>
                <p className="text-gray-600 mb-4">
                  Descubre cómo Yellow o'clock automáticamente identifica y resalta los nadadores de tu club en los resultados de competición PDF.
                </p>

                {/* Features destacadas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Detección automática
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Resaltado visual
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Fácil de usar
                  </div>
                </div>

                {/* Botón principal */}
                <button
                  onClick={() => window.open(videoUrl, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Ver demostración completa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}