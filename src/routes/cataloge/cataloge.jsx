import "./cataloge.css";
import { Fragment, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cataloge1 from "../../assets/images/cateloge/cataloge1.png";
import Cataloge2 from "../../assets/images/cateloge/cataloge2.png";
import Cataloge3 from "../../assets/images/cateloge/cataloge3.png";
import Cataloge4 from "../../assets/images/cateloge/cataloge4.png";
import Cataloge5 from "../../assets/images/cateloge/cataloge5.png";
import Cataloge6 from "../../assets/images/cateloge/cataloge6.png";
import CatalogeProjectImage1 from "../../assets/images/cateloge/project-1.png";
import CatalogeProjectImage2 from "../../assets/images/cateloge/project-2.jpg";
import CatalogeProjectImage3 from "../../assets/images/cateloge/project-3.jpg";
import CatalogeProjectImage4 from "../../assets/images/cateloge/project-4.jpg";
import CatalogeProjectImage5 from "../../assets/images/cateloge/project-5.jpg";
import RamenImage from "../../assets/images/others/ramen.png";

const Cataloge = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <Fragment>
         {/* <!-- Project --> */}
         <div class="wrapper wrapper-top wrapper-bottom project">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  Web design project
               </h4>
               <h1 class="wrapper__header-heading">
                  Dự án xây dựng website <br /> BUMN INDO
               </h1>
               <h4 class="project__sub-heading">
                  Web design<span class="line"></span>2024
               </h4>
            </div>

            <div class="wrapper-flex">
               <Image class="img-1 rectangle-100" src={Cataloge1} alt="" />
            </div>

            <div class="wrapper-flex project__des">
               <div class="rectangle-100 project__des-title">
                  Almost before...
               </div>

               <div class="rectangle-100 rectangle-tab-50 project__des-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </div>

               <div class="rectangle-100 rectangle-tab-50 project__des-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
               </div>
            </div>

            <div class="wrapper-flex">
               <div class="rectangle-100">
                  <Image class="w-100 img-1" src={Cataloge2} alt="" />
               </div>
               <div class="rectangle-100 rectangle-tab-50">
                  <Image class="w-100 img-2" src={Cataloge3} alt="" />
               </div>
               <div class="rectangle-100 rectangle-tab-50">
                  <Image class="w-100 img-2" src={Cataloge4} alt="" />
               </div>
               <div class="rectangle-100">
                  <Image class="w-100 img-1" src={Cataloge5} alt="" />
               </div>
               <div class="rectangle-100 rectangle-tab-50">
                  <Image class="w-100 img-3" src={Cataloge6} alt="" />
               </div>
               <div class="rectangle-100 rectangle-tab-50 wrapper-flex m-0 p-0">
                  <div class="rectangle-100">
                     <Image class="w-100 img-2" src={Cataloge3} alt="" />
                  </div>
                  <div class="rectangle-100">
                     <Image class="w-100 img-2" src={Cataloge4} alt="" />
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Project --> */}

         {/* <!-- Project info --> */}
         <div class="wrapper wrapper-top wrapper-bottom project-info">
            <div class="wrapper-flex">
               <div class="rectangle-100 rectangle-pc-33">
                  <h2 class="project-info__heading">Thông tin dự án</h2>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-33">
                  <div class="project__info-customer">
                     <h6 class="title">Khách hàng</h6>
                     <h4 class="name text-uppercase">BUMN INDO</h4>
                  </div>
                  <div class="project__info-category">
                     <h6 class="title">Thể loại</h6>
                     <h4 class="name text-uppercase">Web design</h4>
                  </div>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-33">
                  <div class="project__info-date">
                     <h6 class="title">Năm hoàn thành</h6>
                     <h4 class="name text-uppercase" id="project-complete-date">
                        01/01/2024
                     </h4>
                  </div>
                  <div class="project__info-more">
                     <h6 class="title">Xem thêm tại</h6>
                     <Link to="" class="name text-uppercase project-link">
                        BUMNINDO.COM{" "}
                        <i class="fa-solid fa-arrow-right-long"></i>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Project info --> */}

         <div class="suggestion wrapper">
            <div class="suggestion__header">
               <div class="suggestion__header-heading">Các dự án khác</div>

               <div class="suggestion__header-control d-flex">
                  <button
                     class="button-pre"
                     type="button"
                     data-bs-target="#suggestion-project"
                     data-bs-slide="prev"
                  >
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
                  <button
                     class="button-next"
                     type="button"
                     data-bs-target="#suggestion-project"
                     data-bs-slide="next"
                  >
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

            <div class="suggestion__content">
               <div id="suggestion-project" class="carousel slide">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="wrapper-flex">
                           <a
                              class="rectangle-100 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="./cataloge.html"
                           >
                              <div class="project__img">
                                 <Image
                                    src={CatalogeProjectImage1}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </a>

                           <a
                              class="rectangle-0 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="./cataloge.html"
                           >
                              <div class="project__img">
                                 <Image
                                    src={CatalogeProjectImage2}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </a>

                           <a
                              class="rectangle-0 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="./cataloge.html"
                           >
                              <div class="project__img">
                                 <Image
                                    src={CatalogeProjectImage3}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </a>

                           <a
                              class="rectangle-0 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="./cataloge.html"
                           >
                              <div class="project__img">
                                 <Image
                                    src={CatalogeProjectImage4}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>

                     <div class="carousel-item">
                        <div class="wrapper-flex">
                           <a
                              class="rectangle-100 rectangle-tab-50 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="./cataloge.html"
                           >
                              <div class="project__img">
                                 <Image
                                    src={CatalogeProjectImage5}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </a>

                           <a
                              class="rectangle-0 rectangle-tab-50 rectangle-pc-25 rectangle-pc-25 project arrow-right-translate-hover d-block"
                              href="./cataloge.html"
                           >
                              <div class="project__img">
                                 <Image
                                    src={RamenImage}
                                    alt="black and white image"
                                 />
                              </div>

                              <div class="project__des">
                                 <div class="project__des-text">
                                    Lorem Ipsum dolor sit amet, Lorem Ipsum
                                    dolor sit amet, ipsum
                                 </div>

                                 <div class="project__des-icon">
                                    <div class="arrow-right-translate">
                                       <div class="arrow-right-translate__line"></div>
                                       <div class="arrow-right-translate__right fa-solid fa-angle-right"></div>
                                    </div>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Cataloge;
