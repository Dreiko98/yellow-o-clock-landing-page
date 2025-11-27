import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold"
          >
            ← Volver a Yellow o'clock
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero de la página de soporte */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">☕</div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Apoya Yellow o'clock
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Yellow o'clock es y siempre será <strong>100% gratuito</strong>. 
            Si te ha sido útil, puedes apoyar el desarrollo con una donación.
          </p>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Izquierda - Por qué donar */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                ¿Por qué donar?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Apoyas el desarrollo continuo de nuevas funcionalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Ayudas a mantener el proyecto gratuito para todos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Contribuyes a crear herramientas para la comunidad deportiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Me animas a seguir mejorando y actualizando la app</span>
                </li>
              </ul>
            </div>

            {/* Derecha - En qué se usa */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                ¿En qué se usa tu donación?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-xl">☕</span>
                  <span>Tiempo de desarrollo y programación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-xl">💻</span>
                  <span>Mantenimiento de la web y servicios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-xl">🔧</span>
                  <span>Implementación de nuevas funcionalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 text-xl">📚</span>
                  <span>Documentación y tutoriales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Botón principal de donación */}
          <div className="text-center border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-6">
              Cualquier cantidad es bienvenida y muy apreciada 💙
            </p>
            <a
              href="https://paypal.me/germanmallo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold
                       bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600
                       text-gray-900 rounded-xl shadow-lg hover:shadow-xl
                       transform transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="text-2xl">☕</span>
              <span>Hacer una donación</span>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Serás redirigido a PayPal de forma segura
            </p>
          </div>
        </div>

        {/* Alternativas de apoyo */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
            Otras formas de apoyar el proyecto
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="font-semibold text-blue-900 mb-2">Comparte</h4>
              <p className="text-sm text-gray-600">
                Recomienda Yellow o'clock a otros nadadores y entrenadores
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-semibold text-blue-900 mb-2">Feedback</h4>
              <p className="text-sm text-gray-600">
                Envía sugerencias y reporta errores para mejorar la app
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-blue-900 mb-2">Difunde</h4>
              <p className="text-sm text-gray-600">
                Comparte en redes sociales y grupos de natación
              </p>
            </div>
          </div>
        </div>

        {/* Nota de agradecimiento */}
        <div className="text-center">
          <p className="text-gray-600 italic">
            "Yellow o'clock nació de mi pasión por la natación y la programación. <br/>
            Tu apoyo significa mucho para mí y me motiva a seguir creando herramientas útiles."
          </p>
          <p className="text-blue-900 font-semibold mt-4">
            — Germán Mallo, Creador de Yellow o'clock
          </p>
        </div>
      </div>
    </div>
  );
}
