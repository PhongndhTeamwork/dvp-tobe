import "./footer.css";
import "../../../styles/animation.css";
import "../../../styles/base.css";
import "../../../styles/font.css";
import "../../../styles/style.css";
import "../../../styles/bootstrap.min.css";
import CopyrightIcon from "../../../assets/images/svg/copyright.svg";
import { Image } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
   const location = useLocation();

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
                        <h1 className="info__header-logo">Logo</h1>
                     </div>
                     <div className="info__content">
                        <h6 className="text">
                           Công ty TNHH 1 thành viên DVP media
                        </h6>
                        <h6 className="text">GCNĐKKD: 0108755817</h6>
                        <h6 className="text">Cấp ngày: 01/01/2024</h6>
                        <h6 className="text">
                           Nơi cấp: Sở Kế Hoạch Đầu Tư Thành phố Hà Nội
                        </h6>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info address">
                     <div className="info__header">
                        <h3 className="heading">Hà Nội</h3>
                     </div>
                     <div className="info__content">
                        <h6 className="text">
                           Số 67 phố Láng Hạ, quận Đống Đa, <br />
                           tp Hà Nội
                        </h6>
                        <h6 className="text">+84 988 123 456</h6>
                        <h6 className="text">dvp.media@gmail.com</h6>
                        <h6 className="text">
                           <a href="" className="website-link">
                              www.dvpmedia.com
                           </a>
                        </h6>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info location">
                     <div className="info__header">
                        <h3 className="heading">Bản đồ</h3>
                     </div>
                     <div className="info__content location__map">
                        <iframe
                           title="Google Map Location"
                           className="location__map-link"
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.7824199424376!2d105.8175071671402!3d21.01192097903609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9d54df9633%3A0xc6669ca3a3fd9129!2zS8OtbmggTeG6r3QgSMOgIFRow6BuaA!5e0!3m2!1svi!2sus!4v1714187539680!5m2!1svi!2sus"
                           allowfullscreen=""
                           loading="lazy"
                           referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 info connect">
                     <div className="info__header">
                        <h3 className="heading">Kết nối</h3>
                     </div>
                     <div className="info__content">
                        <Link to="" className="social-link">
                           Facebook
                        </Link>
                        <Link to="" className="social-link">
                           Instagram
                        </Link>
                        <Link to="" className="social-link">
                           Zalo
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
