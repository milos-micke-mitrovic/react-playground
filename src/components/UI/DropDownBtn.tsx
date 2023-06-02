import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  options: string[];
  onOptionChange: (selectedOption: string) => void;
};

const DropDownBtn = ({ onOptionChange, options }: Props): JSX.Element => {
  const { t } = useTranslation();
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(e.target.value)
  };

  return (
    <div className="w-full lg:max-w-sm">
      <select
        className="w-full p-2 border rounded-md shadow-sm outline-none app bg-transparent"
        onChange={onChange}
      >
        {options.map((option, i) => (
          <option key={i + option} value={option}>{t(option)}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownBtn;
