import "./work.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import RamenImage from "../../assets/images/others/ramen.png";
import ProjectImage1 from "../../assets/images/projects/project-1.png";
import ProjectImage2 from "../../assets/images/projects/project-2.jpg";
import ProjectImage3 from "../../assets/images/projects/project-3.jpg";
import ProjectImage4 from "../../assets/images/projects/project-4.jpg";
import ProjectImage5 from "../../assets/images/projects/project-5.jpg";
import ProjectImage6 from "../../assets/images/projects/project-6.png";
import ContactIcon1 from "../../assets/images/contact/contact_icon1.png";
import ContactIcon2 from "../../assets/images/contact/contact_icon2.png";
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

import ContactForm from "../../components/contact-form/contact-form";

const Work = () => {
   const filterItems = [
      "Nhận diện thương hiệu",
      "POD Design",
      "Quay dựng thiết kế video",
   ];

   const [showAllCategories, setShowAllCategories] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <Fragment>
         {/* <!-- Work --> */}
         <div class="wrapper wrapper-top wrapper-bottom work">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  Câu chuyện chúng tôi kể
               </h1>
            </div>

            <div class="work__des rectangle-100 rectangle-pc-50 ms-0 p-0">
               <p class="work__des-text m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>

            <nav class="work__nav">
               <div class="nav-category">
                  <button id="all-categories" class="nav-category__btn active">
                     Tất cả
                  </button>
                  <button id="categories" class="nav-category__btn">
                     Thể loại
                  </button>
               </div>

               <div class="w-100 nav-filter-wrapper">
                  <div class="nav-filter" id="filter">
                     {filterItems.map((filterItem, index) => {
                        return (
                           <div key={index} class="nav-filter__item">
                              {filterItem}
                           </div>
                        );
                     })}
                     {/* <div class="nav-filter__item">Quay dựng thiết kế video</div> 
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>
                    <div class="nav-filter__item">Quay dựng thiết kế video</div>  */}
                  </div>
               </div>
            </nav>

            <div class="work__content">
               <div class="wrapper-flex">
                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
                     <div class="rectangle-100">
                        <Link
                           class="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div class="img-grayscale">
                                 <Image
                                    src={RamenImage}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                     <div class="rectangle-100">
                        <Link
                           class="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div class="img-grayscale">
                                 <Image
                                    src={ProjectImage1}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
                     <div class="rectangle-100">
                        <Link
                           class="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div class="img-grayscale">
                                 <Image
                                    src={ProjectImage2}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                     <div class="rectangle-100">
                        <Link
                           class="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div class="img-grayscale">
                                 <Image
                                    src={ProjectImage3}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                  </div>

                  <div class="rectangle-100 rectangle-pc-50">
                     <Link
                        class="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div class="img-grayscale">
                              <Image
                                 src={RamenImage}
                                 alt="black and white image"
                              />
                           </div>

                           <div class="project__des">
                              <div class="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div class="project__des-icon">
                                 <div class="arrow-right-translate">
                                    <div class="arrow-right-translate__line"></div>
                                    <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>
               </div>

               <div class="wrapper-flex top">
                  <div class="rectangle-100 rectangle-pc-75">
                     <Link
                        class="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div class="img-grayscale">
                              <Image
                                 src={ProjectImage6}
                                 alt="black and white image"
                              />
                           </div>

                           <div class="project__des">
                              <div class="project__des-text">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit.
                              </div>

                              <div class="project__des-icon">
                                 <div class="arrow-right-translate">
                                    <div class="arrow-right-translate__line"></div>
                                    <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div class="rectangle-100 rectangle-pc-25 order-tab-1 order-pc-0">
                     <div class="wrapper-flex">
                        <div class="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                           <Link
                              class="project img-grayscale-hover arrow-right-translate-hover d-block"
                              to="/cataloge"
                           >
                              <Fragment>
                                 <div class="img-grayscale">
                                    <Image
                                       src={RamenImage}
                                       alt="black and white image"
                                    />
                                 </div>

                                 <div class="project__des">
                                    <div class="project__des-text">
                                       Lorem Ipsum dolor sit amet, textef
                                    </div>

                                    <div class="project__des-icon">
                                       <div class="arrow-right-translate">
                                          <div class="arrow-right-translate__line"></div>
                                          <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                       </div>
                                    </div>
                                 </div>
                              </Fragment>
                           </Link>
                        </div>
                        <div class="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                           <Link
                              class="project img-grayscale-hover arrow-right-translate-hover d-block"
                              to="/cataloge"
                           >
                              <Fragment>
                                 <div class="img-grayscale">
                                    <Image
                                       src={RamenImage}
                                       alt="black and white image"
                                    />
                                 </div>

                                 <div class="project__des">
                                    <div class="project__des-text">
                                       Lorem Ipsum dolor sit amet, textef
                                    </div>

                                    <div class="project__des-icon">
                                       <div class="arrow-right-translate">
                                          <div class="arrow-right-translate__line"></div>
                                          <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                       </div>
                                    </div>
                                 </div>
                              </Fragment>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="wrapper-flex top">
                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        class="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div class="img-grayscale">
                              <Image
                                 src={ProjectImage2}
                                 alt="black and white image"
                              />
                           </div>

                           <div class="project__des">
                              <div class="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div class="project__des-icon">
                                 <div class="arrow-right-translate">
                                    <div class="arrow-right-translate__line"></div>
                                    <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        class="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div class="img-grayscale">
                              <Image
                                 src={ProjectImage3}
                                 alt="black and white image"
                              />
                           </div>

                           <div class="project__des">
                              <div class="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div class="project__des-icon">
                                 <div class="arrow-right-translate">
                                    <div class="arrow-right-translate__line"></div>
                                    <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        class="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div class="img-grayscale">
                              <Image
                                 src={ProjectImage4}
                                 alt="black and white image"
                              />
                           </div>

                           <div class="project__des">
                              <div class="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div class="project__des-icon">
                                 <div class="arrow-right-translate">
                                    <div class="arrow-right-translate__line"></div>
                                    <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        class="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div class="img-grayscale">
                              <Image
                                 src={ProjectImage5}
                                 alt="black and white image"
                              />
                           </div>

                           <div class="project__des">
                              <div class="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div class="project__des-icon">
                                 <div class="arrow-right-translate">
                                    <div class="arrow-right-translate__line"></div>
                                    <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Work --> */}

         {/* <!-- Contact form --> */}
         <div class="wrapper wrapper-top wrapper-bottom contact">
            <div class="quote__heading-tab">Để lại thông tin của bạn</div>

            <div class="d-flex justify-content-between align-items-start">
               <div class="quote">
                  <div class="quote__heading">Để lại thông tin của bạn</div>

                  <div class="quote__text d-flex justify-content-between align-items-start">
                     <Image src={ContactIcon1} alt="icon 1" />
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                  </div>
                  <div class="quote__text d-flex justify-content-between align-items-start">
                     <Image src={ContactIcon2} alt="icon 2" />
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                  </div>
               </div>

               <ContactForm />
            </div>
         </div>
         {/* <!-- End: Contact form --> */}

         {/* <!-- Partners --> */}
         <div class="partners">
            <div class="wrapper">
               <div class="scroll-wrapper">
                  <div class="scroll-wrapper__content align-items-start">
                     <div class="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG1} alt="partner-01" />
                        <Image src={PartnerSVG2} alt="partner-02" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG3} alt="partner-03" />
                        <Image src={PartnerSVG4} alt="partner-04" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG5} alt="partner-05" />
                        <Image src={PartnerSVG6} alt="partner-06" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG7} alt="partner-07" />
                        <Image src={PartnerSVG8} alt="partner-08" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG9} alt="partner-09" />
                        <Image src={PartnerSVG10} alt="partner-10" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG11} alt="partner-11" />
                        <Image src={PartnerSVG12} alt="partner-12" />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
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
      </Fragment>
   );
};

export default Work;
