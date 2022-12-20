import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useAuthTokenVerify } from "store/auth";
import { Layout } from "components/layout";
import { SectionTitle } from "components/shared";
import { Roles } from "services/authApi";
import LoginPage from "views/login";
import ProfilePage from "views/profile";
import TestsPage from "views/tests";
import TestPage from "views/test";
import RegistrationPage from "views/registration";
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
            element: (
              <ProtectedRoute
                allowedRoles={[Roles.admin, Roles.teacher, Roles.student]}
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
                path: "tests/progress/:testProgressId",
                element: <TestPage />,
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
            element: <ProtectedRoute allowedRoles={[Roles.admin]} />,
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
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "registration",
    element: <RegistrationPage />,
  },
]);

const AppRouter = () => {
  useAuthTokenVerify();

  return <RouterProvider router={routes} />;
};

export default AppRouter;
