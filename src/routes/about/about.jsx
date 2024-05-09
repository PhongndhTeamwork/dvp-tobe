import { Fragment, useEffect } from "react";
import "./about.css";
import { Image } from "react-bootstrap";
import { useState } from "react";
import ExOfficeImage from "../../assets/images/others/ex-office.jpg";
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
import CultureImage1 from "../../assets/images/culture/culture1.png";
import CultureImage2 from "../../assets/images/culture/culture2.png";
import CultureImage3 from "../../assets/images/culture/culture3.png";
import CultureImage4 from "../../assets/images/culture/culture4.png";
import CultureImage5 from "../../assets/images/culture/culture5.png";
import Avatar1 from "../../assets/images/avatar/1.png";
import Avatar2 from "../../assets/images/avatar/2.png";
import Avatar3 from "../../assets/images/avatar/3.png";
import Avatar4 from "../../assets/images/avatar/4.png";
import Avatar5 from "../../assets/images/avatar/5.png";
import Avatar6 from "../../assets/images/avatar/6.png";

const About = () => {
   const staffs = [
      {
         avatar: Avatar1,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar2,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar3,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar4,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar5,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
      {
         avatar: Avatar6,
         description: "30 tuổi - độc thân",
         position: "CEO - Art Director",
         motto: "Không làm thì thôi, đã làm là phải giỏi nhất",
         name: "Trần Ngọc Minh",
         role: "UI - UX Designe",
      },
   ];

   // const [isActive, setIsActive] = useState(false);
   const [staffIndexes, setStaffIndexes] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const toggleActive = (index) => {
      if (staffIndexes.includes(index)) {
         var removalElementIndex = staffIndexes.indexOf(index);
         staffIndexes.splice(removalElementIndex, 1);
         setStaffIndexes([...staffIndexes]);
      } else {
         setStaffIndexes([...staffIndexes, index]);
      }
   };

   return (
      <Fragment>
         {/* <!-- Banner --> */}
         <div className="banner">
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>

            <div className="banner__text">
               <div className="text-center">
                  <div className="text-capitalize">
                     Religion flows in the veins
                  </div>
                  <div className="text-capitalize">
                     Creativity is the source of life
                  </div>
                  <div className="text-capitalize">Preserving core values</div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div className="wrapper wrapper-top wrapper-bottom story">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Câu chuyện về DVP
               </h1>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-50 story__content-text">
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
               </div>

               <div className="rectangle-100 rectangle-pc-50 story__content-img">
                  <Image src={ExOfficeImage} alt="office" />
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div className="wrapper wrapper-top wrapper-bottom expertise">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  The mottos
               </h4>
               <h1 className="wrapper__header-heading">Phương châm cốt lõi</h1>
            </div>

            <div className="expertise__content">
               <div className="service">
                  <div className="accordion" id="accordion-service-1">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-1"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>Sáng tạo là không giới hạn</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-1"
                           data-bs-parent="#accordion-service-1"
                        >
                           <div className="accordion-body d-flex justify-content-end">
                              <div className="service__content">
                                 <p className="service__content-text text-end">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-2">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-2"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>Giá trị cốt lõi</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-2"
                           data-bs-parent="#accordion-service-2"
                        >
                           <div className="accordion-body d-flex justify-content-end">
                              <div className="service__content">
                                 <p className="service__content-text text-end">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-3">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-3"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>Lắng nghe khách hàng</h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-3"
                           data-bs-parent="#accordion-service-3"
                        >
                           <div className="accordion-body d-flex justify-content-end">
                              <div className="service__content">
                                 <p className="service__content-text text-end">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-4">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-4"
                        >
                           <div
                              className="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="accordion-item__icon-left">
                                 <div className="circle-rotate-icon">
                                    <div className="circle-icon"></div>
                                 </div>
                              </div>

                              <div className="accordion-item__content">
                                 <h4>
                                    Almost before we knew it, we had left the
                                    ground.
                                 </h4>
                              </div>

                              <div className="accordion-item__icon-right">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           className="accordion-collapse collapse"
                           id="collapse-service-4"
                           data-bs-parent="#accordion-service-4"
                        >
                           <div className="accordion-body d-flex justify-content-end">
                              <div className="service__content">
                                 <p className="service__content-text text-end">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Expertise --> */}

         {/* <!-- Partners --> */}
         <div className="partners">
            <div className="wrapper">
               <div className="partners__header w-100 d-flex flex-column align-items-center">
                  <div className="partners__header-sub-heading text-uppercase">
                     Out value clients
                  </div>
                  <div className="partners__header-heading text-center">
                     Khách hàng của chúng tôi
                  </div>
               </div>

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

               <div className="dosts">
                  <div className="dot active"></div>
                  <div className="dot"></div>
               </div>
            </div>
         </div>
         {/* <!-- End: Partners --> */}

         {/* <!-- Culture --> */}
         <div className="wrapper wrapper-top wrapper-bottom culture">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  DVP Home Library
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Văn hóa DVP
               </h1>
            </div>

            <div className="culture__des rectangle-100 rectangle-pc-50 p-0 ms-0">
               <p className="culture__des-text m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>

            <div className="culture__img wrapper-flex">
               <div className="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage2}
                     alt=""
                  />
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage3}
                     alt=""
                  />
               </div>
               <div className="rectangle-100 rectangle-pc-50">
                  <Image src={CultureImage1} alt="" />
               </div>
               <div className="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage4}
                     alt=""
                  />
                  <Image
                     className="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage5}
                     alt=""
                  />
               </div>
            </div>
         </div>
         {/* <!-- End: Culture --> */}

         {/* <!-- Staff --> */}
         <div className="wrapper wrapper-top wrapper-bottom staff">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Resources staff
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Đội ngũ nhân sự
               </h1>
            </div>

            <div className="wrapper-flex staff__content">
               {staffs.map((staff, index) => {
                  return (
                     <div
                        key={index}
                        className="rectangle-100 rectangle-tab-50 rectangle-pc-25"
                     >
                        <div
                           className={
                              staffIndexes.includes(index)
                                 ? "staff__content-item active plus-rotate-icon-active"
                                 : "staff__content-item"
                           }
                           onClick={() => toggleActive(index)}
                        >
                           <div className="content">
                              <Image src={staff.avatar} alt="avatar" />

                              <div className="staff__des">
                                 <div className="staff__des-item">
                                    <div className="icon"></div>
                                    <div className="text">
                                       {staff.description}
                                    </div>
                                 </div>
                                 <div className="staff__des-item">
                                    <div className="icon"></div>
                                    <div className="text">{staff.position}</div>
                                 </div>
                                 <div className="staff__des-item">
                                    <div className="icon"></div>
                                    <div className="text">{staff.motto}</div>
                                 </div>
                              </div>
                           </div>

                           <div
                              className="d-flex justify-content-between align-items-start"
                              style={{ cursor: "pointer" }}
                           >
                              <div className="staff__info">
                                 <div className="staff__info-pos">
                                    {staff.role}
                                 </div>
                                 <div className="staff__info-name text-uppercase">
                                    {staff.name}
                                 </div>
                              </div>

                              <div className="staff__more">
                                 <div className="plus-rotate-icon">
                                    <i className="left"></i>
                                    <i className="right"></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         {/* <!-- End: Staff --></div> */}
      </Fragment>
   );
};

export default About;
