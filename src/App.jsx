import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Interface from "./pages/dashboard/interface/Interface";
import Components from "./pages/dashboard/component/Components";
import Pages from "./pages/dashboard/pages/Pages";
import Form from "./pages/dashboard/form/Form";
import Gallery from "./pages/dashboard/gallery/Gallery";
import Document from "./pages/dashboard/documents/Document";
import Home from "./pages/dashboard/home/Home";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/Signup";
import { useAuth } from "./hooks/useAuth";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="interface" element={<Interface />} />
          <Route path="components" element={<Components />} />
          <Route path="pages" element={<Pages />} />
          <Route path="form" element={<Form />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="documentation" element={<Document />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
