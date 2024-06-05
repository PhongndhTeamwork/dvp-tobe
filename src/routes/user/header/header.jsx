import { useEffect, useMemo, useRef, useState } from "react";
import "./header.css";
import "../../../styles/animation.css";
import "../../../styles/base.css";
import "../../../styles/font.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";

import MobileNavbar from "../../../components/mobile-navbar/mobile-navbar";
import axios from "axios";

const Header = () => {
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);
   const [isHeaderActive, setIsHeaderActive] = useState(false);
   const [currentPathname, setCurrentPathname] = useState("");
   const [isHeaderColorChangeable, setIsHeaderColorChangeable] = useState(true);
   const location = useLocation();
   const logoRef = useRef(null);

   const [companyInfos, setCompanyInfos] = useState({});

   useEffect(() => {
      axios
         .get(preApi + "/api/info/company")
         .then(({ data }) => {
            setCompanyInfos(data.company);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

   useEffect(() => {
      // if (location.pathname === currentPathname) return;
      if (
         location.pathname.includes("work") ||
         location.pathname.includes("contact") ||
         location.pathname.includes("cataloge") ||
         location.pathname.includes("quote")
      ) {
         const svgElement = logoRef.current.querySelector("svg");
         if (svgElement) svgElement.style.fill = "black";
         setIsHeaderColorChangeable(false);
         setIsHeaderActive(true);
      } else {
         setIsHeaderColorChangeable(true);
         setIsHeaderActive(false);
         const svgElement = logoRef.current.querySelector("svg");
         if (svgElement) svgElement.style.fill = "white";
      }
      setCurrentPathname(location.pathname);
   }, [location, currentPathname]);

   useEffect(() => {
      const handleScroll = () => {
         // if(!isHeaderColorChangeable) return;
         const banner = document.querySelector(".banner");
         const bannerH = banner ? banner.offsetHeight : 0;
         const scrollY = window.scrollY;

         if (scrollY >= bannerH) {
            setIsHeaderActive(true);
            const svgElement = logoRef.current.querySelector("svg");
            if (svgElement) svgElement.style.fill = "black";
         } else {
            if (!location.pathname.includes("quote")) {
               setIsHeaderActive(false);
               const svgElement = logoRef.current.querySelector("svg");
               if (svgElement) svgElement.style.fill = "white";
            }
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [isHeaderColorChangeable, location]);

   return (
      <div
         className="user-routes"
         style={{ display: location.pathname.includes("admin") ? "none" : "" }}
      >
         <header className={isHeaderActive ? "active" : ""}>
            <div className="wrapper d-flex justify-content-center justify-content-md-between align-items-center">
               <Link
                  to="/"
                  onClick={() => {
                     window.scrollTo(0, 0);
                  }}
                  className="header__logo"
               >
                  <div
                     ref={logoRef}
                     style={{ width: "4.25rem", height: "4.25rem" }}
                     className="d-flex align-items-center"
                     dangerouslySetInnerHTML={{
                        __html: companyInfos?.logo,
                     }}
                  />
               </Link>

               <ul className="header__nav d-none d-md-flex justify-content-between align-items-center">
                  <li className="header__nav-link">
                     <Link to="/about">Giới Thiệu</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/work">Công Việc</Link>
                  </li>
                  <li className="header__nav-link">
                     <Link to="/quote">Dịch vụ</Link>
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
