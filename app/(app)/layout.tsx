import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <div className="bg-secondary p-3 flex justify-center items-center ">
            Get 14 days free trial, no credit card required
        </div>
        <Header />
        {children}
        <Footer />
    </main>
  );
}