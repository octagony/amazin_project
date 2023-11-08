import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}
