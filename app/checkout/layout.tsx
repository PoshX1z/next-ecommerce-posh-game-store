import Footer from "@/components/shared/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
