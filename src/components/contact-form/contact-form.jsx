import "./contact-form.css";
import { Fragment, useEffect, useMemo } from "react";
import { useState, useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import FacebookSVG from "../../assets/svg/social/fb.svg";
import FacebookGraySVG from "../../assets/svg/social/fb-line.svg";
import InstagramSVG from "../../assets/svg/social/ins.svg";
import InstagramGraySVG from "../../assets/svg/social/ins-line.svg";
import YoutubeSVG from "../../assets/svg/social/you-tube.svg";
import YoutubeGraySVG from "../../assets/svg/social/you-yube-line.svg";
import ZaloSVG from "../../assets/svg/social/zalo.svg";
import ZaloGraySVG from "../../assets/svg/social/zalo-line.svg";

import axios from "axios";

const ContactForm = () => {
   const [companyInfos, setCompanyInfos] = useState({});
   const [serviceItems, setServiceItems] = useState([]);
   const [errorCategory, setErrorCategory] = useState(false);
   const [isChoose, setIsChoose] = useState(false);
   // const { userInfo } = useSelector((state) => state.userLogin);
   const [customer, setCustomer] = useState({
      fullname: "",
      name: "",
      email: "",
      phone: "",
      serviceId: -1,
   });
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);

   useEffect(() => {
      axios
         .get(preApi + "/api/info/services")
         .then(({ data }) => {
            setServiceItems(data.services);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

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
      if (customer.serviceId !== -1) {
         setErrorCategory(false);
      } else {
         setErrorCategory(true);
      }
   }, [customer]);

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
      setIsServiceCategoryRevealed(false);
      setCategoryValue(service.serviceName);
      setIsChoose(true);
   };

   const handleSaveCustomer = (e) => {
      e.preventDefault();
      setIsChoose(true);
      let data = {
         ...customer,
      };

      if (
         data.email === "" ||
         data.fullname === "" ||
         data.name === "" ||
         data.phone === "" ||
         data.serviceId === -1
      )
         return;

      const formData = new FormData();

      // console.log(data);

      Object.keys(data).forEach((key) => {
         formData.append(key, data[key]);
      });

      axios
         .post(preApi + "/api/info/customer/submit", formData)
         .then(({ data }) => {
            // console.log(data.message);
            setCustomer({
               fullname: "",
               name: "",
               email: "",
               phone: "",
            });
         })
         .catch((error) => {
            // console.log(error);
         });
   };

   return (
      <form
         className="contact__form"
         onSubmit={(e) => {
            handleSaveCustomer(e);
         }}
      >
         <label htmlFor="fullname">Họ và tên</label>
         <input
            type="text"
            id="fullname"
            required
            name="fullname"
            placeholder="VD: Trần Ngọc Minh"
            value={customer.fullname}
            onChange={(e) => {
               setCustomer({ ...customer, fullname: e.target.value });
            }}
         />

         <label htmlFor="name">Danh xưng</label>
         <input
            type="text"
            id="name"
            required
            name="name"
            placeholder="VD: Ông, bà,.."
            value={customer.name}
            onChange={(e) => {
               setCustomer({ ...customer, name: e.target.value });
            }}
         />

         <label htmlFor="email">Email</label>
         <input
            type="email"
            id="email"
            required
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={(e) => {
               setCustomer({ ...customer, email: e.target.value });
            }}
         />

         <label htmlFor="phone">Số điện thoại</label>
         <input
            type="tel"
            required
            id="phone"
            name="phone"
            placeholder="+84"
            value={customer.phone}
            onChange={(e) => {
               setCustomer({ ...customer, phone: e.target.value });
            }}
         />

         <div className="category">
            <button
               type="button"
               className={`${
                  isServiceCategoryRevealed
                     ? "category-service plus-rotate-icon-active"
                     : "category-service"
               } ${errorCategory && isChoose ? "active" : ""}`}
               id="category-service-button"
               onClick={toggleServiceCategory}
            >
               <h5
                  className="category-service__name mb-0"
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
                  setIsChoose(true);
               }}
               type="submit"
            >
               <div className="arrow-right-link">
                  <div className="arrow-right-link__text">Gửi đi</div>
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
