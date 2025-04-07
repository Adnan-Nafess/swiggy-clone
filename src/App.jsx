import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Search from "./components/Search.jsx";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import MenuSearch from "./components/MenuSearch";

const Help = lazy(() => import("./components/Help.jsx"));

// App Layout without Provider
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "help",
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "profile",
        element: <SignIn />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "menusearch/:id",
        element: <MenuSearch />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
