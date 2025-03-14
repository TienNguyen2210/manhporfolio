"use client";

import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "services",
    href: "/services",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "contact",
    href: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="h-6 w-6 text-accent" />
      </SheetTrigger>
      <SheetHeader>
        <SheetTitle className="hidden">Menu</SheetTitle>
      </SheetHeader>
      <SheetContent>
        <div href="/" className="mt-32 mb-32">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-center">
              <span className="text-accent">.</span>Manh
              <span className="text-accent">_</span>NG
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={`${
                  link.href === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-lg capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
