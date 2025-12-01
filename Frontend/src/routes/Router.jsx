import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { lazy,Suspense } from "react";
import Loader from "../components/Loader";
// All pages
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Service = lazy(() => import("../pages/Service/Service"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const AppointmentModel = lazy(() => import("../components/AppointmentModel"));
const ServiceDeatails=lazy(()=>import("../pages/ServiceDeatils/ServiceDeatails"))
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "service",
        element: (
          <Suspense fallback={<Loader />}>
            <Service />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "appointment",
        element: (
          <Suspense fallback={<Loader />}>
            <AppointmentModel />
          </Suspense>
        ),
      },
      {
        path: "serviceDetails/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ServiceDeatails />
          </Suspense>
        ),
      },
    ],
  },
]);



export default function Router() {
  return <RouterProvider router={router}></RouterProvider>
}



