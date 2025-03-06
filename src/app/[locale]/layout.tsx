import { routing } from "@/libraries/next-intl/routing";
import { LocaleProvider } from "@/providers/locale-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { getTranslations } from "next-intl/server";
import { Fira_Code } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export type GenerateMetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: GenerateMetadataProps) {
  const params = await props.params;
  const translate = await getTranslations({
    namespace: "Metadata",
    locale: params.locale,
  });

  return {
    description: translate("Description"),
    title: translate("Title"),
  };
}

export type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const params = await props.params;
  const locale = params.locale;

  if (!routing.locales.some((item) => item === locale)) {
    return notFound();
  }

  return (
    <html lang={locale} className={firaCode.variable} suppressHydrationWarning>
      <body className="scroll-smooth antialiased">
        <LocaleProvider>
          <ThemeProvider>{props.children}</ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
