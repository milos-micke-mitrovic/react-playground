import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faHome,
  faVial,
  faCloud,
  faBrain,
  faX,
  faExplosion,
} from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import NavBarLink from "./NavBarLink";

const Navbar = (): JSX.Element => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <nav>
      <div className="flex flex-wrap items-center space-between">
        <Link to="/" className="flex items-center">
          <img src="/cat.svg" className="h-8 mr-3 " alt="Cat Logo" />

          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            {t("site-title")}
          </span>
        </Link>

        <span className="ml-auto">
          <button
            onClick={() => setShowDropdownMenu((prev) => !prev)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className={`${
              showDropdownMenu
                ? "absolute left-0 right-0 m-auto bg-light dark:bg-dark z-10"
                : "hidden"
            } w-[90%] md:flex md:static md:w-auto`}
          >
            <ul className="font-medium flex flex- flex-wrap p-4 md:p-0 mt-4 border border-green md:flex-row md:space-x-8 md:mt-0 md:border-0 gap-1">
              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faHome}
                link="/"
              />

              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faPaw}
                link="/paws"
              />

              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faVial}
                link="/breaking-bad"
              />
              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faCloud}
                link="/weather"
              />

              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faBrain}
                link="/memory-game"
              />

              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faX}
                link="/tic-tac-toe"
              />

              <NavBarLink
                setShowDropdownMenu={setShowDropdownMenu}
                icon={faExplosion}
                link="/minesweeper"
              />

              <li className="m-auto">
                <p className="text-green">|</p>
              </li>

              <li className="m-auto">
                <ThemeSelector />
              </li>

              <li className="m-auto">
                <LanguageSelector />
              </li>
            </ul>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
