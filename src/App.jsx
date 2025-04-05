import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import WeatherWelcome from "./Pages/WeatherWelcome"


const router = createBrowserRouter([
  {
    path: "/",
    element: <WeatherWelcome />
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
