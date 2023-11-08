import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MainSlider from "@/components/MainSlider/MainSlider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <MainSlider />
    </div>
  );
}
