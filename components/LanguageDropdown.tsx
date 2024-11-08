"use client";

import DropDownArrowDown from "@/public/assets/vectors/dropDownArrowDown.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

const langMap = { ka: "GEO", en: "EN" };

const LanguageDropdown = () => {
  const params = useParams<{ locale: "ka" | "en" }>();
  const pathname = usePathname(); // Get the current path
  const selectedLanguage = langMap[params.locale];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log(pathname);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getPathWithLocale = (locale: "ka" | "en") => {
    return `/${locale}${pathname.slice(3)}`; // Replace the locale prefix
    // return `/${locale}${pathname.replace(/^\/(en|ka)/, "")}`;
  };

  return (
    <div className='relative flex'>
      <button
        onClick={toggleDropdown}
        className='flex items-center gap-2 rounded px-4 py-2'>
        {selectedLanguage}
        <Image
          src={DropDownArrowDown}
          alt='dropDown'
          className={`transform transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isDropdownOpen && (
        <ul className='absolute top-12 w-[60px] rounded bg-white'>
          {selectedLanguage !== "EN" && (
            <Link href={getPathWithLocale("en")}>
              <li className='cursor-pointer rounded px-4 py-2 hover:bg-gray-200/80 text-black  w-[50px]'>
                EN
              </li>
            </Link>
          )}
          {selectedLanguage !== "GEO" && (
            <Link href={getPathWithLocale("ka")}>
              <li className='cursor-pointer rounded px-4 py-2 hover:bg-gray-200/80 text-black w-[50px]'>
                GEO
              </li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
