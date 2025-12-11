export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">Contacto</h1>
      <p className="mb-6 text-sm text-neutral-700">
        Esta sección será para prensa, colaboraciones y consultas sobre el contenido
        del blog. Más adelante añadiremos un formulario sencillo y enlaces directos
        a las redes de Mily.
      </p>

      <div className="rounded-2xl border bg-white p-6 text-sm text-neutral-700 shadow-sm">
        <p>
          Por ahora, puedes imaginar aquí el formulario de contacto. 
          Lo implementaremos después con validación y, si quieres, 
          envío por correo o integración con un servicio externo.
        </p>
      </div>
    </main>
  );
}
