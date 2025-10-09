import type { GetStaticPaths } from "astro";

export const locales = {
  en: "EN",
  es: "ES",
};

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = "en";

export const staticPaths = (() => {
  return Object.keys(locales).map((locale) => {
    return { params: { lang: locale } };
  });
}) satisfies GetStaticPaths;
