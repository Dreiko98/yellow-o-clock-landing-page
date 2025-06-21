export default function Footer() {
  return (
    <footer className="bg-[#174E8C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-2">🕒</div>
              <span className="text-xl font-bold">Yellow o'clock</span>
            </div>
            <p className="text-blue-100 text-sm">
              Da color a tus resultados en PDF. La herramienta esencial 
              para entrenadores y gestores deportivos.
            </p>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/terms" className="text-blue-100 hover:text-white transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="/refund" className="text-blue-100 hover:text-white transition-colors">
                  Política de Devoluciones
                </a>
              </li>
            </ul>
          </div>          {/* Contacto y desarrollador */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:germanmallo04@gmail.com" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  📧 germanmallo04@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://germanmallo.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  🌐 germanmallo.com
                </a>
              </li>
              <li className="pt-2 text-blue-100 text-xs">
                💙 Desarrollado por Germán Mallo Faure<br/>
                🏊‍♂️ CN Mediterráneo Valencia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2025 Yellow o'clock. Todos los derechos reservados.
            </p>
            <p className="text-blue-100 text-sm mt-2 sm:mt-0">
              Hecho con ❤️ para la comunidad deportiva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
