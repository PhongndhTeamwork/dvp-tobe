import { Fragment } from "react";
import "./about.css";
import { Image } from "react-bootstrap";
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


const About = () => {
   return (
      <Fragment>
         <div class="banner">
            <div class="banner__bg">
               <div class="banner__bg-eclipse1"></div>
               <div class="banner__bg-eclipse2"></div>
               <div class="banner__bg-eclipse3"></div>
            </div>

            <div class="banner__text">
               <div class="text-center">
                  <div class="text-capitalize">Religion flows in the veins</div>
                  <div class="text-capitalize">
                     Creativity is the source of life
                  </div>
                  <div class="text-capitalize">Preserving core values</div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Story --> */}
         <div class="wrapper wrapper-top wrapper-bottom story">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  Câu chuyện về DVP
               </h1>
            </div>

            <div class="wrapper-flex">
               <div class="rectangle-100 rectangle-pc-50 story__content-text">
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

               <div class="rectangle-100 rectangle-pc-50 story__content-img">
                  <Image src={ExOfficeImage} alt="office" />
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div class="wrapper wrapper-top wrapper-bottom expertise">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The mottos
               </h4>
               <h1 class="wrapper__header-heading">Phương châm cốt lõi</h1>
            </div>

            <div class="expertise__content">
               <div class="service">
                  <div class="accordion" id="accordion-service-1">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-1"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>Sáng tạo là không giới hạn</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-1"
                           data-bs-parent="#accordion-service-1"
                        >
                           <div class="accordion-body d-flex justify-content-end">
                              <div class="service__content">
                                 <p class="service__content-text text-end">
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

               <div class="service">
                  <div class="accordion" id="accordion-service-2">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-2"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>Giá trị cốt lõi</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-2"
                           data-bs-parent="#accordion-service-2"
                        >
                           <div class="accordion-body d-flex justify-content-end">
                              <div class="service__content">
                                 <p class="service__content-text text-end">
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

               <div class="service">
                  <div class="accordion" id="accordion-service-3">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-3"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>Lắng nghe khách hàng</h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-3"
                           data-bs-parent="#accordion-service-3"
                        >
                           <div class="accordion-body d-flex justify-content-end">
                              <div class="service__content">
                                 <p class="service__content-text text-end">
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

               <div class="service">
                  <div class="accordion" id="accordion-service-4">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-4"
                        >
                           <div
                              class="d-flex align-items-center justify-content-between w-100 h-100"
                              style={{ cursor: "pointer" }}
                           >
                              <div class="accordion-item__icon-left">
                                 <div class="circle-rotate-icon">
                                    <div class="circle-icon"></div>
                                 </div>
                              </div>

                              <div class="accordion-item__content">
                                 <h4>
                                    Almost before we knew it, we had left the
                                    ground.
                                 </h4>
                              </div>

                              <div class="accordion-item__icon-right">
                                 <div class="plus-rotate-icon">
                                    <i class="left"></i>
                                    <i class="right"></i>
                                 </div>
                              </div>
                           </div>
                        </button>

                        <div
                           class="accordion-collapse collapse"
                           id="collapse-service-4"
                           data-bs-parent="#accordion-service-4"
                        >
                           <div class="accordion-body d-flex justify-content-end">
                              <div class="service__content">
                                 <p class="service__content-text text-end">
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
         <div class="partners">
            <div class="wrapper">
               <div class="partners__header w-100 d-flex flex-column align-items-center">
                  <div class="partners__header-sub-heading text-uppercase">
                     Out value clients
                  </div>
                  <div class="partners__header-heading text-center">
                     Khách hàng của chúng tôi
                  </div>
               </div>

               <div class="scroll-wrapper">
                  <div class="scroll-wrapper__content align-items-start">
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG1} alt="partner-01" />
                        <Image src={PartnerSVG2} alt="partner-02" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG3} alt="partner-03" />
                        <Image src={PartnerSVG4} alt="partner-04" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG5} alt="partner-05" />
                        <Image src={PartnerSVG6} alt="partner-06" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG7} alt="partner-07" />
                        <Image src={PartnerSVG8} alt="partner-08" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG9} alt="partner-09" />
                        <Image src={PartnerSVG10} alt="partner-10" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG11} alt="partner-11" />
                        <Image src={PartnerSVG12} alt="partner-12" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex flex-column">
                        <Image src={PartnerSVG14} alt="partner-14" />
                     </div>
                  </div>
               </div>

               <div class="dosts">
                  <div class="dot active"></div>
                  <div class="dot"></div>
               </div>
            </div>
         </div>
         {/* <!-- End: Partners --> */}

         {/* <!-- Culture --> */}
         <div class="wrapper wrapper-top wrapper-bottom culture">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  DVP Home Library
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  Văn hóa DVP
               </h1>
            </div>

            <div class="culture__des rectangle-100 rectangle-pc-50 p-0 ms-0">
               <p class="culture__des-text m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>

            <div class="culture__img wrapper-flex">
               <div class="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     class="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage2}
                     alt=""
                  />
                  <Image
                     class="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage3}
                     alt=""
                  />
               </div>
               <div class="rectangle-100 rectangle-pc-50">
                  <Image src={CultureImage1} alt="" />
               </div>
               <div class="rectangle-100 rectangle-pc-25 wrapper-flex m-0 p-0">
                  <Image
                     class="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage4}
                     alt=""
                  />
                  <Image
                     class="rectangle-100 rectangle-tab-50 rectangle-pc-100"
                     src={CultureImage5}
                     alt=""
                  />
               </div>
            </div>
         </div>
         {/* <!-- End: Culture --> */}

         {/* <!-- Staff --> */}
         <div class="wrapper wrapper-top wrapper-bottom staff">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  Resources staff
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  Đội ngũ nhân sự
               </h1>
            </div>

            <div class="wrapper-flex staff__content">
               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <div class="staff__content-item">
                     <div class="content">
                        <Image src={Avatar1} alt="avatar" />

                        <div class="staff__des">
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">30 tuổi - độc thân</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">CEO - Art Director</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">
                                 "Không làm thì thôi, đã làm là phải giỏi nhất"
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        class="d-flex justify-content-between align-items-start"
                        style={{ cursor: "pointer" }}
                     >
                        <div class="staff__info">
                           <div class="staff__info-pos">UI - UX Designer</div>
                           <div class="staff__info-name text-uppercase">
                              Trần Ngọc Minh
                           </div>
                        </div>

                        <div class="staff__more">
                           <div class="plus-rotate-icon">
                              <i class="left"></i>
                              <i class="right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <div class="staff__content-item">
                     <div class="content">
                        <Image src={Avatar1} alt="avatar" />

                        <div class="staff__des">
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">30 tuổi - độc thân</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">CEO - Art Director</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">
                                 "Không làm thì thôi, đã làm là phải giỏi nhất"
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        class="d-flex justify-content-between align-items-start"
                        style={{ cursor: "pointer" }}
                     >
                        <div class="staff__info">
                           <div class="staff__info-pos">UI - UX Designer</div>
                           <div class="staff__info-name text-uppercase">
                              Trần Ngọc Minh
                           </div>
                        </div>

                        <div class="staff__more">
                           <div class="plus-rotate-icon">
                              <i class="left"></i>
                              <i class="right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <div class="staff__content-item">
                     <div class="content">
                        <Image src={Avatar1} alt="avatar" />

                        <div class="staff__des">
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">30 tuổi - độc thân</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">CEO - Art Director</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">
                                 "Không làm thì thôi, đã làm là phải giỏi nhất"
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        class="d-flex justify-content-between align-items-start"
                        style={{ cursor: "pointer" }}
                     >
                        <div class="staff__info">
                           <div class="staff__info-pos">UI - UX Designer</div>
                           <div class="staff__info-name text-uppercase">
                              Trần Ngọc Minh
                           </div>
                        </div>

                        <div class="staff__more">
                           <div class="plus-rotate-icon">
                              <i class="left"></i>
                              <i class="right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <div class="staff__content-item">
                     <div class="content">
                        <Image src={Avatar1} alt="avatar" />

                        <div class="staff__des">
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">30 tuổi - độc thân</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">CEO - Art Director</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">
                                 "Không làm thì thôi, đã làm là phải giỏi nhất"
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        class="d-flex justify-content-between align-items-start"
                        style={{ cursor: "pointer" }}
                     >
                        <div class="staff__info">
                           <div class="staff__info-pos">UI - UX Designer</div>
                           <div class="staff__info-name text-uppercase">
                              Trần Ngọc Minh
                           </div>
                        </div>

                        <div class="staff__more">
                           <div class="plus-rotate-icon">
                              <i class="left"></i>
                              <i class="right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <div class="staff__content-item">
                     <div class="content">
                        <Image src={Avatar1} alt="avatar" />

                        <div class="staff__des">
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">30 tuổi - độc thân</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">CEO - Art Director</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">
                                 "Không làm thì thôi, đã làm là phải giỏi nhất"
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        class="d-flex justify-content-between align-items-start"
                        style={{ cursor: "pointer" }}
                     >
                        <div class="staff__info">
                           <div class="staff__info-pos">UI - UX Designer</div>
                           <div class="staff__info-name text-uppercase">
                              Trần Ngọc Minh
                           </div>
                        </div>

                        <div class="staff__more">
                           <div class="plus-rotate-icon">
                              <i class="left"></i>
                              <i class="right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <div class="staff__content-item">
                     <div class="content">
                        <Image src={Avatar1} alt="avatar" />

                        <div class="staff__des">
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">30 tuổi - độc thân</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">CEO - Art Director</div>
                           </div>
                           <div class="staff__des-item">
                              <div class="icon"></div>
                              <div class="text">
                                 "Không làm thì thôi, đã làm là phải giỏi nhất"
                              </div>
                           </div>
                        </div>
                     </div>

                     <div
                        class="d-flex justify-content-between align-items-start"
                        style={{ cursor: "pointer" }}
                     >
                        <div class="staff__info">
                           <div class="staff__info-pos">UI - UX Designer</div>
                           <div class="staff__info-name text-uppercase">
                              Trần Ngọc Minh
                           </div>
                        </div>

                        <div class="staff__more">
                           <div class="plus-rotate-icon">
                              <i class="left"></i>
                              <i class="right"></i>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Staff --></div> */}
      </Fragment>
   );
};

export default About;
