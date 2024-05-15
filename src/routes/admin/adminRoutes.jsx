import "../../styles/admin/dashboard.css";
import "../../styles/admin/notify.css";
import "../../styles/admin/style.css";

import { Route, Routes } from "react-router-dom";

import Signin from "./signin/signin";
import Dashboard from "./dashboard/dashboard";
import AdminAbout from "./admin-about/admin-about";
import AdminCompany from "./admin-company/admin-company";
import AdminContact from "./admin-contact/admin-contact";
import AdminHiring from "./admin-hiring/admin-hiring";
import AdminHome from "./admin-home/admin-home";
import AdminWork from "./admin-work/admin-work";

const AdminRoutes = () => {
   return (
      <div className="admin-routes">
         <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<AdminAbout />} />
            <Route path="/company" element={<AdminCompany />} />
            <Route path="/contact" element={<AdminContact />} />
            <Route path="/hiring" element={<AdminHiring />} />
            <Route path="/home" element={<AdminHome />} />
            <Route path="/work" element={<AdminWork />} />
         </Routes>
      </div>
   );
};

export default AdminRoutes;
