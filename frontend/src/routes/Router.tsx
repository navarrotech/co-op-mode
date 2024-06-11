// Copyright © 2024 Navarrotech

// React.js & Router
import { Navigate, Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom";

// Outlets
import { AuthorizedOutlet } from "@/routes/authentication/Outlet";

// Pages
import { Layout, Logout } from "./authentication/Forms";
import DashboardLayout from "./dashboard/Layout";

export default function Router() {
  return <BrowserRouter>
    <Routes>
      {/* Home page: */}
      <Route index path="/" element={<h1>Homepage placeholder</h1>} />
      {/* Authentication */}
      <Route path="/login"   element={<Layout mode="login"  />} />
      <Route path="/signup"  element={<Layout mode="signup" />} />
      <Route path="/logout"  element={<Logout />} />
      {/* Dashboard */}
      <Route path="/dashboard" element={<AuthorizedOutlet />}>
        <Route index path="/dashboard" element={<DashboardLayout />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  </BrowserRouter>
}
