import "../../styles/admin/dashboard.css";
import "../../styles/admin/notify.css";
import "../../styles/admin/style.css";

import Signin from "./signin/signin";
import Dashboard from "./dashboard/dashboard";
import AdminWork from "./admin-work/admin-work";
import AdminHome from "./admin-home/admin-home";
import AdminHiring from "./admin-hiring/admin-hiring";
import AdminContact from "./admin-contact/admin-contact";
import AdminCompany from "./admin-company/admin-company";
import AdminAbout from "./admin-about/admin-about";

import { Route, Routes, useLocation } from "react-router-dom";
import AdminHeader from "../../components/admin-header/admin-header";
import AdminNav from "../../components/admin-nav/admin-nav";

const AdminRoutes = () => {
   const location = useLocation();

   return (
      <div className="admin-routes">
         <header
            style={{
               display: location.pathname.includes("admin/signin")
                  ? "none"
                  : "",
            }}
         >
            <AdminHeader />
            <div
               style={{
                  position: "absolute",
                  left: 0,
                  top: "3rem",
                  width: "14rem",
                  backgroundColor: "var(--bg-semi-dark)",
                  height: "100vh",
               }}
               className="pt-3"
            >
               <AdminNav />
            </div>
         </header>
         <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/work" element={<AdminWork />} />
            <Route path="/home" element={<AdminHome />} />
            <Route path="/hiring" element={<AdminHiring />} />
            <Route path="/contact" element={<AdminContact />} />
            <Route path="/company" element={<AdminCompany />} />
            <Route path="/about" element={<AdminAbout />} />
         </Routes>
      </div>
   );
};

export default AdminRoutes;
