// i18n/request.ts
import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async () => {
  // Por ahora dejamos el idioma fijo en español.
  // Después lo haremos realmente bilingüe.
  const locale = "es";

  return {
    locale,
    // OJO con la ruta: estamos en /i18n → subimos a la raíz y entramos a /messages
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
