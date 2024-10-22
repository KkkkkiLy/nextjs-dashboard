import "@/app/ui/global.css";
import { inter } from "@/app/ui/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acme Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
