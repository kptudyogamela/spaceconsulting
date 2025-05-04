import Footer from "./Footer/page";
import "./globals.css";
import { Poppins, Lato, Montserrat, Playfair_Display } from "next/font/google";
import Navbar from "./Navbar/page";
import WhatsAppButton from "./WhatsAppButton/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Space Consulting – Architects & Engineers",
  description: "House construction company in Chamarajanagar, Karnataka",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}

        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
