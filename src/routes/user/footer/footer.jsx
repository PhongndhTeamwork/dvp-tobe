import "./footer.css";
import "../../../styles/animation.css";
import "../../../styles/base.css";
import "../../../styles/font.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import CopyrightIcon from "../../../assets/images/svg/copyright.svg";
import { Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

const Footer = () => {
   const location = useLocation();

   const [companyInfos, setCompanyInfos] = useState({});

   const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

   useEffect(() => {
      axios
         .get("/api/info/company")
         .then(({ data }) => {
            setCompanyInfos(data.company);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   return (
      <footer
         className="user-routes"
         style={{ display: location.pathname.includes("admin") ? "none" : "" }}
      >
         <footer className="footer">
            <div className="wrapper">
               <div className="wrapper-flex">
                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info">
                     <div className="info__header">
                        <h1 className="info__header-logo">
                           {urlRegex.test(companyInfos.logo) ? (
                              <Image src={companyInfos.logo} />
                           ) : (
                              "Logo"
                           )}
                        </h1>
                     </div>
                     <div className="info__content">
                        <h6 className="text">{companyInfos.companyName}</h6>
                        <h6 className="text">
                           GCNĐKKD: {companyInfos.licenseCode}
                        </h6>
                        <h6 className="text">
                           Cấp ngày: {companyInfos.licenseDate}
                        </h6>
                        <h6 className="text">
                           Nơi cấp: {companyInfos.licenseAddress}
                        </h6>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info address">
                     <div className="info__header">
                        <h3 className="heading">Hà Nội</h3>
                     </div>
                     <div className="info__content">
                        <h6 className="text">{companyInfos.companyAddress}</h6>
                        <h6 className="text">{companyInfos.companyPhone}</h6>
                        <h6 className="text">{companyInfos.companyEmail}</h6>
                        <h6 className="text">
                           <Link to="" className="website-link">
                              {companyInfos.companyWebsite}
                           </Link>
                        </h6>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info location">
                     <div className="info__header">
                        <h3 className="heading">Bản đồ</h3>
                     </div>
                     <div className="info__content location__map">
                        {companyInfos.companyLocation}
                        {/* <iframe
                           title="Google Map Location"
                           className="location__map-link"
                           src={companyInfos.companyLocation}
                           allowFullScreen=""
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info connect">
                     <div className="info__header">
                        <h3 className="heading">Kết nối</h3>
                     </div>
                     <div className="info__content">
                        <Link
                           to={companyInfos.companyFacebook}
                           className="social-link"
                        >
                           Facebook
                        </Link>
                        <Link
                           to={companyInfos.companyInstagram}
                           className="social-link"
                        >
                           Instagram
                        </Link>
                        <Link
                           to={companyInfos.companyZalo}
                           className="social-link"
                        >
                           Zalo
                        </Link>
                        <Link
                           to={companyInfos.companyYoutube}
                           className="social-link"
                        >
                           Youtube
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </footer>

         <div className="copyright">
            <Image src={CopyrightIcon} alt="Copyright" />
            <h6 className="copyright__text mb-0" style={{ marginBottom: "0" }}>
               Copyright by DVP media 2021
            </h6>
         </div>
      </footer>
   );
};

export default Footer;
