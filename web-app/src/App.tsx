import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/Home";
import Account from "./containers/Account";
import Login from "./containers/Account/Login";
import Register from "./containers/Account/Register";
import Repository from "./containers/Repository";
import Experiments from "./containers/Repository/Experiments";
import Specifications from "./components/repository/Specifications";
import Dataset from "./components/repository/Dataset";
import User from "./containers/Repository/User";
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
    path: "/repository/",
    element: <Repository />,
    children: [
      {
        path: "/repository/experiments",
        element: <Experiments />,
        children: [
          {
            path: "/repository/experiments/:expID/specifications",
            element: <Specifications />,
          },
          {
            path: "/repository/experiments/:expID/dataset",
            element: <Dataset />,
          },
        ],
      },
      {
        path: "/repository/user",
        element: <User />,
      },
    ],
  },
  {
    path: "/editor/:fileName",
    element: <Editor />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
