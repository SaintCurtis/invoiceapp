import { Inter } from "next/font/google";
import "../styles/main.scss";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samaco Invoicer App",
  description: "Fast Invoicer For Samaco & Son's Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}</body>
    </html>
  );
}
