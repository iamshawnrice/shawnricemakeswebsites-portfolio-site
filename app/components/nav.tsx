"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/portfolio": { name: "portfolio" },
  "/about": { name: "about" },
  "mailto:iamshawnrice@gmail.com": { name: "contact" },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className={clsx(
                  "transition-all hover:text-bermuda-gray flex align-middle relative",
                  pathname === path && "text-brandy-punch"
                )}
              >
                {name}
              </Link>
            );
          })}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
