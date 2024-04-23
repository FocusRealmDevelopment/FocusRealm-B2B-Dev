import React from "react";
import ReactDOM from "react-dom/client";
import App2 from "./App2.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Calendar,
  Help,
  Homework,
  Login,
  Signup,
  Task,
  Test,
  ChatBox,
} from "./pages/!mainExports.js";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App2 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "task",
        element: <Task />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "homework",
        element: <Homework />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "/chat",
        element: <ChatBox />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
