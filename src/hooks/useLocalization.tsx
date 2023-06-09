import { useEffect, useState } from "react";
import i18n from "../i18";

const LANGUAGE_SELECTOR_ID = "language-selector";
const LANGUAGES = [
  { key: "rs", name: "Srpski", flagKey: "rs" },
  { key: "en", name: "English", flagKey: "gb-eng" },
];

const useLocalization = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("button");

      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }

      setIsOpen(false);
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  const handleLanguageChange = async (language: { key: string; name: string, flagKey: string }) => {
    await i18n.changeLanguage(language.key);
    setIsOpen(false);
  };

  const selectedLanguage = LANGUAGES.find(
    (language) => language.key === i18n.language 
  );

  return {isOpen, setIsOpen,  selectedLanguage, handleLanguageChange, LANGUAGES, LANGUAGE_SELECTOR_ID};
};

export default useLocalization;
