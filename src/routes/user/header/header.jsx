import { useEffect, useState } from "react";
import "./header.css";
import "../../../styles/animation.css";
import "../../../styles/base.css";
import "../../../styles/font.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

import MobileNavbar from "../../../components/mobile-navbar/mobile-navbar";

const Header = () => {
   const [isHeaderActive, setIsHeaderActive] = useState(false);
   const location = useLocation();
   console.log(location.pathname);
   useEffect(() => {
      if (
         location.pathname.includes("work") ||
         location.pathname.includes("contact") ||
         location.pathname.includes("cataloge")
      ) {
         setIsHeaderActive(true);
      } else {
         setIsHeaderActive(false);
      }
   }, [location]);
   useEffect(() => {
      const handleScroll = () => {
         const banner = document.querySelector(".banner");
         const bannerH = banner ? banner.offsetHeight : 0;
         const scrollY = window.scrollY;

         if (scrollY >= bannerH) {
            setIsHeaderActive(true);
         } else {
            setIsHeaderActive(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div
         className="user-routes"
         style={{ display: location.pathname.includes("admin") ? "none" : "" }}
      >
         <header className={isHeaderActive ? "active" : ""}>
            <div className="wrapper d-flex justify-content-center justify-content-md-between align-items-center">
               <Link to="/" className="header__logo">
                  Logo
               </Link>

               <ul className="header__nav d-none d-md-flex justify-content-between align-items-center">
                  <li className="header__nav-link">
                     <Link to="/about">Giới Thiệu</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/work">Công Việc</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/hiring">Tuyển Dụng</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/contact">Liên Hệ</Link>
                  </li>
               </ul>
            </div>
         </header>
         <MobileNavbar />
      </div>
   );
};

export default Header;