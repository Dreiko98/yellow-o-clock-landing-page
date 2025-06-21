import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Pago cancelado
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            No se ha procesado ningún pago. Puedes intentarlo de nuevo 
            cuando quieras o contactarnos si tienes alguna duda.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-sm text-blue-700">
              Si tuviste problemas durante el proceso de pago, 
              no dudes en contactarnos. Estamos aquí para ayudarte.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-lg
                         bg-[#F7C700] text-blue-900 font-semibold shadow-md
                         hover:bg-[#e0b800] transition-colors"
            >
              ← Volver al inicio
            </Link>
              <a 
              href="mailto:germanmallo04@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-lg
                         border-2 border-blue-300 text-blue-700 font-semibold
                         hover:border-blue-400 hover:bg-blue-50 transition-colors"
            >
              📧 Contactar soporte
            </a>
          </div>
        </div>

        <div className="text-sm text-neutral-500">
          <p>Tus datos están seguros. No se ha guardado ninguna información de pago.</p>
        </div>
      </div>
    </div>
  );
}
