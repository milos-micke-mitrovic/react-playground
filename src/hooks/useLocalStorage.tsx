const useLocalStorage = () => {
  const setInStorage = (localSotrageKey: string, localSotrageValue: string) => {
    localStorage.setItem(localSotrageKey, localSotrageValue);
  };

  const existsInStorage = (localSotrageKey: string) => {
    return localStorage.hasOwnProperty(localSotrageKey);
  };

  const findInStorage = (localSotrageKey: string) => {
    return JSON.parse(localStorage.getItem(localSotrageKey) || "");
  };

  const removeFormStorage = (localSotrageKey: string) => {
    return localStorage.removeItem(localSotrageKey);
  };

  return {
    setInStorage,
    findInStorage,
    removeFormStorage,
    existsInStorage,
  };
};

export default useLocalStorage;
