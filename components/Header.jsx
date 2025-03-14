import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="py-8 xl:py-12 text-white bg-s">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">.</span>Manh
            <span className="text-accent">_</span>NG
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex gap-8">
          <Nav />
          <Link href="/contact">
            <Button> Hire me! </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
