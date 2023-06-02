import React from "react";
import { useTranslation } from "react-i18next";

import { faVial } from "@fortawesome/free-solid-svg-icons";
import { POSITION_OPTIONS } from "../constants/breakingBad";
import PageTitle from "../components/PageTitle";
import DropDownBtn from "../components/UI/DropDownBtn";
import useBreakingBad from "../hooks/useBreakingBad";
import { downloadDiv } from "../utils/others";

const BreakingBad = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    position,
    setPosition,
    breakifiedFirstWord,
    breakifiedSecondWord,
    firstInputRef,
    secondInputRef,
    logoRef,
    traslatePostionToFlexClass,
    doBreakify,
  } = useBreakingBad();

  return (
    <>
      <PageTitle title="create-your-logo" icon={faVial} />

      <div className="flex flex-col items-center gap-1">
        <div
          id="logo"
          ref={logoRef}
          className={`flex flex-col items-${position}`}
        >
          <h1 className="text-7xl mb-10">{breakifiedFirstWord}</h1>
          <h1 className="text-7xl mb-10">{breakifiedSecondWord}</h1>
        </div>

        <div className="flex flex-col md:flex-row flex-1 items-end p-2 gap-3">
          <div className="flex flex-col flex-1">
            <label>{t("first-part")}</label>
            <input ref={firstInputRef} type="text" defaultValue="breaking" />
          </div>

          <div className="flex flex-col flex-1">
            <label>{t("second-part")}</label>
            <input ref={secondInputRef} type="text" defaultValue="bad" />
          </div>

          <DropDownBtn
            options={POSITION_OPTIONS}
            onOptionChange={(newPosition: string) =>
              setPosition(traslatePostionToFlexClass(newPosition))
            }
          />
        </div>

        <div className="flex gap-3">
          <button
            disabled={!firstInputRef.current && !secondInputRef.current}
            onClick={doBreakify}
            className={
              !firstInputRef.current && !secondInputRef.current
                ? "cursor-not-allowed opacity-50"
                : ""
            }
          >
            {t("breakify")}
          </button>

          <button
            onClick={() =>
              downloadDiv(
                logoRef.current.innerText.split("\n")[0].toLowerCase(),
                logoRef.current
              )
            }
          >
            {t("download")}
          </button>
        </div>
      </div>
    </>
  );
};

export default BreakingBad;
