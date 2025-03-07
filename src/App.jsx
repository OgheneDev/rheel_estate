import React from 'react'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage';
import MainLayout from './layouts/MainLayout';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<PropertiesPage />} />
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
