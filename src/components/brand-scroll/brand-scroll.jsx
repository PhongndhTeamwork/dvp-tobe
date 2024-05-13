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

const BrandScroll = () => {
   return (
      <div className="scroll-wrapper">
         <div className="scroll-wrapper__content align-items-start">
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG1} alt="partner-01" />
               <Image src={PartnerSVG2} alt="partner-02" />
            </div>
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG3} alt="partner-03" />
               <Image src={PartnerSVG4} alt="partner-04" />
            </div>
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG5} alt="partner-05" />
               <Image src={PartnerSVG6} alt="partner-06" />
            </div>
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG7} alt="partner-07" />
               <Image src={PartnerSVG8} alt="partner-08" />
            </div>
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG9} alt="partner-09" />
               <Image src={PartnerSVG10} alt="partner-10" />
            </div>
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG11} alt="partner-11" />
               <Image src={PartnerSVG12} alt="partner-12" />
            </div>
            <div className="scroll-wrapper__content-item d-flex flex-column">
               <Image src={PartnerSVG14} alt="partner-14" />
            </div>
         </div>
      </div>
   );
};

export default BrandScroll;
