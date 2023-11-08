import Image from "next/image";
import { IProductsList } from "./ProductsList.interface";

export default function ProductsList({ products }: IProductsList) {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div>
          <Image src={product.image} alt={product.title} width={300} height={300} />
        </div>
      ))}
    </div>
  );
}
