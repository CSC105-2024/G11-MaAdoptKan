import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import { Toaster } from 'react-hot-toast';

import Home from './pages/HomePage'
import AboutUs from './pages/AboutUs';
import DonationPage from './pages/DonationPage';
import Pets from './pages/PetPage';
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home", // ✅ optional alias
    element: <Home />,
  },
  {
    path: "/pets",
    element: <Pets />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/donation",
    element: <DonationPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },


]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </StrictMode>
);