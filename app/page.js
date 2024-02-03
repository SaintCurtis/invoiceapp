import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InvoiceCTA from "@/components/InvoiceCTA";
import Steps from "@/components/Steps";
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <Hero />
    <Steps />
    <InvoiceCTA />
    <Steps />
    <Features />
    <Footer />
    </main> 
  );
}
