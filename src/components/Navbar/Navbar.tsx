import { LuMenu } from "react-icons/lu";
import { navbarTitles } from "@/utils/navbar.titles";
export default function Navbar() {
  return (
    <div className="w-full h-10 bg-primaryDarker text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 px-2 cursor-pointer">
        <LuMenu className="rotate-90 hover:rotate-0 duration-300" /> All
      </p>
      {navbarTitles.map((title) => (
        <p className="hidden md:inline-flex items-center h-8 px-2 hover:text-primaryYellow cursor-pointer duration-300">
          {title}
        </p>
      ))}
      <p className="hidden md:inline-flex items-center h-8 px-2 hover:text-red-600 cursor-pointer duration-300">
        Sign Out
      </p>
    </div>
  );
}
