import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "components/layout";
import { SectionTitle } from "components/shared";
import { Roles } from "services/authApi";
import LoginPage from "views/login";
import ProfilePage from "views/profile";
import TestsPage from "views/tests";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: (
          <ProtectedRoute
            allowedRoles={[Roles.ADMIN, Roles.TEACHER, Roles.STUDENT]}
          />
        ),
        children: [
          {
            index: true,
            element: <SectionTitle>Главная</SectionTitle>,
          },
          {
            path: "tests",
            element: <TestsPage />,
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
            element: <ProfilePage />,
          },
        ],
      },
      {
        element: <ProtectedRoute allowedRoles={[Roles.ADMIN]} />,
        children: [
          {
            path: "admin",
            element: <SectionTitle>Страница администратора</SectionTitle>,
          },
        ],
      },
      {
        path: "not-allowed",
        element: <SectionTitle>Недостаточно прав</SectionTitle>,
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
