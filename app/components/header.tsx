import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  name: string;
  pages: any[]; // Update this type according to your needs
}

export const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="relative flex flex-col w-full h-48 bg-linear-557AFF">
      <div className="z-10 flex flex-col justify-around h-full sm:px-6 px:1 bg-header">
        <nav className="flex flex-row self-end gap-0 text-right sm:gap-6">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="px-6 py-2 text-black uppercase bg-white min-w-100 hover:bg-blue-light hover:text-blue font-display sm:bg-transparent sm:text-xs"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <h1 className="pl-2 text-white uppercase sm:pl-0 sm:text-xs">{name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className="absolute object-cover object-top w-full h-48"
        src="/images/webheader.JPG"
        alt="header-img"
        aria-label="header-img"
      />
    </header>
  );
};
