import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import Course from "../../pages/Course/Course";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/Error/ErrorPage";
import FAQ from "../../pages/FAQ/FAQ";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoutes from "../Private/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Courses></Courses>,
        loader: () =>
          fetch(`https://learn-hub-server-lac.vercel.app/category/00`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(`https://learn-hub-server-lac.vercel.app/category/00`),
      },
      {
        path: "/category/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(
            `https://learn-hub-server-lac.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "course/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(`https://learn-hub-server-lac.vercel.app/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <CheckOut></CheckOut>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://learn-hub-server-lac.vercel.app/course/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
