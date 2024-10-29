import { createBrowserRouter } from "react-router-dom";

import { Routes } from "../lib/routes";
import * as AppPages from "./AppPages";

export const AppRouter = createBrowserRouter([
  {
    element: <AppPages.DefaultLayout />,
    errorElement: <AppPages.ErrorPage />,
    children: [
      {
        path: Routes.HOME,
        element: <AppPages.HomePage />,
      },
      {
        path: Routes.CONTACTS,
        element: <AppPages.ContactPage />,
      },
    ],
  },
]);
