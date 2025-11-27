"use client";

export default function Demo() {
  const videoId = "YvfpLE1QvVw";

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
          <div className="relative">
            {/* Tarjeta del video */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Reproductor de YouTube embebido */}
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Yellow o'clock - Demo completa"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
