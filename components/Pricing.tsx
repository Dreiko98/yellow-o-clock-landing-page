import BuyButton from './BuyButton';

export default function Pricing() {
  const benefits = [
    "Licencia de por vida",
    "Actualizaciones gratuitas",
    "Soporte técnico incluido",
    "Uso en múltiples ordenadores",
    "Perfiles ilimitados",
    "Sin suscripciones mensuales"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Precio simple y transparente
          </h2>
          <p className="text-lg text-neutral-600">
            Una sola compra, beneficios de por vida
          </p>
        </div>        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Licencia individual
              </h3>
              <div className="text-5xl font-bold text-blue-900 mb-2">
                32€
              </div>
              <p className="text-neutral-600">
                Pago único • Sin suscripciones
              </p>
            </div>            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="text-green-500 mr-3 text-xl">✓</div>
                  <span className="text-neutral-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <BuyButton />
            </div>

            <div className="text-center mt-6 text-sm text-neutral-500">
              <p>🔒 Pago seguro procesado por Stripe</p>
              <p>💼 Factura disponible para empresas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
