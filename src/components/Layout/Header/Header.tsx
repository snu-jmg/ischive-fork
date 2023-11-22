/* 
Header.tsx:
    Describes a header that will be fixed on the top of every page
    One of the children of Layout
*/

import Image from "next/image";
import Link from "next/link";
import ISCLogo from "../../../assets/img/logo_archiving.gif";

export default function Header() {
  return (
    /* header fixed at the top while scrolling */
    <header className="fixed z-50 h-[60px] w-full border-b-2 border-solid border-black bg-white">
      <div className="flex items-center justify-between">
        {/* Logo -> nav to home */}
        <Link href="/">
          <Image src={ISCLogo} alt="isc-logo" width={130} />
        </Link>
        {/* Texts */}
        <div className="flex flex-row">
          {/* HOME */}
          <div className="text-xl sm:text-2xl">
            <Link href="/">HOME</Link>
          </div>
          {/* ABOUT */}
          <div className="pl-2 text-xl sm:pl-4 sm:text-2xl">
            <Link href="/about">ABOUT</Link>
          </div>
          {/* ARCHIVING */}
          <div className="px-2 text-xl sm:px-4 sm:text-2xl">
            <Link href="/archiving">ARCHIVING</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
