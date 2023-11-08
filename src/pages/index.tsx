import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MainSlider from "@/components/MainSlider/MainSlider";
import axios from "axios";
import { IProduct } from "@/types/product.interface";
import { IIndexProps } from "@/types/index.interface";
import ProductsList from "@/components/ProductsList/ProductsList";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home({ productData }: IIndexProps) {
  return (
    <div className="mx-auto">
      <MainSlider />
      <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
        <ProductsList products={productData} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const productRes = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products",
    );
    const productData = productRes.data;
    return { props: { productData } };
  } catch (error) {
    console.log(error);
  }
};
