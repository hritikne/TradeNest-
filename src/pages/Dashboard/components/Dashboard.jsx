// src/pages/Dashboard/DashboardWrapper.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext.jsx";
import Menu from "./Menu.jsx";
import WatchList from "./WatchList.jsx";
const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <>
        {/* fixed top menu */}
        <Menu />

        {/* main dashboard layout */}
        <div
          style={{
            display: "flex", // same height as Menu
            minHeight: "150vh",
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Sidebar */}
          <aside
            style={{
              width: "100px",
              borderRight: "1px solid #eaeaea",
              height: "100%",
              overflowY: "auto",
              backgroundColor: "#fff",
            }}
          >
            <WatchList />
          </aside>

          {/* Main content area for nested dashboard routes */}
          <main
            style={{
              flex: 1,
              padding: "5px",
              overflowY: "auto",
            }}
          >
            <Outlet />
          </main>
        </div>
      </>
    </GeneralContextProvider>
  );
};

export default Dashboard;
