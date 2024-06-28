// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy loading the pages
const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Hireme = lazy(() => import("./pages/Hireme"));
const Learn = lazy(() => import("./pages/Learn"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const StoryPage = lazy(() => import("./pages/StoryPage"));
const UpdatePage = lazy(() => import("./pages/UpdatePage"));
import { updates, stories } from "./constants.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Portfolio />
      </Suspense>
    ),
  },
  {
    path: "/hireme",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Hireme />
      </Suspense>
    ),
  },
  {
    path: "/learn",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Learn />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/story/:storyId",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <StoryPage stories={stories} />
      </Suspense>
    ),
  },
  {
    path: "/:updateTitle",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UpdatePage updates={updates} />
      </Suspense>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
