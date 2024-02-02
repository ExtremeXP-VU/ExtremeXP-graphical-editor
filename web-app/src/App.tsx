import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/Home";
import Account from "./containers/Account";
import Login from "./containers/Account/Login";
import Register from "./containers/Account/Register";
import Dashboard from "./containers/Dashboard";
import Project from "./containers/Dashboard/Project";
import Experiment from "./components/dashboard/Experiment";
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
        element: <Project />,
        children: [
          {
            path: "/dashboard/projects/:projID/experiments",
            element: <Experiment />,
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
