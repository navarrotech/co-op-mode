// Copyright © 2024 Navarrotech

// React.js & Router
import { Navigate, Routes, Route } from "react-router"
import { BrowserRouter } from "react-router-dom";

// Outlets
import { AuthorizedOutlet } from "@/routes/authentication/Outlet";

// Constants
import urls from "./urls";

// Pages
import Welcome from "./authentication/Welcome";
import WithPhoneNumber from "./authentication/WithPhoneNumber";
import DashboardLayout from "./dashboard/Layout";
import VerifyPhoneNumber from "./authentication/VerifyPhoneNumber";
import ProfileBuilder from "./profile/Builder";
import Logout from "./authentication/Logout";

/*
 * Homepage and marketing should be in a separate repository!
 * This repository only focuses on the application, not marketing.
 */

export default function Router() {
  return <BrowserRouter>
    <Routes>
      {/* Index */}
      <Route index path={urls.index} element={<Navigate to={urls.welcome} />} />

      {/* Authentication */}
      <Route path={urls.welcome}  element={<Welcome />} />
      <Route path={urls.phoneStart} element={<WithPhoneNumber />} />
      <Route path={urls.phoneVerify} element={<VerifyPhoneNumber />} />
      <Route path={urls.logout}  element={<Logout />} />

      {/* Primary Application */}
      <Route path={urls.app} element={<AuthorizedOutlet />}>
        <Route path={urls.buildProfile} element={<ProfileBuilder />} />
        <Route path={urls.app} element={<DashboardLayout />} />
      </Route>

      {/* Misc */}
      <Route path={urls.termsOfService} element={<h1>Terms of Service</h1>} />
      <Route path={urls.privacyPolicy} element={<h1>Privacy Policy</h1>} />

      {/* Catch-all 404 */}
      <Route path="*" element={<Navigate to={urls.welcome} />} />
    </Routes>
  </BrowserRouter>
}
