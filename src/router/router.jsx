import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/AuthLayouts/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children : [
        {
            index: true,
        element: <Home/>,
        hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>
        },
      {
        path: 'about',
        element: <About/>,
        hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>

      }
    ]
  },
]);