import "./brand-scroll.css";

import { Image } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

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

   const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

   const [partners, setPartners] = useState({});

   useEffect(() => {
      axios
         .get("/api/info/partners")
         .then(({ data }) => {
            setPartners(data.partners);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

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

            images[1]?.style.setProperty("margin-top", "1.875rem", "important");
         });
      }
   }, [homePage, partners]);

   return (
      <div className={homePage ? "" : "wrapper partners__content"}>
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
               {Array(Math.ceil((partners?.length || 0) / 2))
                  .fill()
                  .map((_, slideIndex) => (
                     <div
                        className={`scroll-wrapper__content-item d-flex ${
                           !homePage ? "flex-column" : ""
                        }`}
                        key={slideIndex}
                     >
                        <Image
                           src={
                              urlRegex.test(partners[2 * slideIndex]?.image)
                                 ? partners[2 * slideIndex]?.image
                                 : PartnerSVG1
                           }
                           alt="partner-01"
                           style={{
                              marginBottom: homePage ? "0" : `1.875rem`,
                           }}
                        />
                        {2 * slideIndex + 1 <= partners?.length - 1 ? (
                           <Image
                              src={
                                 urlRegex.test(
                                    partners[2 * slideIndex + 1]?.image
                                 )
                                    ? partners[2 * slideIndex + 1]?.image
                                    : PartnerSVG2
                              }
                              alt="partner-02"
                              style={{
                                 marginTop: homePage ? "0" : "1.875rem",
                              }}
                           />
                        ) : (
                           ""
                        )}
                     </div>
                  ))}
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
      </div>
   );
};

export default BrandScroll;
