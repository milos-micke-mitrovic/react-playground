import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full flex flex-col justify-center items-center ">
      <h1 className="text-9xl font-extrabold  tracking-widest">404</h1>

      <p className="bg-green px-2 rounded rotate-12 absolute text-lg font-medium">
        {t("page-not-found")}
      </p>

      <button className="mt-5">
        <span className="relative inline-block text-sm font-medium group focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3">
            <Link to="/">{t("go-home")}</Link>
          </span>
        </span>
      </button>
    </div>
  );
};

export default NotFound;
