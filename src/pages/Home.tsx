import React from "react";
import { useTranslation } from "react-i18next";

import Clock from "../components/Clock";

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex">
        <div className="text-center md:text-start md:basis-1/4">
          <h1 className="text-3xl">{t("site-description")}</h1>

          <p className="mt-2 ">
            {t("enjoy")}{" "}
            <img
              className="h-8 w-8 inline animate-bounce"
              src="images/happy-cat.png"
              alt="Happy cat"
            />
          </p>
        </div>

        <div className="md:basis-3/4 hidden md:block banner" />
      </div>

      <div className="flex items-center justify-center grow mt-2">
        <Clock />
      </div>
    </>
  );
};

export default Home;
