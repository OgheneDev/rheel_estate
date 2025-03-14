import React from 'react'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage';
import AboutUsPage from './pages/AboutUsPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import CareersPage from './pages/CareersPage';
import AffiliatesPage from './pages/AffiliatesPage';
import MainLayout from './layouts/MainLayout';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/properties/:id" element={<PropertyDetailPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/affiliates" element={<AffiliatesPage />} />
      </Route>
    )
  );
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
