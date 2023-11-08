import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import blackFriday from "../../images/slider/black_friday.jpg";
import kitchenFavorites from "../../images/slider/kitchen_favorites.jpg";
import shopBooks from "../../images/slider/shop_books.jpg";
import shopGaming from "../../images/slider/shop_gaming.jpg";

export default function MainSlider() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
      >
        <div>
          <Image src={blackFriday} alt="blackFriday" />
        </div>
        <div>
          <Image src={kitchenFavorites} alt="kitchenFavorites" />
        </div>
        <div>
          <Image src={shopBooks} alt="shopBooks" />
        </div>
        <div>
          <Image src={shopGaming} alt="shopGaming" />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
}
