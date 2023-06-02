import React from "react";
import useLocalization from "../../../hooks/useLocalization";

const LanguageSelector = (): JSX.Element => {
  const {
    isOpen,
    setIsOpen,
    selectedLanguage,
    handleLanguageChange,
    LANGUAGES,
    LANGUAGE_SELECTOR_ID,
  } = useLocalization();
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center w-full border-none shadow-sm  bg-transparent text-sm font-medium  "
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        <img
          src={"https://flagcdn.com/20x15/" + (selectedLanguage?.flagKey || 'gb-eng') + ".png"}
          alt=""
          className="mr-1"
        />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-transparent"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="py-1 grid grid-cols-2 gap-2" role="none">
            {LANGUAGES.map((language, index) => {
              return (
                <button
                  key={language.key}
                  onClick={() => handleLanguageChange(language)}
                  className={`${
                    selectedLanguage?.key === language.key
                      ? "bg-green text-dark"
                      : "text-green"
                  } px-4 py-2 text-sm text-start items-center inline-flex ${
                    index % 2 === 0 ? "rounded-r" : "rounded-l"
                  }`}
                  role="menuitem"
                >
                  <img
                    src={"https://flagcdn.com/" + language.flagKey + ".svg"}
                    width="30"
                    alt=""
                    className="mr-1"
                  />

                  <span className="truncate">{language.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
