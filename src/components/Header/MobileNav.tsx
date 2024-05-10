"use client";
import React, { memo, useEffect, useState } from "react";
import { Nav_Links } from "./Nav_Links";
import Link from "next/link";

import { TiArrowSortedDown } from "react-icons/ti";

function MobileNav({ isOpen, setIsOpen }: any) {
  return (
    <div
      className="fixed w-[300px] z-20 h-screen top-0 right-0 bg-gradient p-10 text-black"
      style={{
        right: isOpen ? "0" : "-100%",
        transition: "all 0.5s linear",
      }}
    >
      <p
        className="text-end text-xl font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        X
      </p>
      <ul className="flex flex-col gap-2">
        {Nav_Links.map((link: any, index: number) => (
          <NavLinksMobile {...link} key={index} />
        ))}
      </ul>
    </div>
  );
}

const NavLinksMobile = ({ linkName, src, subLinks }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center gap-2">
        <Link href={`${src}`} className="text-lg">
          {linkName}{" "}
        </Link>
        {subLinks && (
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <TiArrowSortedDown />
          </span>
        )}
      </div>
      {subLinks && (
        <ul
          className="flex flex-col gap-2"
          style={{
            maxHeight: open ? "1200px" : "0px",
            overflow: "hidden",
            transition: "all 0.8s linear",
          }}
        >
          {subLinks.map((subLink: any, subIndex: number) => (
            <NestedSubMenu key={subIndex} {...subLink} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NestedSubMenu = ({ linkName, src, subLinks }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center gap-2">
        <Link href={`${src}`} className="text-lg">
          {linkName}{" "}
        </Link>
        {subLinks && (
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <TiArrowSortedDown />
          </span>
        )}
      </div>
      {subLinks && (
        <ul
          className="flex flex-col gap-2"
          style={{
            maxHeight: open ? "1200px" : " 0px",
            overflow: "hidden",
          }}
        >
          {subLinks.map((nestedSubLink: any, nestedSubIndex: number) => (
            <li key={nestedSubIndex} className="px-5">
              <Link href={nestedSubLink.src} className="text-lg">
                {nestedSubLink.linkName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default memo(MobileNav);
