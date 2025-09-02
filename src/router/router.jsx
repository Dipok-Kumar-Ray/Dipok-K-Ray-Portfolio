import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/AuthLayouts/RootLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Education from "../pages/home/education/Education";
import ContactInfo from "../pages/contact/ContactInfo";
import ProjectsSection from "../pages/projects/ProjectsSection";
import ProjectDetails from "../pages/projects/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home />,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },
      {
        path: "about",
        element: <About />,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },
      {
        path: "skills",
        element: <Skills />,
        HydrateFallback: (
          <span className="loading loading-bars loading-xl"></span>
        ),
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "contact-info",
        element: <ContactInfo />,
      },
      {
        path: "projects",
        element: <ProjectsSection />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
