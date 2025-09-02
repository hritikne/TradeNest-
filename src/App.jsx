import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

/** Landing Pages */
import NavBar from "./landing/NavBar";
import Footer from "./landing/Footer";
import SignUp from "./landing/signup/SignUp.jsx";
import Login from "./landing/signup/login.jsx";
import HomePage from "./landing/home/HomePage.jsx";
import AboutPage from "./landing/about/AboutPage.jsx";
import ProductPage from "./landing/product/ProductPage.jsx";
import PrisingPage from "./landing/pricing/PrisingPage.jsx";
import SupportPage from "./landing/support/SupportPage.jsx";
import NotFound from "./landing/notFound.jsx";
import Currency from "./landing/pricing/Currency.jsx";
import Equity from "./landing/pricing/Equity.jsx";
import Commodity from "./landing/pricing/Commodity.jsx";
import AdminDashboard from "./landing/Admindashboard.jsx";

/** Dashboard Wrapper */
const DashboardWrapper = lazy(() => import("./pages/Dashboard/DashboardWrapper"));

/** Dashboard Pages */
const Summary = lazy(() => import("./pages/Dashboard/components/Summary.jsx"));
const Orders = lazy(() => import("./pages/Dashboard/components/Orders.jsx"));
const Holdings = lazy(() => import("./pages/Dashboard/components/Holdings.jsx"));
const Positions = lazy(() => import("./pages/Dashboard/components/Positions.jsx"));
const Funds = lazy(() => import("./pages/Dashboard/components/Funds.jsx"));
const Apps = lazy(() => import("./pages/Dashboard/components/Apps.jsx"));

/** Loader Component */
const Loader = ({ text = "Loading..." }) => {
  return (
    <>
      <style>
        {`
          .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(6px);
            z-index: 9999;
            font-family: Arial, sans-serif;
          }

          .spinner {
            width: 60px;
            height: 60px;
            border: 6px solid rgba(0, 0, 0, 0.1);
            border-top: 6px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 12px;
          }

          .loader-text {
            font-size: 18px;
            font-weight: 600;
            color: #222;
            letter-spacing: 0.5px;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loader-text">{text}</p>
      </div>
    </>
  );
};

/** Landing Layout */
function LandingLayout() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

/** Dashboard Layout */
function DashboardLayout() {
  return (
    <Suspense fallback={<Loader text="Loading Dashboard..." />}>
      <DashboardWrapper />
    </Suspense>
  );
}

/** Main Router */
function App() {
  return (
    <Suspense fallback={<Loader text="Loading App..." />}>
      <Routes>
        {/* Landing Pages */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PrisingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/equity" element={<Equity />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/commodity" element={<Commodity />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="summary" replace />} />
          <Route path="summary" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
