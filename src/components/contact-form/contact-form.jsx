import "./contact-form.css";
import { Fragment, useEffect } from "react";
import { useState, useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import FacebookSVG from "../../assets/images/svg/social/facebook.svg";
import FacebookGraySVG from "../../assets/images/svg/social/facebook-gray.svg";
import InstagramSVG from "../../assets/images/svg/social/instagram.svg";
import InstagramGraySVG from "../../assets/images/svg/social/instagram-gray.svg";
import YoutubeSVG from "../../assets/images/svg/social/youtube.svg";
import YoutubeGraySVG from "../../assets/images/svg/social/youtube-gray.svg";
import ZaloSVG from "../../assets/images/svg/social/zalo.svg";
import ZaloGraySVG from "../../assets/images/svg/social/zalo-gray.svg";

import axios from "axios";

const ContactForm = () => {
   const [companyInfos, setCompanyInfos] = useState({});
   const [serviceItems, setServiceItems] = useState([]);
   const { userInfo } = useSelector((state) => state.userLogin);

   const [customer, setCustomer] = useState({
      fullname: "",
      name: "",
      email: "",
      phone: "",
      serviceId: -1,
   });

   useEffect(() => {
      axios
         .get("/api/info/services")
         .then(({ data }) => {
            setServiceItems(data.services);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

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

   const [isServiceCategoryRevealed, setIsServiceCategoryRevealed] =
      useState(false);
   const [categoryValue, setCategoryValue] = useState("");

   const serviceCategoryRef = useRef(null);

   const toggleServiceCategory = (e) => {
      setIsServiceCategoryRevealed(!isServiceCategoryRevealed);

      if (!isServiceCategoryRevealed) {
         serviceCategoryRef.current.style.display = "block";
         setTimeout(() => {
            serviceCategoryRef.current.classList.add("active");
            const isVisible = isElementFullyVisible(serviceCategoryRef.current);
            if (!isVisible) {
               serviceCategoryRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
               });
            }
         }, 500);
      } else {
         setTimeout(() => {
            serviceCategoryRef.current.style.display = "none";
            serviceCategoryRef.current.classList.remove("active");
         }, 100);
      }
   };

   const isElementFullyVisible = (element) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
         rect.top >= 0 &&
         rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
      );
   };

   const handleChangeServiceValue = (service) => {
      setTimeout(() => {
         serviceCategoryRef.current.style.display = "none";
         serviceCategoryRef.current.classList.remove("active");
      }, 100);
      setIsServiceCategoryRevealed(true);
      setCategoryValue(service.serviceName);
   };

   const handleSaveCustomer = () => {
      let data = {
         ...customer,
      };

      if(data.email === "" || data.fullname === "" || data.name === "" || data.phone === "" ||  data.serviceId === -1) return;

      const formData = new FormData();

      console.log(data);

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post("/api/info/customer/submit", formData)
         .then(({ data }) => {
            console.log(data.message);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <form className="contact__form">
         <label htmlFor="fullname">Họ và tên</label>
         <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="VD: Trần Ngọc Minh"
            onChange={(e) => {
               setCustomer({ ...customer, fullname: e.target.value });
            }}
         />

         <label htmlFor="name">Danh xưng</label>
         <input
            type="text"
            id="name"
            name="name"
            placeholder="VD: Ông, bà,.."
            onChange={(e) => {
               setCustomer({ ...customer, name: e.target.value });
            }}
         />

         <label htmlFor="email">Email</label>
         <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
               setCustomer({ ...customer, email: e.target.value });
            }}
         />

         <label htmlFor="phone">Số điện thoại</label>
         <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+84"
            onChange={(e) => {
               setCustomer({ ...customer, phone: e.target.value });
            }}
         />

         <div className="category">
            <button
               type="button"
               className={
                  isServiceCategoryRevealed
                     ? "category-service plus-rotate-icon-active"
                     : "category-service"
               }
               id="category-service-button"
               onClick={toggleServiceCategory}
            >
               <h5
                  className="category-service__name"
                  id="service-selected"
                  value={categoryValue}
               >
                  {categoryValue === "" ? "Danh mục dịch vụ" : categoryValue}
               </h5>

               <div className="plus-rotate-icon">
                  <i className="left"></i>
                  <i className="right"></i>
               </div>
            </button>

            <div
               className="category__services"
               id="category-service"
               ref={serviceCategoryRef}
            >
               <div className="services">
                  {serviceItems?.map((service, index) => (
                     <div
                        key={index}
                        className="services__item"
                        onClick={() => {
                           handleChangeServiceValue(service);
                           setCustomer({ ...customer, serviceId: service.id });
                        }}
                     >
                        {service.serviceName}
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="contact__form-submit w-100 d-flex align-items-center justify-content-center">
            <button
               id="contact__form-submit"
               onClick={() => {
                  handleSaveCustomer();
               }}
               type="button"
            >
               <div className="arrow-right-link">
                  <div className="arrow-right-link__text">Button demo 1</div>
                  <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </div>
            </button>
         </div>

         <div className="social w-100 d-flex justify-content-center align-items-center">
            <Link to={companyInfos.companyInstagram} className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={InstagramGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={InstagramSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
            <Link to={companyInfos.companyFacebook} className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={FacebookGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={FacebookSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
            <Link to={companyInfos.companyYoutube} className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={YoutubeGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={YoutubeSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
            <Link to={companyInfos.companyZalo} className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={ZaloGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={ZaloSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
         </div>
      </form>
   );
};

export default ContactForm;
