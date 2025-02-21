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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const translate = await getTranslations({ namespace: "Metadata", locale });

  return {
    description: translate("Description"),
    title: translate("Title"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;

  if (!routing.locales.some((item) => item === locale)) {
    return notFound();
  }

  return (
    <html lang={locale} className={firaCode.variable} suppressHydrationWarning>
      <body className="scroll-smooth antialiased">
        <LocaleProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
