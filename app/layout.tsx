import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400","700"],
});

export const metadata: Metadata = {
  title: "SwipyEat - Streamline Your Restaurant Operations",
  icons: "/logo.svg",
  description: "SwipyEat is a comprehensive restaurant management system designed to optimize operations, enhance customer experience, and boost profitability. Our platform offers real-time order management, a kitchen display system, and powerful management tools to help restaurant owners and staff run their businesses more efficiently. With SwipyEat, you can reduce wait times, improve communication between front and back of house, and make data-driven decisions to grow your restaurant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${lato.variable}`}
      >
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
