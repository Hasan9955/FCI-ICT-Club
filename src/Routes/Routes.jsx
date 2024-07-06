import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Faculties from "../Pages/Faculties/Faculties";
import Gallery from "../Pages/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/faculties',
          element: <Faculties />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
        {
          path: '/aboutUs',
          element: <AboutUs />
        }
      ]
    }
  ]);

export default router;