import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const addOrRemoveFromClassList = (isDM: boolean) => {
  if (isDM) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const useDarkMode = (defaultValue: boolean) => {
  const { setInStorage, findInStorage, existsInStorage } = useLocalStorage();

  const [isDarkMode, setDarkMode] = useState<boolean>(
    !existsInStorage("dark-mode")
      ? defaultValue
      : findInStorage("dark-mode")
      ? true
      : false
  );

  addOrRemoveFromClassList(isDarkMode);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      setInStorage("dark-mode", (!prev).toString());
      addOrRemoveFromClassList(!prev);

      return !prev;
    });
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
