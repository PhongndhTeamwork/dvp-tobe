import "./brand-scroll.css";

import { Image } from "react-bootstrap";
import { useState, useRef, useEffect, useMemo } from "react";
import axios from "axios";

const BrandScroll = ({ homePage }) => {
   const preApi = useMemo(() => {
      return process.env.NODE_ENV === "production"
         ? process.env.REACT_APP_BASE_IMAGE_URL
         : "";
   }, []);
   const [activeDot, setActiveDot] = useState(0);
   const scrollWrapperRef = useRef(null);
   const scrollWrapperContentRef = useRef(null);
   const [isMouseDown, setIsMouseDown] = useState(false);
   const [mouseMoveX, setMouseMoveX] = useState(0);
   const [isMobile, setIsMobile] = useState(false);

   const [partners, setPartners] = useState({});

   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         if (width < 768) {
            setIsMobile(true);
         }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   useEffect(() => {
      axios
         .get(preApi + "/api/info/partners")
         .then(({ data }) => {
            setPartners(data.partners);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, [preApi]);

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
            if (isMobile) {
               images[1]?.style.setProperty(
                  "margin-top",
                  "3rem",
                  "important"
               );
            } else
               images[1]?.style.setProperty(
                  "margin-top",
                  "1.875rem",
                  "important"
               );
         });
      }
   }, [homePage, isMobile, partners]);

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
                           src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${
                              partners[2 * slideIndex]?.image
                           }`}
                           alt="partner-01"
                           style={{
                              marginBottom: homePage ? "0" : `1.875rem`,
                           }}
                        />
                        {2 * slideIndex + 1 <= partners?.length - 1 ? (
                           <Image
                              src={`${process.env.REACT_APP_BASE_IMAGE_URL}/${
                                 partners[2 * slideIndex + 1]?.image
                              }`}
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
