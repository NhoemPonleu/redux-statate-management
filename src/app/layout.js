import "./globals.css";
import { Inter } from "next/font/google";
import ProviderRedux from "@/redux/features/ProviderRedux";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderRedux>
          <Navbar />
          {children}
        </ProviderRedux>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
