import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type NavbarLinkPropsType = {
  setShowDropdownMenu: (boolean: boolean) => void;
  icon: IconDefinition;
  link: string;
};

const NavBarLink = ({
  setShowDropdownMenu,
  icon,
  link,
}: NavbarLinkPropsType): JSX.Element => {
  return (
    <li className="m-auto">
      <Link to={link} onClick={() => setShowDropdownMenu(false)}>
        <button className="border-4 border-green rounded-full flex justify-center items-center w-8 h-8">
          <FontAwesomeIcon className="text-green" icon={icon} />
        </button>
      </Link>
    </li>
  );
};

export default NavBarLink;
