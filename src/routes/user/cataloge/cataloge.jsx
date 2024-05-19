import "./cataloge.css";
import { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

import Cataloge1 from "../../../assets/images/cateloge/cataloge1.png";
import Cataloge2 from "../../../assets/images/cateloge/cataloge2.png";
import Cataloge3 from "../../../assets/images/cateloge/cataloge3.png";
import Cataloge4 from "../../../assets/images/cateloge/cataloge4.png";
import Cataloge5 from "../../../assets/images/cateloge/cataloge5.png";
import Cataloge6 from "../../../assets/images/cateloge/cataloge6.png";
import CatalogeProjectImage1 from "../../../assets/images/cateloge/project-1.png";
import CatalogeProjectImage2 from "../../../assets/images/cateloge/project-2.jpg";
import CatalogeProjectImage3 from "../../../assets/images/cateloge/project-3.jpg";
import CatalogeProjectImage4 from "../../../assets/images/cateloge/project-4.jpg";
import CatalogeProjectImage5 from "../../../assets/images/cateloge/project-5.jpg";
import RamenImage from "../../../assets/images/others/ramen.png";
import CatalogeProject from "../../../components/cataloge-project/cataloge-project";

const Cataloge = () => {
   // const {id} = useParams();
   // console.log(id);
   const [project, setProject] = useState({});
   const [projectSuggestion, setProjectSuggestion] = useState({});
   const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
   const [slideQuantity, setSlideQuantity] = useState(0);
   useEffect(() => {
      const handleResize = () => {
         const width = window.innerWidth;
         if (width < 768) {
            setSlideQuantity(6);
         } else if (width >= 768 && width < 1200) {
            setSlideQuantity(Math.ceil(6 / 2));
         } else {
            setSlideQuantity(Math.ceil(6 / 4));
         }
         setActiveCarouselIndex(0);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const handleNext = () => {
      setActiveCarouselIndex(
         activeCarouselIndex === slideQuantity - 1 ? 0 : activeCarouselIndex + 1
      );
      console.log(activeCarouselIndex);
   };

   const handlePrev = () => {
      setActiveCarouselIndex(
         activeCarouselIndex === 0 ? slideQuantity - 1 : activeCarouselIndex - 1
      );
   };

   useEffect(() => {
      axios
         .get("/api/contact")
         .then(({ data }) => {
            setProject(data.project);
            setProjectSuggestion(data.projectSuggestion);
         })
         .catch((error) => {
            throw new Error(error);
         });
   }, []);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <Fragment>
         {/* <!-- Project --> */}
         <div className="wrapper wrapper-top wrapper-bottom project">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Web design project
               </h4>
               <h1 className="wrapper__header-heading">
                  Dự án xây dựng website <br /> BUMN INDO
               </h1>
               <h4 className="project__sub-heading">
                  Web design<span className="line"></span>2024
               </h4>
            </div>

            <div className="wrapper-flex">
               <Image className="img-1 rectangle-100" src={Cataloge1} alt="" />
            </div>

            <div className="wrapper-flex project__des">
               <div className="rectangle-100 project__des-title">
                  Almost before...
               </div>

               <div className="rectangle-100 rectangle-tab-50 project__des-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </div>

               <div className="rectangle-100 rectangle-tab-50 project__des-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </div>
            </div>

            <div className="wrapper-flex">
               <div className="rectangle-100">
                  <Image className="w-100 img-1" src={Cataloge2} alt="" />
               </div>
               <div className="rectangle-100 rectangle-tab-50">
                  <Image className="w-100 img-2" src={Cataloge3} alt="" />
               </div>
               <div className="rectangle-100 rectangle-tab-50">
                  <Image className="w-100 img-2" src={Cataloge4} alt="" />
               </div>
               <div className="rectangle-100">
                  <Image className="w-100 img-1" src={Cataloge5} alt="" />
               </div>
               <div className="rectangle-100 rectangle-tab-50">
                  <Image className="w-100 img-3" src={Cataloge6} alt="" />
               </div>
               <div className="rectangle-100 rectangle-tab-50 wrapper-flex m-0 p-0">
                  <div className="rectangle-100">
                     <Image className="w-100 img-2" src={Cataloge3} alt="" />
                  </div>
                  <div className="rectangle-100">
                     <Image className="w-100 img-2" src={Cataloge4} alt="" />
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Project --> */}

         {/* <!-- Project info --> */}
         <div className="wrapper wrapper-top wrapper-bottom project-info">
            <div className="wrapper-flex">
               <div className="rectangle-100 rectangle-pc-33">
                  <h2 className="project-info__heading">Thông tin dự án</h2>
               </div>

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-33">
                  <div className="project__info-customer">
                     <h6 className="title">Khách hàng</h6>
                     <h4 className="name text-uppercase">BUMN INDO</h4>
                  </div>
                  <div className="project__info-category">
                     <h6 className="title">Thể loại</h6>
                     <h4 className="name text-uppercase">Web design</h4>
                  </div>
               </div>

               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-33">
                  <div className="project__info-date">
                     <h6 className="title">Năm hoàn thành</h6>
                     <h4
                        className="name text-uppercase"
                        id="project-complete-date"
                     >
                        01/01/2024
                     </h4>
                  </div>
                  <div className="project__info-more">
                     <h6 className="title">Xem thêm tại</h6>
                     <Link to="" className="name text-uppercase project-link">
                        BUMNINDO.COM{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Project info --> */}

         <div className="suggestion wrapper">
            <div className="suggestion__header">
               <div className="suggestion__header-heading">Các dự án khác</div>

               <div className="suggestion__header-control d-flex">
                  <button className="button-pre" type="button" onClick={handlePrev}>
                     <svg
                        width="28"
                        height="13"
                        viewBox="0 0 28 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M2.7999 6.5L7.3999 1.9L5.9999 0.5L-9.77516e-05 6.5L5.9999 12.5L7.3999 11.1L2.7999 6.5Z" />
                        <rect
                           width="27"
                           height="2"
                           transform="matrix(-1 0 0 1 28 5.5)"
                        />
                     </svg>
                  </button>
                  <button className="button-next" type="button" onClick={handleNext}>
                     <svg
                        width="28"
                        height="13"
                        viewBox="0 0 28 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M25.2001 6.5L20.6001 1.9L22.0001 0.5L28.0001 6.5L22.0001 12.5L20.6001 11.1L25.2001 6.5Z" />
                        <rect y="5.5" width="27" height="2" />
                     </svg>
                  </button>
               </div>
            </div>

            <div className="suggestion__content">
               <div id="suggestion-project" className="carousel slide">
                  {/* <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="wrapper-flex">
                           <Link
                              className="rectangle-100 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="/cataloge"
                           >
                              <div className="project__img">
                                 <Image
                                    src={CatalogeProjectImage1}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Link>

                           <Link
                              className="rectangle-0 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="/cataloge"
                           >
                              <div className="project__img">
                                 <Image
                                    src={CatalogeProjectImage2}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Link>

                           <Link
                              className="rectangle-0 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="/cataloge"
                           >
                              <div className="project__img">
                                 <Image
                                    src={CatalogeProjectImage3}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Link>

                           <Link
                              className="rectangle-0 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="/cataloge"
                           >
                              <div className="project__img">
                                 <Image
                                    src={CatalogeProjectImage4}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     </div>

                     <div className="carousel-item">
                        <div className="wrapper-flex">
                           <Link
                              className="rectangle-100 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="/cataloge"
                           >
                              <div className="project__img">
                                 <Image
                                    src={CatalogeProjectImage5}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Link>

                           <Link
                              className="rectangle-0 rectangle-tab-50 rectangle-pc-25 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="/cataloge"
                           >
                              <div className="project__img">
                                 <Image
                                    src={RamenImage}
                                    alt="black and white image"
                                 />
                              </div>

                              <div className="project__des">
                                 <div className="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div className="project__des-icon">
                                    <div className="arrow-right-translate">
                                       <div className="arrow-right-translate__line"></div>
                                       <div className="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div> */}
                  <CatalogeProject activeIndex={activeCarouselIndex} />
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Cataloge;
