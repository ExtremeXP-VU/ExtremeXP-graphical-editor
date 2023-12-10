import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/app.scss";
import Login from "./containers/Login";
import Load from "./containers/Load";
import Editor from "./containers/Editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Load />,
  },
  {
    path: "/login/",
    element: <Login />,
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
