import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ name, pages }) => {
  return (
    <header className=" flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex  flex-col justify-around h-full sm:px-6 px:1 bg-header z-10">
        <nav className="text-right flex flex-row sm:gap-6 self-end gap-0">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue
                 font-display uppercase  sm:bg-transparent bg-white sm:text-xs"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-white uppercase pl-2 sm:pl-0 sm:text-xs">{name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className="w-full h-48 object-cover object-top absolute"
        src="/images/webheader.JPG"
        alt="header-img"
        aria-label="header-img"
      />
    </header>
  );
};
