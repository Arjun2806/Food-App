import React from "react";
import FoodContextProvider from "./context/FoodContext";
import "./App.css";
import Card from "./components/Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";
import About from "./components/About";
import { Login } from "./components/Login";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
      />
      <Router>
        <AuthProvider>
          <FoodContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Card />} />
              </Route>
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </FoodContextProvider>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
