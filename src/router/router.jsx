import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/AuthLayouts/RootLayout";
import Home from "../pages/home/Home";



 export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children : [
        {
            index: true,
        element: <Home/>,
        hydrateFallbackElement: <span className="loading loading-bars loading-xl"></span>
        }
    ]
  },
]);