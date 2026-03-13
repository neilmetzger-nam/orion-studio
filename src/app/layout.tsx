import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orion Studio — The OS for AI-Powered Founders",
  description: "Your agents are working. Now give them a command center.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
