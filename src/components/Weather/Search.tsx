import React from "react";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { GeoOptionType } from "../../types/others";

type Props = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
  term: string;
  options: [];
  onSetCity: (option: GeoOptionType) => void;
};

const Search = ({
  onInputChange,
  onSearchClick,
  term,
  options,
  onSetCity,
}: Props): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <div className="relative">
        <input
          type="text"
          onChange={onInputChange}
          value={term}
          className="px-2 py-1 rounded-1-md border-2 border-green"
          placeholder={t("place") || "Place"}
        />

        <div className="absolute flex flex-col gap-1 grow top-10">
          {options.map((option: GeoOptionType, i: number) => (
            <button
              key={option.name + "-" + i}
              onClick={() => onSetCity(option)}
            >
              {option.name}, {option.country}
            </button>
          ))}
        </div>

        <button onClick={onSearchClick}>
          <FontAwesomeIcon className="mr-1" icon={faLocationDot} />
          {t("search")}
        </button>
      </div>
    </>
  );
};

export default Search;
