import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/Home";
import Account from "./containers/Account";
import Login from "./containers/Account/Login";
import Register from "./containers/Account/Register";
import Dashboard from "./containers/Dashboard";
import Experiments from "./containers/Dashboard/Experiments";
import Project from "./components/dashboard/Project";
import Tasks from "./containers/Dashboard/Tasks";
import Category from "./components/dashboard/Category";
import User from "./containers/Dashboard/User";
import Editor from "./containers/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/account/",
    element: <Account />,
    children: [
      {
        path: "/account/login",
        element: <Login />,
      },
      {
        path: "/account/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/projects",
        element: <Experiments />,
        children: [
          {
            path: "/dashboard/projects/:projID/experiments",
            element: <Project />,
          },
        ],
      },
      {
        path: "/dashboard/categories",
        element: <Tasks />,
        children: [
          {
            path: "/dashboard/categories/:categoryID/tasks",
            element: <Category />,
          },
        ],
      },
      {
        path: "/dashboard/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/editor/:projID/:experimentID",
    element: <Editor />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
