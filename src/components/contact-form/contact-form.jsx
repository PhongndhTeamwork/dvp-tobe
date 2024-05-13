import "./contact-form.css";
import { Fragment } from "react";
import { useState, useRef } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import FacebookSVG from "../../assets/images/svg/social/facebook.svg";
import FacebookGraySVG from "../../assets/images/svg/social/facebook-gray.svg";
import InstagramSVG from "../../assets/images/svg/social/instagram.svg";
import InstagramGraySVG from "../../assets/images/svg/social/instagram-gray.svg";
import YoutubeSVG from "../../assets/images/svg/social/youtube.svg";
import YoutubeGraySVG from "../../assets/images/svg/social/youtube-gray.svg";
import ZaloSVG from "../../assets/images/svg/social/zalo.svg";
import ZaloGraySVG from "../../assets/images/svg/social/zalo-gray.svg";

const ContactForm = () => {
   const services = [
      "Nhận diện thương hiệu",
      "Fanpage - Digital maketing",
      "Xây dựng - Thiết kế website",
      "POD Design",
      "In ấn - Ấn phẩm văn phòng",
      "TVC - Video marketing",
      "None",
      "None",
      "None",
   ];

   const [isServiceCategoryRevealed, setIsServiceCategoryRevealed] =
      useState(true);
   const [categoryValue, setCategoryValue] = useState("");

   const serviceCategoryRef = useRef(null);

   const toggleServiceCategory = (e) => {
      setIsServiceCategoryRevealed(!isServiceCategoryRevealed);

      if (isServiceCategoryRevealed) {
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

   const handleChangeServiceValue = (value) => {
      setCategoryValue(value);
      setTimeout(() => {
         serviceCategoryRef.current.style.display = "none";
         serviceCategoryRef.current.classList.remove("active");
      }, 100);
      setIsServiceCategoryRevealed(true);
   };
   return (
      <form action="#" className="contact__form">
         <label for="fullname">Họ và tên</label>
         <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="VD: Trần Ngọc Minh"
         />

         <label for="name">Danh xưng</label>
         <input
            type="text"
            id="name"
            name="name"
            placeholder="VD: Ông, bà,.."
         />

         <label for="email">Email</label>
         <input type="email" id="email" name="email" placeholder="Email" />

         <label for="phone">Số điện thoại</label>
         <input type="number" id="phone" name="phone" placeholder="+84" />

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
                  {services.map((service, index) => (
                     <div
                        key={index}
                        className="services__item"
                        onClick={() => handleChangeServiceValue(service)}
                     >
                        {service}
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="contact__form-submit w-100 d-flex align-items-center justify-content-center">
            <button id="contact__form-submit">
               <div className="arrow-right-link">
                  <div className="arrow-right-link__text">Button demo 1</div>
                  <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </div>
            </button>
         </div>

         <div className="social w-100 d-flex justify-content-center align-items-center">
            <Link to="" className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={InstagramGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={InstagramSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
            <Link to="" className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={FacebookGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={FacebookSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
            <Link to="" className="social__link">
               <Fragment>
                  <span className="social__link-icon icon-gray">
                     <Image src={YoutubeGraySVG} alt="social icon gray" />
                  </span>
                  <span className="social__link-icon">
                     <Image src={YoutubeSVG} alt="social icon" />
                  </span>
               </Fragment>
            </Link>
            <Link to="" className="social__link">
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
