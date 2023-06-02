import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconDefinition;
  title: string;
  info: string | JSX.Element;
  description?: string | JSX.Element;
};

const Tile = ({ icon, title, info, description }: Props): JSX.Element => {
  return (
    <>
      <div className="flex flex-col border gap-3 border-green basis-1/2 p-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className="text-green mr-2" />
          <p>{title}</p>
        </div>

        <h3 className="text-xl">{info}</h3>

        <p className="text-xs font-bold">{description}</p>
      </div>
    </>
  );
};

export default Tile;
