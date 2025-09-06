import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"], // choose only what you need
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Ishara® | Official",
  description: " Sustainable. Ethical. Timeless.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-ishara.jpg" sizes="any" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
