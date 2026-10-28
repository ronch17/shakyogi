import Navigation from "./Navigation";
import Image from "next/image";
import CtaButton from "../ui/CtaButton";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="fixed bg-[#FEF8F5] shadow-2xs flex justify-between items-center px-6 py-4 top-0 left-0 w-full z-50 ">
      <a href="#home" aria-label="חזרה לראש העמוד">
        <Image src="/logo.png" alt="logo" width={100} height={100} className="w-20 h-20" />
      </a>
      <Navigation />
      <div className="hidden lg:block">
        <CtaButton />
      </div>
      <MobileMenu />
    </header>
  );
}