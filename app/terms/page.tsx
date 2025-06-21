export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">
            Términos de Servicio
          </h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold mb-4">1. Licencia de uso</h2>
            <p className="mb-4">
              Al comprar Yellow o'clock, obtienes una licencia personal e intransferible para 
              usar la aplicación. Puedes instalarla en todos tus dispositivos personales.
            </p>

            <h2 className="text-xl font-semibold mb-4">2. Uso permitido</h2>
            <p className="mb-4">
              Yellow o'clock está diseñado para uso personal y de clubes deportivos. 
              No está permitida la reventa o distribución comercial de la aplicación.
            </p>

            <h2 className="text-xl font-semibold mb-4">3. Actualizaciones</h2>
            <p className="mb-4">
              Tu licencia incluye actualizaciones gratuitas. Te notificaremos cuando 
              estén disponibles nuevas versiones.
            </p>

            <h2 className="text-xl font-semibold mb-4">4. Garantía</h2>
            <p className="mb-4">
              Ofrecemos garantía de funcionamiento. Si tienes problemas técnicos, 
              contacta con soporte técnico para resolverlos.
            </p>

            <h2 className="text-xl font-semibold mb-4">5. Política de devoluciones</h2>
            <p className="mb-4">
              Ofrecemos devolución completa durante los primeros 30 días si no estás 
              satisfecho con la aplicación.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Última actualización: 19 de junio de 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
