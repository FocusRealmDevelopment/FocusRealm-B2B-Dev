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
  Profile,
  MainProfilePage,
  DetailedAnalytics,
} from "./pages/!mainExports.js";
import AppTeacher from "./AppTeacher.jsx";
import HomeTeacher from "./pages/home/HomeTeacher.jsx";
import TeacherHomework from "./pages/home/TeacherHomework.jsx";

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
      {
        path: "detailed-analytics",
        element: <DetailedAnalytics />,
      },
    ],
  },
  {
    path: "/teacher",
    element: <AppTeacher />,
    children: [
      {
        path: "",
        element: <HomeTeacher />,
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
        path: "teacherhomework",
        element: <TeacherHomework />,
      },
      {
        path: "help",
        element: <Help />,
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
