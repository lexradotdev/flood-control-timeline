import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-recursive', 
});
export const metadata: Metadata = {
  title: "Flood Control Timeline",
  description: "A Chronology of Investigations, Whistleblowers, and Public Fallout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${recursive.className} flex justify-center min-h-screen`}>
      <body className="w-full py-4 px-2 md:w-5/6 md:p-5">{children}</body>
    </html>
  );
}
