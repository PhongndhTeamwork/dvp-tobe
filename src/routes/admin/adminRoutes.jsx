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

import { AdminContext } from "./adminContext";
import { useContext } from "react";

import AdminAboutBanner from "./admin-about/admin-about-banner";
import AdminAboutStory from "./admin-about/admin-about-story";
import AdminAboutCulture from "./admin-about/admin-about-culture";
import AdminAboutStaff from "./admin-about/admin-about-staff";
import AdminAboutMotto from "./admin-about/admin-about-motto";

import AdminWorkCategory from "./admin-work/admin-work-category";
import AdminWorkProject from "./admin-work/admin-work-project";
import AdminWorkStory from "./admin-work/admin-work-story";

import AdminContactLocation from "./admin-contact/admin-contact-location";
import AdminContactParagraph from "./admin-contact/admin-contact-paragraph";
import AdminContactStory from "./admin-contact/admin-contact-story";

import AdminHiringStory from "./admin-hiring/admin-hiring-story";
import AdminHiringJob from "./admin-hiring/admin-hiring-job";
import AdminHiringBanner from "./admin-hiring/admin-hiring-banner";
import AdminHiringGmail from "./admin-hiring/admin-hiring-gmail";

import AdminHomeBanner from "./admin-home/admin-home-banner";
import AdminHomeService from "./admin-home/admin-home-service";
import AdminHomeStory from "./admin-home/admin-home-story";
import AdminHomeVideo from "./admin-home/admin-home-video";

const AdminRoutes = () => {
   const location = useLocation();

   const { fullView } = useContext(AdminContext);

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
                  left: fullView ? "-17.5vw" : 0,
                  top: "3rem",
                  width: "17.5vw",
                  backgroundColor: "var(--bg-semi-dark)",
                  height: "100vh",
                  transition: "left 0.5s ease",
               }}
               className="pt-3"
            >
               <AdminNav />
            </div>
         </header>
         <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/work" element={<AdminWork />}>
               <Route path="project-category" element={<AdminWorkCategory />} />
               <Route path="project" element={<AdminWorkProject />} />
               <Route path="story" element={<AdminWorkStory />} />
            </Route>
            <Route path="/dashboard/home" element={<AdminHome />}>
               <Route path="banner" element={<AdminHomeBanner />} />
               <Route path="service" element={<AdminHomeService />} />
               <Route path="story" element={<AdminHomeStory />} />
               <Route path="video" element={<AdminHomeVideo />} />
            </Route>
            <Route path="/dashboard/hiring" element={<AdminHiring />}>
               <Route path="job" element={<AdminHiringJob />} />
               <Route path="banner" element={<AdminHiringBanner />} />
               <Route path="story" element={<AdminHiringStory />} />
               <Route path="gmail" element={<AdminHiringGmail />} />
            </Route>
            <Route path="/dashboard/contact" element={<AdminContact />}>
               <Route path="location" element={<AdminContactLocation />} />
               <Route path="paragraph" element={<AdminContactParagraph />} />
               <Route path="story" element={<AdminContactStory />} />
            </Route>
            <Route path="/dashboard/company" element={<AdminCompany />} />
            <Route path="/dashboard/about" element={<AdminAbout />}>
               <Route path="banner" element={<AdminAboutBanner />} />
               <Route path="story" element={<AdminAboutStory />} />
               <Route path="culture" element={<AdminAboutCulture />} />
               <Route path="staff" element={<AdminAboutStaff />} />
               <Route path="motto" element={<AdminAboutMotto />} />
            </Route>
         </Routes>
      </div>
   );
};

export default AdminRoutes;
