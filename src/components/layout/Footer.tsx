import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <footer className="self-end">
      <div className="w-full md:flex md:items-center md:justify-between gap-4">
        <span className="text-sm sm:text-centex">
          © 2023{" "}
          <a href="http://m.me/milos.m.mitrovic" target="_blank">
            {t("site-title")}™
          </a>{" "}
          {t("all-rights-reserved")}
        </span>

        <ul className="flex flex-wrap items-center text-sm font-medium">
          <li>
            <Link to="/pagenotfound" className="mr-4">
              {t("about")}
            </Link>
          </li>

          <li>
            <Link to="/pagenotfound" className="mr-4">
              {t("privacy-policy")}
            </Link>
          </li>

          <li>
            <Link to="/pagenotfound" className="mr-4">
              {t("licensing")}
            </Link>
          </li>

          <li>
            <Link to="/pagenotfound" className="hover:underline">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
