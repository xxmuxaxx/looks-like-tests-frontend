import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "components/layout";
import { SectionTitle } from "components/shared";
import LoginPage from "views/login/LoginPage/LoginPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            index: true,
            element: <SectionTitle>Главная</SectionTitle>,
          },
          {
            path: "tests",
            element: <SectionTitle>Тесты</SectionTitle>,
          },
          {
            path: "tests/:testId",
            element: <SectionTitle>Тест</SectionTitle>,
          },
          {
            path: "history",
            element: <SectionTitle>История тестов</SectionTitle>,
          },
          {
            path: "profile",
            element: <SectionTitle>Профиль</SectionTitle>,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
