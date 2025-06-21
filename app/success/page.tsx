import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            ¡Pago completado!
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Tu compra se ha procesado correctamente. Revisa tu correo electrónico 
            para encontrar el enlace de descarga de Yellow o'clock.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">
              Próximos pasos:
            </h3>
            <ul className="text-sm text-green-700 text-left space-y-1">
              <li>• Revisa tu bandeja de entrada (y spam)</li>
              <li>• Descarga el archivo ejecutable</li>
              <li>• ¡Empieza a resaltar tus PDFs!</li>
            </ul>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg
                       bg-[#F7C700] text-blue-900 font-semibold shadow-md
                       hover:bg-[#e0b800] transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>        <div className="text-sm text-neutral-500">
          <p>¿Problemas con la descarga?</p>
          <a 
            href="mailto:germanmallo04@gmail.com" 
            className="text-blue-600 hover:text-blue-800"
          >
            Contáctanos aquí
          </a>
        </div>
      </div>
    </div>
  );
}
