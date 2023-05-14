import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = ({ name, pages }) => {
  return (
    <header className=" flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex  flex-col justify-around h-full px-6 bg-header z-10">
        <nav className="text-right flex flex-row gap-6 self-end">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="mt-5 px-6 py-3 min-w-100 font-bold  hover:text-black font-display uppercase tracking-wide text-white bg-blue text-base sm:text-sm lg:text-lg"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-white uppercase">{name}</h1>
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
