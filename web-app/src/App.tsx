import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./containers/Home";
import Account from "./containers/Account";
import Login from "./containers/Account/Login";
import Register from "./containers/Account/Register";
import Repository from "./containers/Repository";
import Experiments from "./containers/Repository/Experiments";
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
    path: "/repository/:userName",
    element: <Repository />,
    children: [
      {
        path: "/repository/:userName/experiments",
        element: <Experiments />,
      },
      {
        path: "/repository/:userName/user",
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
