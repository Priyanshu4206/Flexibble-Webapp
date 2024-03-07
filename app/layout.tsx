import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
export const metadata = {
  title: "Portfolio Webapp",
  description: "Generated by Next.js to showcase my remarkable projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
