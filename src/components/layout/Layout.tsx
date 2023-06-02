import React from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const Layout = (): JSX.Element => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.title = t('site-title');
  }, [i18n.language]);

  return (
    <div className="h-screen flex flex-col gap-3">
      <Navbar />

      <main className="pt-4 flex flex-col flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
