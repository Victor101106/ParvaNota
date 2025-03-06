export type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout(props: RootLayoutProps) {
  return props.children;
}
