import "./globals.css";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
export const metadata = {
  title: "adwaita-portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="">
          <ThreeBackground />
          <Header />
        {children}
      </body>
    </html>
  );
}
