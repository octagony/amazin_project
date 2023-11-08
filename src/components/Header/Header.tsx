import { SlLocationPin } from "react-icons/sl";
import {
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiShoppingCart,
} from "react-icons/hi";
import { BiCaretDown, BiHeart } from "react-icons/bi";
export default function Header() {
  return (
    <div className="w-full h-20 bg-primaryBlue text-textLight sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <div className="px-2 border border-transparent hover:border-white rounded-xl duration-300 flex items-center justify-center h-[70%]">
          <h1 className="text-3xl cursor-pointer">Amazin</h1>
        </div>
        <div className="px-2 border border-transparent hover:border-white rounded-xl duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
        <div className="flex-1 h-10 hidden md:inline-flex items-center  justify-between relative">
          <input
            className="w-full h-full rounded-xl px-2 placeholder:text-sm  text-black border-[3px] outline-none focus-visible:border-primaryYellow"
            type="search"
            placeholder="Search in store..."
          />
          <span className="w-12 h-full bg-primaryYellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 ">
          <p>Sign in</p>
          <p className="text-white font-bold flex items-center">
            Account
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        <div className="text-xl text-gray-100 flex flex-col justify-center px-2">
          <p className="text-white font-bold">
            <BiHeart />
          </p>
        </div>
        <div className="text-xl text-gray-100 flex flex-col justify-center px-2">
          <HiShoppingCart />
          <span className="absolute text-primaryYellow font-bold text-xs top-4 right-7">
            0
          </span>
        </div>
      </div>
    </div>
  );
}
