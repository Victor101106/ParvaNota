import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.some((item) => item === locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../locales/${locale}/common.json`)).default,
  };
});
