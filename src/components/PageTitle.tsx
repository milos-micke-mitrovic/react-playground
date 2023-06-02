import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";

type PageTitlePropsType = {
  title: string;
  icon: IconDefinition;
};

const PageTitle = ({ title, icon }: PageTitlePropsType): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <h1 className="text-3xl mb-10">
        {t(title)}{" "}
        <FontAwesomeIcon className="text-green" icon={icon}></FontAwesomeIcon>
      </h1>
    </div>
  );
};

export default PageTitle;
