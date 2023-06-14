import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  name: string;
  selectedItem: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioBox = ({ name, selectedItem, onChange }: Props): JSX.Element => {
  const { t } = useTranslation();
  
  const isChecked = name === selectedItem;

  return (
    <>
      <input
        className="hidden"
        type="radio"
        id={name}
        value={name}
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className={`${
          isChecked ? "bg-green" : ""
        } h-10 p-2 font-semibold text-sm cursor-pointer transition-all justify-center items-center w-full border border-green flex `}
      >
        {t(name)}
      </label>
    </>
  );
};

export default RadioBox;
