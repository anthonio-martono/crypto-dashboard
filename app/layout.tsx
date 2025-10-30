import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Crypto Dashboard",
  description: "Your crypto data dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
