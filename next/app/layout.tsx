import type { Metadata } from "next";
import BackToHomeButton from "./BackToHomeButton";

export const metadata: Metadata = {
  title: "maxhxie",
  description: "maxhxie's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackToHomeButton />
        {children}
      </body>
    </html>
  );
}
