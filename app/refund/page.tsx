export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">
            Política de Devoluciones
          </h1>
          
          <div className="prose max-w-none text-gray-700">
            <h2 className="text-xl font-semibold mb-4">Garantía de 30 días</h2>
            <p className="mb-6">
              Estamos seguros de que Yellow o'clock te va a encantar. Si por cualquier motivo 
              no estás completamente satisfecho, te devolvemos el 100% de tu dinero durante 
              los primeros 30 días después de la compra.
            </p>

            <h2 className="text-xl font-semibold mb-4">¿Cómo solicitar un reembolso?</h2>
            <div className="mb-6">
              <p className="mb-2">Es muy sencillo:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Envía un email a <a href="mailto:germanmallo04@gmail.com" className="text-blue-600 hover:underline">germanmallo04@gmail.com</a></li>
                <li>Incluye tu número de pedido o email de compra</li>
                <li>Cuéntanos brevemente el motivo (opcional, nos ayuda a mejorar)</li>
                <li>Procesaremos tu reembolso en 1-2 días laborables</li>
              </ol>
            </div>

            <h2 className="text-xl font-semibold mb-4">Tiempo de procesamiento</h2>
            <p className="mb-4">
              Una vez aprobado el reembolso, el dinero aparecerá en tu cuenta en:
            </p>
            <ul className="list-disc list-inside ml-4 mb-6">
              <li>Tarjeta de crédito: 3-5 días laborables</li>
              <li>PayPal: 1-2 días laborables</li>
              <li>Transferencia bancaria: 2-3 días laborables</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">💙 Nuestro compromiso</h3>
              <p className="text-blue-800 text-sm">
                Como desarrollador nadador, entiendo la importancia de las herramientas que 
                realmente funcionen. Si Yellow o'clock no cumple tus expectativas, 
                no hay problema en devolverlo.
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Última actualización: 19 de junio de 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
