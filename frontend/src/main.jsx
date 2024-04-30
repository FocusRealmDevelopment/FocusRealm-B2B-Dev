import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
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
  Forum,
  Chat,
} from "./pages/!mainExports.js";
import MainProfilePage from "./pages/profile/profileChildren/mainProfilePage/MainProfilePage.jsx";
import Profile from "./pages/profile/Profile.jsx";

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
    element: <App />,
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
        path: "forum",
        element: <Forum />,
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
        element: <Chat />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "",
        element: <MainProfilePage />,
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
