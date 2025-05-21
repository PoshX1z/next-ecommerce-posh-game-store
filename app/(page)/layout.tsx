import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/header";
import HeaderTop from "@/components/shared/header/HeaderTop";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="hidden lg:block">
        <HeaderTop />
      </div>
      <main className="max-w-7xl mx-auto">
        <Header />
        {children}
      </main>
      <Footer />
    </div>
  );
}
