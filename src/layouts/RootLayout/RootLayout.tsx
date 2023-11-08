import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { ReactChildren } from "react";
import { IRootLayout } from "./RootLayout.interface";

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Navbar />
      </main>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
