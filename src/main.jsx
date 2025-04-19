import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './pages/HomePage'
import AboutUs from './pages/AboutUs';
import DonationPage from './pages/DonationPage';
import Pets from './pages/PetPage';
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <Home />, // Render the App component
  },
  {
    path: "/pets", // Home route
    element: <Pets />, // Render the App component
  },
  {
    path: "/aboutus", // Home route
    element: <AboutUs />, // Render the App component
  },
  {
    path: "/donation", // Home route
    element: <DonationPage />, // Render the App component
  },
  {
    path: "/signup", // Home route
    element: <SignUpPage />, // Render the App component
  },
  {
    path:"/login",//Home route
    element:<LoginPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
