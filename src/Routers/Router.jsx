import { createBrowserRouter } from "react-router";
import Main from "../Layouts/Main";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
