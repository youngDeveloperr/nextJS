import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 mb-5 border-b-2 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>

      <ul className="flex space-x-6 ">
        {links.map((l) => (
          <Link
            key={l.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            href={l.href}
          >{l.label}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
