export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold mb-4">1. Información que recopilamos</h2>
            <p className="mb-4">
              Yellow o'clock es una aplicación de escritorio que funciona completamente offline. 
              No recopilamos, almacenamos ni transmitimos datos personales de los usuarios.
            </p>

            <h2 className="text-xl font-semibold mb-4">2. Uso de la aplicación</h2>
            <p className="mb-4">
              Todos los archivos PDF y datos procesados permanecen únicamente en tu ordenador. 
              La aplicación no requiere conexión a internet para funcionar.
            </p>

            <h2 className="text-xl font-semibold mb-4">3. Información de compra</h2>
            <p className="mb-4">
              Los datos de pago son procesados de forma segura por Stripe. No almacenamos 
              información de tarjetas de crédito ni datos financieros.
            </p>

            <h2 className="text-xl font-semibold mb-4">4. Contacto</h2>
            <p className="mb-4">
              Para cualquier consulta sobre privacidad, contacta con nosotros en: 
              <a href="mailto:germanmallo04@gmail.com" className="text-blue-600 hover:underline">
                germanmallo04@gmail.com
              </a>
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
