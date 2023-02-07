import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";

import Home from "./routes/Home";
import Post from "./routes/Post";
import Admin from "./routes/Admin";
import Admin2 from "./routes/Admin2";
import Admin3 from "./routes/Admin3";
import EditPost from "./routes/EditPost";
import Suvs from "./routes/Suvs";
import Hatch from "./routes/Hatch";
import NewPost from "./routes/NewPost";


import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      }, {
        path: "/admin2",
        element: <Admin2 />,
      }, {
        path: "/admin3",
        element: <Admin3 />,
      },
      ,
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
      {
        path: "/Suv",
        element: <Suvs />,
      },
      {
        path: "/Hatch",
        element: <Hatch />,
      },
      {
        path: "/NewPost",
        element: <NewPost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

