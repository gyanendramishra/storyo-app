import Home from "../pages/Home";
import About from "../pages/About";
import Stories from "../pages/Stories";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrimaryLayout from "../layoutes/Primary";
// import SecondaryLayout from "../layoutes/Secondary";

const routes = [
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <PrimaryLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/stories",
        element: <Stories />,
      },
    ],
  },
];

export default routes;
