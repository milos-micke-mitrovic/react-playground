import React, { useEffect, useRef, useState } from "react";

import { ELEMENTS } from "../constants/breakingBad";
import { capitalizeFirstLetter } from "../utils/others";

const useBreakingBad = () => {
  const firstInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const secondInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const logoRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [breakifiedFirstWord, setBreakifiedFirstWord] =
    useState<React.JSX.Element>();
  const [breakifiedSecondWord, setBreakifiedSecondWord] =
    useState<React.JSX.Element>();
  const [position, setPosition] = useState("left");

  const breakify = (word: string) => {
    const firstTwoLetters = word.substring(0, 2);
    const notFirstTwoLetters = word.substring(2, word.length);
    const firstLetter = word.substring(0, 1);
    const notFirstLetter = word.substring(1, word.length);

    if (ELEMENTS.find((element) => element === firstTwoLetters))
      return (
        <>
          <span className="bg-green">{firstTwoLetters}</span>
          {notFirstTwoLetters}
        </>
      );

    if (ELEMENTS.find((element) => element === firstLetter))
      return (
        <>
          <span className="bg-green">{firstLetter}</span>
          {notFirstLetter}
        </>
      );

    return <>{word}</>;
  };

  const doBreakify = () => {
    setBreakifiedFirstWord(
      breakify(capitalizeFirstLetter(firstInputRef.current?.value || ""))
    );

    setBreakifiedSecondWord(
      breakify(capitalizeFirstLetter(secondInputRef.current?.value || ""))
    );
  };

  const traslatePostionToFlexClass = (position: string) => {
    switch (position) {
      case "left":
        return "start";
      case "right":
        return "end";
      case "middle":
        return "center";
      default:
        return "start";
    }
  };

  useEffect(() => {
    doBreakify();
    firstInputRef.current.focus();
    firstInputRef.current.select();

    const onKeyDownListener = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        doBreakify();
      }
    };

    window.addEventListener("keydown", onKeyDownListener);

    return () => {
      window.removeEventListener("keydown", onKeyDownListener);
    };
  }, []);

  return {
    position,
    setPosition,
    breakifiedFirstWord,
    breakifiedSecondWord,
    firstInputRef,
    secondInputRef,
    logoRef,
    traslatePostionToFlexClass,
    doBreakify,
  };
};

export default useBreakingBad;
