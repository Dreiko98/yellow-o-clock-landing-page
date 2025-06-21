export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Detección inteligente",
      description: "Búsqueda insensible a tildes y mayúsculas. Encuentra a tus nadadores sin importar cómo estén escritos."
    },
    {
      icon: "🏊‍♂️",
      title: "Perfiles de clubes",
      description: "Crea perfiles ilimitados para diferentes clubes, equipos o competiciones."
    },
    {
      icon: "🔒",
      title: "100% local",
      description: "Sin conexión a internet, todos los PDFs y datos permanecen en tu ordenador de forma segura."
    },
    {
      icon: "⚡",
      title: "Subrayado instantáneo",
      description: "Procesa y subraya las series en segundos, ahorrándote horas de trabajo manual."
    },
    {
      icon: "📄",
      title: "Compatible con series",
      description: "Funciona con PDFs de resultados estándar de competiciones de natación."
    },
    {
      icon: "🔄",
      title: "Actualizaciones incluidas",
      description: "Recibe mejoras y nuevas funcionalidades con tu licencia de por vida."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            ¿Por qué elegir Yellow o'clock?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Características diseñadas específicamente para profesionales del deporte acuático
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
