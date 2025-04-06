import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WeatherWelcome from "./Pages/WeatherWelcome"
import CurrentCity from "./Pages/CurrentCity"
import Layout from "./Pages/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherWelcome />
  },
  {
    path: "/current-city",
    element: <Layout />,
    children: [
      {
        path: "/current-city",
        element: <CurrentCity />
      },
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
