import "./brand-scroll.css";

import { Image } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import PartnerSVG1 from "../../assets/images/svg/partner/Untitled-1-01.svg";
import PartnerSVG2 from "../../assets/images/svg/partner/Untitled-1-02.svg";
import PartnerSVG3 from "../../assets/images/svg/partner/Untitled-1-03.svg";
import PartnerSVG4 from "../../assets/images/svg/partner/Untitled-1-04.svg";
import PartnerSVG5 from "../../assets/images/svg/partner/Untitled-1-05.svg";
import PartnerSVG6 from "../../assets/images/svg/partner/Untitled-1-06.svg";
import PartnerSVG7 from "../../assets/images/svg/partner/Untitled-1-07.svg";
import PartnerSVG8 from "../../assets/images/svg/partner/Untitled-1-08.svg";
import PartnerSVG9 from "../../assets/images/svg/partner/Untitled-1-09.svg";
import PartnerSVG10 from "../../assets/images/svg/partner/Untitled-1-10.svg";
import PartnerSVG11 from "../../assets/images/svg/partner/Untitled-1-11.svg";
import PartnerSVG12 from "../../assets/images/svg/partner/Untitled-1-12.svg";
import PartnerSVG14 from "../../assets/images/svg/partner/Untitled-1-14.svg";

const BrandScroll = ({ homePage }) => {
   const [activeDot, setActiveDot] = useState(0);
   const scrollWrapperRef = useRef(null);
   const scrollWrapperContentRef = useRef(null);
   const [isMouseDown, setIsMouseDown] = useState(false);
   const [mouseMoveX, setMouseMoveX] = useState(0);

   const getCurrentTranslateX = (scrollWrapperContent) => {
      const style = window.getComputedStyle(scrollWrapperContent);
      const transform = style.getPropertyValue("transform");
      if (transform && transform !== "none") {
         // Extracting the translateX value from the transform property
         const matrix = new DOMMatrixReadOnly(transform);
         return matrix.m41; // m41 is the translation in X direction
      }
   };

   const handleMouseDown = (e) => {
      setIsMouseDown(true);
      setMouseMoveX(e.clientX);
   };

   const handleMouseUp = (e) => {
      setIsMouseDown(false);
   };

   const handleMouseLeave = (e) => {
      setIsMouseDown(false);
   };

   const handleMouseMove = (e) => {
      if (isMouseDown) {
         scrollWrapperContentRef.current.style.transition = "none";
         let newMouseMoveX = e.clientX;
         let translateX =
            newMouseMoveX -
            mouseMoveX +
            getCurrentTranslateX(scrollWrapperContentRef.current);
         const minTranslateX =
            scrollWrapperRef.current.offsetWidth -
            scrollWrapperContentRef.current.offsetWidth;
         if (translateX >= minTranslateX && translateX <= 0) {
            scrollWrapperContentRef.current.style.transform = `translateX(${translateX}px)`;
         }

         setMouseMoveX(newMouseMoveX);
      }
   };

   const handleActivateDot = (index) => {
      if (index !== activeDot) {
         setActiveDot(index);
         let distance =
            scrollWrapperContentRef.current.offsetWidth -
            scrollWrapperRef.current.offsetWidth;
         scrollWrapperContentRef.current.style.transition =
            "transform 1s ease-in-out";
         scrollWrapperContentRef.current.style.transform = `translateX(${
            activeDot === 0 ? -distance : 0
         }px)`;
      }
   };

   useEffect(() => {
      const items = document.querySelectorAll(".scroll-wrapper__content-item");
      if (!homePage) {
         items.forEach((item) => {
            let images = item.querySelectorAll("img");

            images[0].style.setProperty(
               "margin-bottom",
               "1.875rem",
               "important"
            );

            images[1]?.style.setProperty(
               "margin-top",
               "1.875rem",
               "important"
            );
         });
      }
   }, [homePage]);


   return (
      <div
         className="scroll-wrapper"
         ref={scrollWrapperRef}
         onMouseDown={(e) => handleMouseDown(e)}
         onMouseUp={(e) => handleMouseUp(e)}
         onMouseLeave={(e) => handleMouseLeave(e)}
         onMouseMove={(e) => handleMouseMove(e)}
      >
         <div
            className="scroll-wrapper__content align-items-start"
            ref={scrollWrapperContentRef}
         >
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG1}
                  alt="partner-01"
                  style={{
                     marginBottom: homePage ? "0" : `1.875rem`,
                  }}
               />

               <Image
                  src={PartnerSVG2}
                  alt="partner-02"
                  style={{ marginTop: homePage ? "0" : "1.875rem" }}
               />
            </div>
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG3}
                  alt="partner-03"
                  style={{
                     marginBottom: homePage ? "0" : "1.875rem",
                  }}
               />

               <Image
                  src={PartnerSVG4}
                  alt="partner-04"
                  style={{ marginTop: homePage ? "0" : "1.875rem" }}
               />
            </div>
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG5}
                  alt="partner-05"
                  style={{
                     marginBottom: homePage ? "0" : "1.875rem",
                  }}
               />
               <Image
                  src={PartnerSVG6}
                  alt="partner-06"
                  style={{ marginTop: homePage ? "0" : "1.875rem" }}
               />
            </div>
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG7}
                  alt="partner-07"
                  style={{
                     marginBottom: homePage ? "0" : "1.875rem",
                  }}
               />
               <Image
                  src={PartnerSVG8}
                  alt="partner-08"
                  style={{ marginTop: homePage ? "0" : "1.875rem" }}
               />
            </div>
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG9}
                  alt="partner-09"
                  style={{
                     marginBottom: homePage ? "0" : "1.875rem",
                  }}
               />
               <Image
                  src={PartnerSVG10}
                  alt="partner-10"
                  style={{ marginTop: homePage ? "0" : "1.875rem" }}
               />
            </div>
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG11}
                  alt="partner-11"
                  style={{
                     marginBottom: homePage ? "0" : "1.875rem",
                  }}
               />
               <Image
                  src={PartnerSVG12}
                  alt="partner-12"
                  style={{ marginTop: homePage ? "0" : "1.875rem" }}
               />
            </div>
            <div
               className={`scroll-wrapper__content-item d-flex ${
                  !homePage ? "flex-column" : ""
               }`}
            >
               <Image
                  src={PartnerSVG14}
                  alt="partner-14"
                  style={{
                     marginBottom: homePage ? "0" : "1.875rem",
                  }}
               />
            </div>
         </div>
         <div className="dots">
            <div
               className={`dot ${activeDot === 0 ? "active" : ""}`}
               onClick={() => {
                  handleActivateDot(0);
               }}
            ></div>
            <div
               className={`dot ${activeDot === 1 ? "active" : ""}`}
               onClick={() => {
                  handleActivateDot(1);
               }}
            ></div>
         </div>
      </div>
   );
};

export default BrandScroll;
