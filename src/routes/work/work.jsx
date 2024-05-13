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

   const [activeCategory, setActiveCategory] = useState("all");
   const [activeFilter, setActiveFilter] = useState(0);

   const handleAllCategoriesClick = () => {
      setActiveCategory("all");
   };

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
   };

   const handleFilterClick = (index) => {
      setActiveFilter(index);
   };

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <Fragment>
         {/* <!-- Work --> */}
         <div className="wrapper wrapper-top wrapper-bottom work">
            <div className="wrapper__header cursor-default">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Câu chuyện chúng tôi kể
               </h1>
            </div>

            <div className="work__des rectangle-100 rectangle-pc-50 ms-0 p-0">
               <p className="work__des-text m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </p>
            </div>

            <nav className="work__nav">
               <div className="nav-category">
                  <button
                     id="all-categories"
                     className={`nav-category__btn ${
                        activeCategory === "all" ? "active" : ""
                     }`}
                     onClick={handleAllCategoriesClick}
                  >
                     Tất cả
                  </button>
                  <button
                     id="categories"
                     className={`nav-category__btn ${
                        activeCategory !== "all" ? "active" : ""
                     }`}
                     onClick={() => {
                        handleCategoryClick("categories");
                     }}
                  >
                     Thể loại
                  </button>
               </div>

               <div className="w-100 nav-filter-wrapper">
                  <div
                     className="nav-filter"
                     id="filter"
                     style={{
                        visibility:
                           activeCategory !== "all" ? "visible" : "hidden",
                     }}
                  >
                     {filterItems.map((filterItem, index) => {
                        return (
                           <div
                              key={index}
                              className={`nav-filter__item ${
                                 activeFilter === index + 1 ? "active" : ""
                              }`}
                              onClick={() => handleFilterClick(index + 1)}
                           >
                              {filterItem}
                           </div>
                        );
                     })}
                     {/* <div className="nav-filter__item">Quay dựng thiết kế video</div> 
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>
                    <div className="nav-filter__item">Quay dựng thiết kế video</div>  */}
                  </div>
               </div>
            </nav>

            <div className="work__content">
               <div className="wrapper-flex">
                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
                     <div className="rectangle-100">
                        <Link
                           className="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div className="img-grayscale">
                                 <Image
                                    src={RamenImage}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>

                     <div className="rectangle-100">
                        <Link
                           className="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div className="img-grayscale">
                                 <Image
                                    src={ProjectImage1}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25 p-0">
                     <div className="rectangle-100">
                        <Link
                           className="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div className="img-grayscale">
                                 <Image
                                    src={ProjectImage2}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>

                     <div className="rectangle-100">
                        <Link
                           className="project img-grayscale-hover arrow-right-translate-hover d-block"
                           to="/cataloge"
                        >
                           <Fragment>
                              <div className="img-grayscale">
                                 <Image
                                    src={ProjectImage3}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, textef
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Fragment>
                        </Link>
                     </div>
                  </div>

                  <div className="rectangle-100 rectangle-pc-50">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={RamenImage}
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div className="project__des-icon">
                                 <div className="arrow-right-translate">
                                    <div className="arrow-right-translate__line"></div>
                                    <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>
               </div>

               <div className="wrapper-flex top">
                  <div className="rectangle-100 rectangle-pc-75">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={ProjectImage6}
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit.
                              </div>

                              <div className="project__des-icon">
                                 <div className="arrow-right-translate">
                                    <div className="arrow-right-translate__line"></div>
                                    <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div className="rectangle-100 rectangle-pc-25 order-tab-1 order-pc-0">
                     <div className="wrapper-flex">
                        <div className="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                           <Link
                              className="project img-grayscale-hover arrow-right-translate-hover d-block"
                              to="/cataloge"
                           >
                              <Fragment>
                                 <div className="img-grayscale">
                                    <Image
                                       src={RamenImage}
                                       alt="black and white image"
                                    />
                                 </div>

                                 <div className="project__des">
                                    <div className="project__des-text">
                                       Lorem Ipsum dolor sit amet, textef
                                    </div>

                                    <div className="project__des-icon">
                                       <div className="arrow-right-translate">
                                          <div className="arrow-right-translate__line"></div>
                                          <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                       </div>
                                    </div>
                                 </div>
                              </Fragment>
                           </Link>
                        </div>

                        <div className="rectangle-100 rectangle-tab-50 rectangle-pc-100">
                           <Link
                              className="project img-grayscale-hover arrow-right-translate-hover d-block"
                              to="/cataloge"
                           >
                              <Fragment>
                                 <div className="img-grayscale">
                                    <Image
                                       src={RamenImage}
                                       alt="black and white image"
                                    />
                                 </div>

                                 <div className="project__des">
                                    <div className="project__des-text">
                                       Lorem Ipsum dolor sit amet, textef
                                    </div>

                                    <div className="project__des-icon">
                                       <div className="arrow-right-translate">
                                          <div className="arrow-right-translate__line"></div>
                                          <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                       </div>
                                    </div>
                                 </div>
                              </Fragment>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="wrapper-flex top">
                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={ProjectImage2}
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div className="project__des-icon">
                                 <div className="arrow-right-translate">
                                    <div className="arrow-right-translate__line"></div>
                                    <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={ProjectImage3}
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div className="project__des-icon">
                                 <div className="arrow-right-translate">
                                    <div className="arrow-right-translate__line"></div>
                                    <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={ProjectImage4}
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div className="project__des-icon">
                                 <div className="arrow-right-translate">
                                    <div className="arrow-right-translate__line"></div>
                                    <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                 </div>
                              </div>
                           </div>
                        </Fragment>
                     </Link>
                  </div>

                  <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                     <Link
                        className="project img-grayscale-hover arrow-right-translate-hover d-block"
                        to="/cataloge"
                     >
                        <Fragment>
                           <div className="img-grayscale">
                              <Image
                                 src={ProjectImage5}
                                 alt="black and white image"
                              />
                           </div>

                           <div className="project__des">
                              <div className="project__des-text">
                                 Lorem Ipsum dolor sit amet, textef
                              </div>

                              <div className="project__des-icon">
                                 <div className="arrow-right-translate">
                                    <div className="arrow-right-translate__line"></div>
                                    <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
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
            <div class="rectangle-100 d-none d-md-block d-xl-none text-center quote__heading-top">
               Để lại thông tin của bạn
            </div>

            <div class="rectangle-100 py-0">
               <div class="wrapper-flex">
                  <div class="wrapper-flex-item d-none d-md-block rectangle-tab-50 p-0">
                     <div class="quote">
                        <div class="quote__heading d-none d-xl-block">
                           Để lại thông tin của bạn
                        </div>

                        <div class="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon1} alt="icon 1" />
                           <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                           </p>
                        </div>
                        <div class="quote__text d-flex justify-content-between align-items-start">
                           <Image src={ContactIcon2} alt="icon 2" />
                           <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="wrapper-flex-item rectangle-100 rectangle-tab-50 p-0">
                     <ContactForm />
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Contact form --> */}

         {/* <!-- Partners --> */}
         <div className="partners">
            <div className="wrapper">
               <div className="scroll-wrapper">
                  <div className="scroll-wrapper__content align-items-start">
                     <div className="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG1} alt="partner-01" />
                        <Image src={PartnerSVG2} alt="partner-02" />
                     </div>
                     <div className="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG3} alt="partner-03" />
                        <Image src={PartnerSVG4} alt="partner-04" />
                     </div>
                     <div className="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG5} alt="partner-05" />
                        <Image src={PartnerSVG6} alt="partner-06" />
                     </div>
                     <div className="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG7} alt="partner-07" />
                        <Image src={PartnerSVG8} alt="partner-08" />
                     </div>
                     <div className="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG9} alt="partner-09" />
                        <Image src={PartnerSVG10} alt="partner-10" />
                     </div>
                     <div className="scroll-wrapper__content-item d-flex">
                        <Image src={PartnerSVG11} alt="partner-11" />
                        <Image src={PartnerSVG12} alt="partner-12" />
                     </div>
                     <div className="scroll-wrapper__content-item d-flex">
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
      </Fragment>
   );
};

export default Work;
