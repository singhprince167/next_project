import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="absolute left-0 top-10">
          <ul>
            <li><Link href="/"> Home</Link></li>
            <li><Link href="/student"> Student</Link></li>
            <li><Link href="/student/subject"> Subjects</Link></li>
          </ul>

        </div>
        {children}
      </body>
    </html>
  );
}
