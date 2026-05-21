import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import BannerWrapper from "@/components/banner-wrapper";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </LanguageProvider>
  );
}
