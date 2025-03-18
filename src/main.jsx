import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import AboutUs from './pages/AboutUs';
import DonationPage from './DonationPage';

const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />, // Render the App component
  },
  {
    path: "/aboutus", // Home route
    element: <AboutUs />, // Render the App component
  },
  {
    path: "/donation", // Home route
    element: <DonationPage />, // Render the App component
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Provide the router to the app */}
  </StrictMode>
);
