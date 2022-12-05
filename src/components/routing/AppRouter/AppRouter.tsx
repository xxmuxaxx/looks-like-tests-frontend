import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "components/layout";
import { SectionTitle } from "components/shared";
import { useAuthentication } from "store/authentication";
import { useMemo } from "react";
import LoginPage from "views/login/LoginPage/LoginPage";

const getRoutes = (user: any) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <Layout /> : <Navigate to="login" replace={true} />,
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
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);

const AppRouter = () => {
  const { user } = useAuthentication();

  const routes = useMemo(() => {
    return getRoutes(user);
  }, [user]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;
