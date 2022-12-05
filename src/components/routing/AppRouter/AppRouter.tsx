import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "components/layout";
import { SectionTitle } from "components/shared";

const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "login",
    element: <SectionTitle>Login</SectionTitle>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
