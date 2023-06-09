import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import i18n from "./i18"; /* Don't delete this i18n line */
import router from "./router";
import "./index.css";
import Spinner from "./components/Spinner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={<Spinner additionalClasses="bg-dark left-0 absolute" />}
    >
      <QueryClientProvider client={new QueryClient()}>
        <RouterProvider router={router} />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);
