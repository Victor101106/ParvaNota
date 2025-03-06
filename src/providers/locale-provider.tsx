import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export type LocaleProviderProps = {
  children: React.ReactNode;
};

export async function LocaleProvider(props: LocaleProviderProps) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {props.children}
    </NextIntlClientProvider>
  );
}
