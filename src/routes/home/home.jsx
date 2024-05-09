import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { login } from "../../app/features/userLoginSlice";
import { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeVideo from "../../assets/images/others/video-auto.mp4";
import Carousel1 from "../../assets/images/carousel/carousel-1.png";
import Carousel2 from "../../assets/images/carousel/carousel-2.png";
import Carousel3 from "../../assets/images/carousel/carousel-3.png";
import Ramen from "../../assets/images/others/ramen.png";
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
// import PartnerSVG8 from "../../assets/images/svg/partner/Untitled-1-08.svg";

const Home = () => {
   const dispatch = useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   //?Effect
   const videoRef = useRef(null);
   const bannerRef = useRef(null);
   const [isMuted, setIsMuted] = useState(true);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         const bannerHeight = bannerRef.current?.offsetHeight || 0;
         const videoHeight = videoRef.current?.offsetHeight || 0;

         if (scrollY > 0.5 * bannerHeight) {
            videoRef.current.play();
         } else if (
            scrollY > bannerHeight + videoHeight ||
            scrollY <= 0.5 * bannerHeight
         ) {
            videoRef.current.pause();
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup function to remove event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const handleVideoClick = () => {
      setIsMuted(!isMuted);
   };

   //?

   const handleLogin = () => {
      console.log("LOGIN");
      dispatch(login({}));
   };
   const handleGetUser = () => {
      console.log(userLogin);
   };

   return (
      <Fragment>
         <div className="banner" ref={bannerRef}>
            <div className="banner__bg">
               <div className="banner__bg-eclipse1"></div>
               <div className="banner__bg-eclipse2"></div>
               <div className="banner__bg-eclipse3"></div>
            </div>

            <div className="banner__text">
               <div className="banner__text-top d-flex justify-content-start">
                  <div className="text-stroke">Professional</div>
                  <div className="text-uppercase">Style</div>
               </div>

               <div className="banner__text-bot d-flex justify-content-end">
                  <div className="text-uppercase">Design</div>
                  <div className="text-stroke">Creative</div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Reels --> */}
         <div className="reels">
            <video
               id="video-auto-play"
               src={HomeVideo}
               ref={videoRef}
               muted={isMuted}
               onClick={handleVideoClick}
            ></video>
         </div>
         {/* <!-- End: Reels --> */}

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

            <div className="story__content">
               <div className="label">
                  <div className="label__text">About</div>
                  <div className="label__icon"></div>
               </div>

               <div className="content d-flex justify-content-between flex-column h-100">
                  <div className="content__text">
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. Lorem Ipsum
                        has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.
                     </p>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                     </p>
                  </div>

                  <div className="content__link">
                     <Link className="arrow-right-link" to="/about">
                        <Fragment>
                           <div className="arrow-right-link__text">
                              Go to About
                           </div>
                           <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                        </Fragment>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div className="wrapper wrapper-top wrapper-bottom expertise">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  What will you find at DVP
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Chuyên môn của chúng tôi
               </h1>
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
                                 <h4>Branding</h4>
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
                           <div className="accordion-body">
                              <div
                                 id="carousel-2"
                                 className="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <Image
                                          src={Carousel1}
                                          className=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel3}
                                          className=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="service__content">
                                 <h6>Logo</h6>
                                 <h6>Ấn phẩm văn phòng</h6>
                                 <h6>Broucher, Cataloge</h6>
                                 <h6>Capacity profile - Company profile</h6>
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
                                 <h4>Branding</h4>
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
                           <div className="accordion-body">
                              <div
                                 id="carousel-2"
                                 className="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <Image
                                          src={Carousel1}
                                          className=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="service__content">
                                 <h6>Logo</h6>
                                 <h6>Ấn phẩm văn phòng</h6>
                                 <h6>Broucher, Cataloge</h6>
                                 <h6>Capacity profile - Company profile</h6>
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
                                 <h4>Branding</h4>
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
                           <div className="accordion-body">
                              <div
                                 id="carousel-2"
                                 className="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <Image
                                          src={Carousel1}
                                          className=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel3}
                                          className=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="service__content">
                                 <h6>Logo</h6>
                                 <h6>Ấn phẩm văn phòng</h6>
                                 <h6>Broucher, Cataloge</h6>
                                 <h6>Capacity profile - Company profile</h6>
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
                                 <h4>Branding</h4>
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
                           <div className="accordion-body">
                              <div
                                 id="carousel-2"
                                 className="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <Image
                                          src={Carousel1}
                                          className=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel3}
                                          className=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="service__content">
                                 <h6>Logo</h6>
                                 <h6>Ấn phẩm văn phòng</h6>
                                 <h6>Broucher, Cataloge</h6>
                                 <h6>Capacity profile - Company profile</h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-5">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-5"
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
                                 <h4>Branding</h4>
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
                           id="collapse-service-5"
                           data-bs-parent="#accordion-service-5"
                        >
                           <div className="accordion-body">
                              <div
                                 id="carousel-2"
                                 className="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <Image
                                          src={Carousel1}
                                          className=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel3}
                                          className=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="service__content">
                                 <h6>Logo</h6>
                                 <h6>Ấn phẩm văn phòng</h6>
                                 <h6>Broucher, Cataloge</h6>
                                 <h6>Capacity profile - Company profile</h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="service">
                  <div className="accordion" id="accordion-service-6">
                     <div className="accordion-item border-0">
                        <button
                           className="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-6"
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
                                 <h4>Branding</h4>
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
                           id="collapse-service-6"
                           data-bs-parent="#accordion-service-6"
                        >
                           <div className="accordion-body">
                              <div
                                 id="carousel-2"
                                 className="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       <Image
                                          src={Carousel1}
                                          className=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel2}
                                          className=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div className="carousel-item">
                                       <Image
                                          src={Carousel3}
                                          className=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="service__content">
                                 <h6>Logo</h6>
                                 <h6>Ấn phẩm văn phòng</h6>
                                 <h6>Broucher, Cataloge</h6>
                                 <h6>Capacity profile - Company profile</h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Expertise --> */}

         {/* <!-- Work --> */}
         <div className="wrapper wrapper-top wrapper-bottom work">
            <div className="wrapper__header">
               <h4 className="wrapper__header-sub--heading text-uppercase">
                  Work
               </h4>
               <h1 className="wrapper__header-heading text-capitalize">
                  Dự án
               </h1>
            </div>

            <div className="work__content wrapper-flex">
               <div className="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <Link
                     className="project img-grayscale-hover arrow-right-translate-hover d-block"
                     to="/cataloge"
                  >
                     <Fragment>
                        <div className="img-grayscale">
                           <Image src={Ramen} alt="black and white image" />
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
                           <Image src={Ramen} alt="black and white image" />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit
                              amet, ipsum
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
                           <Image src={Ramen} alt="black and white image" />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              Lorem Ipsum dolor sit amet, text
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
                           <Image src={Ramen} alt="black and white image" />
                        </div>

                        <div className="project__des">
                           <div className="project__des-text">
                              Lorem Ipsum dolor sit amet, text
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

            <div className="work__link d-flex justify-content-center align-items-center">
               <Link className="arrow-right-link" to="/work">
                  <Fragment>
                     <div className="arrow-right-link__text">Go to work</div>
                     <i className="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                  </Fragment>
               </Link>
            </div>
         </div>
         {/* <!-- End: Work --> */}

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
      </Fragment>
   );
};

export default Home;
