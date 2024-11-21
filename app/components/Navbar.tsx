// import React from "react";
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        " top-2 inset-x-0 max-w-2xl h-18 w-full mx-auto text-xl mb-20",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home">
            {/* <h1 className="text-white text-sm">test</h1> */}
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Language">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/language">Hindi</HoveredLink>
            <HoveredLink href="/language">English</HoveredLink>
            <HoveredLink href="/language">Arabic</HoveredLink>
            <HoveredLink href="/language">Malyalam</HoveredLink>
            <HoveredLink href="/language">Urdu</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact Us"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Login"></MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
