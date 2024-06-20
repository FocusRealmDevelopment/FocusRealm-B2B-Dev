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
  FocusSession,
  Help,
  Login,
  Task,
  Forum,
  Chat,
  Profile,
  MainProfilePage,
  DetailedAnalytics,
} from "./pages/!mainExports.js";
import AppTeacher from "./AppTeacher.jsx";
import HomeTeacher from "./pages/home/homeComponents/HomeTeacher/HomeTeacher.jsx";
import TeacherHomework from "./pages/home/homeComponents/TeacherHome/TeacherHomework.jsx";
import TeacherAssignment from "./pages/home/homeComponents/TeacherAssignment/TeacherAssignment.jsx";
import Homework from "./components/homework/homework.jsx";
import NewHomework from "./pages/homework/Homework.jsx"


import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


import TeacherResults from "./pages/home/homeComponents/TeacherResults/TeacherResults.jsx";
import TeacherCalendar from "./pages/home/homeComponents/TeacherCalendar/calendar.jsx";
import Teachersignup from './pages/loginAndSignUp/signup/teachersignup.jsx'
import StudentSignup from "./pages/loginAndSignUp/signup/StudentSignup.jsx";
import StudentLogin from "./pages/loginAndSignUp/login/StudentLogin.jsx";
import TeacherLogin from "./pages/loginAndSignUp/login/TeacherLogin.jsx";
import AdminLogin from "./pages/loginAndSignUp/login/AdminLogin.jsx";

import Adminsignup from "./pages/loginAndSignUp/signup/adminSignup.jsx";



const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Studentlogin",
    element: <StudentLogin/>,
  },
  {
    path: "/Teacherlogin",
    element: <TeacherLogin />,
  },
  {
    path: "/Adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/teachersignup",
    element: <Teachersignup/>,
  },
  {
    path: "/studentsignup",
    element: <StudentSignup/>,
  },
  {
    path: "/adminsignup",
    element: <Adminsignup/>,
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
        path: "focusSession",
        element: <FocusSession />,
      },
      {
        path: "forum",
        element: <Forum />,
      },
      {
        path: "homework",
        element:<Homework/>
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path:"newhomework",
        element:<NewHomework/>
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
      {
        path: "teacherassignment",
        element: <TeacherAssignment />,
      },
      {
        path: "teacherresults",
        element:<TeacherResults/>
      },
      {
        path:"teachercalendar",
        element:<TeacherCalendar/>
      },
    ],
  },
]);

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <RouterProvider router={router} />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
