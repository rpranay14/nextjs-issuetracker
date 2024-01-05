"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const navigationButton = [
    {
      label: "Dashboard",
      link: "/",
    },
    {
      label: "Issues",
      link: "/issues",
    },
  ];
  return (
    <nav className="flex items-center space-x-10 h-14 px-6 border-b-2 mb-6">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex items-center space-x-6 ">
        {navigationButton.map((navlist) => (
          <Link 
            className={`${
              navlist.link === pathname ? "text-zinc-900" : "text-zinc-400"
            } hover:text-zinc-800 transition-colors`}
            key={navlist.link}
            href={navlist.link}
          >
            <li>{navlist.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
