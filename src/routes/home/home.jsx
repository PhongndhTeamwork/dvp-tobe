import "./home.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { login } from "../../app/features/userLoginSlice";
import { Fragment } from "react";
import HomeVideo from "../../assets/images/others/video-auto.mp4";

const Home = () => {
   const dispatch = useDispatch();
   const userLogin = useSelector((state) => state.userLogin);
   const { userInfo } = userLogin;

   //?Effect
   const videoRef = useRef(null);
   const bannerRef = useRef(null);
   const [isMuted, setIsMuted] = useState(true);

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
         <div class="banner" ref={bannerRef}>
            <div class="banner__bg">
               <div class="banner__bg-eclipse1"></div>
               <div class="banner__bg-eclipse2"></div>
               <div class="banner__bg-eclipse3"></div>
            </div>

            <div class="banner__text">
               <div class="banner__text-top d-flex justify-content-start">
                  <div class="text-stroke">Professional</div>
                  <div class="text-uppercase">Style</div>
               </div>

               <div class="banner__text-bot d-flex justify-content-end">
                  <div class="text-uppercase">Design</div>
                  <div class="text-stroke">Creative</div>
               </div>
            </div>
         </div>
         {/* <!-- End: Banner --> */}

         {/* <!-- Reels --> */}
         <div class="reels">
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
         <div class="wrapper wrapper-top wrapper-bottom story">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  The story of DVP
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  Câu chuyện về DVP
               </h1>
            </div>

            <div class="story__content">
               <div class="label">
                  <div class="label__text">About</div>
                  <div class="label__icon"></div>
               </div>

               <div class="content d-flex justify-content-between flex-column h-100">
                  <div class="content__text">
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

                  <div class="content__link">
                     <a class="arrow-right-link" href="./about.html">
                        <div class="arrow-right-link__text">Go to About</div>
                        <i class="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- End: Story --> */}

         {/* <!-- Expertise --> */}
         <div class="wrapper wrapper-top wrapper-bottom expertise">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">
                  What will you find at DVP
               </h4>
               <h1 class="wrapper__header-heading text-capitalize">
                  Chuyên môn của chúng tôi
               </h1>
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
                                 <h4>Branding</h4>
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
                           <div class="accordion-body">
                              <div
                                 id="carousel-2"
                                 class="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div class="carousel-inner">
                                    <div class="carousel-item active">
                                       <img
                                          src="./assets/img/carousel/carousel-1.png"
                                          class=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-2.png"
                                          class=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-3.png"
                                          class=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div class="service__content">
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
                                 <h4>Branding</h4>
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
                           <div class="accordion-body">
                              <div
                                 id="carousel-2"
                                 class="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div class="carousel-inner">
                                    <div class="carousel-item active">
                                       <img
                                          src="./assets/img/carousel/carousel-1.png"
                                          class=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-2.png"
                                          class=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-3.png"
                                          class=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div class="service__content">
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
                                 <h4>Branding</h4>
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
                           <div class="accordion-body">
                              <div
                                 id="carousel-2"
                                 class="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div class="carousel-inner">
                                    <div class="carousel-item active">
                                       <img
                                          src="./assets/img/carousel/carousel-1.png"
                                          class=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-2.png"
                                          class=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-3.png"
                                          class=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div class="service__content">
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
                                 <h4>Branding</h4>
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
                           <div class="accordion-body">
                              <div
                                 id="carousel-2"
                                 class="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div class="carousel-inner">
                                    <div class="carousel-item active">
                                       <img
                                          src="./assets/img/carousel/carousel-1.png"
                                          class=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-2.png"
                                          class=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-3.png"
                                          class=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div class="service__content">
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

               <div class="service">
                  <div class="accordion" id="accordion-service-5">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-5"
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
                                 <h4>Branding</h4>
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
                           id="collapse-service-5"
                           data-bs-parent="#accordion-service-5"
                        >
                           <div class="accordion-body">
                              <div
                                 id="carousel-2"
                                 class="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div class="carousel-inner">
                                    <div class="carousel-item active">
                                       <img
                                          src="./assets/img/carousel/carousel-1.png"
                                          class=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-2.png"
                                          class=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-3.png"
                                          class=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div class="service__content">
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

               <div class="service">
                  <div class="accordion" id="accordion-service-6">
                     <div class="accordion-item border-0">
                        <button
                           class="accordion-button"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#collapse-service-6"
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
                                 <h4>Branding</h4>
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
                           id="collapse-service-6"
                           data-bs-parent="#accordion-service-6"
                        >
                           <div class="accordion-body">
                              <div
                                 id="carousel-2"
                                 class="carousel slide touch"
                                 data-bs-ride="carousel"
                                 data-bs-interval="1500"
                                 data-bs-touch="true"
                              >
                                 <div class="carousel-inner">
                                    <div class="carousel-item active">
                                       <img
                                          src="./assets/img/carousel/carousel-1.png"
                                          class=""
                                          alt="carousel-img-1"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-2.png"
                                          class=""
                                          alt="carousel-img-2"
                                       />
                                    </div>
                                    <div class="carousel-item">
                                       <img
                                          src="./assets/img/carousel/carousel-3.png"
                                          class=""
                                          alt="carousel-img-3"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div class="service__content">
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
         <div class="wrapper wrapper-top wrapper-bottom work">
            <div class="wrapper__header">
               <h4 class="wrapper__header-sub--heading text-uppercase">Work</h4>
               <h1 class="wrapper__header-heading text-capitalize">Dự án</h1>
            </div>

            <div class="work__content wrapper-flex">
               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <a
                     class="project img-grayscale-hover arrow-right-translate-hover d-block"
                     href="./cataloge.html"
                  >
                     <div class="img-grayscale">
                        <img
                           src="./assets/img/others/ramen.png"
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
                  </a>
               </div>

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <a
                     class="project img-grayscale-hover arrow-right-translate-hover d-block"
                     href="./cataloge.html"
                  >
                     <div class="img-grayscale">
                        <img
                           src="./assets/img/others/ramen.png"
                           alt="black and white image"
                        />
                     </div>

                     <div class="project__des">
                        <div class="project__des-text">
                           Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit
                           amet, ipsum
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

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <a
                     class="project img-grayscale-hover arrow-right-translate-hover d-block"
                     href="./cataloge.html"
                  >
                     <div class="img-grayscale">
                        <img
                           src="./assets/img/others/ramen.png"
                           alt="black and white image"
                        />
                     </div>

                     <div class="project__des">
                        <div class="project__des-text">
                           Lorem Ipsum dolor sit amet, text
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

               <div class="rectangle-100 rectangle-tab-50 rectangle-pc-25">
                  <a
                     class="project img-grayscale-hover arrow-right-translate-hover d-block"
                     href="./cataloge.html"
                  >
                     <div class="img-grayscale">
                        <img
                           src="./assets/img/others/ramen.png"
                           alt="black and white image"
                        />
                     </div>

                     <div class="project__des">
                        <div class="project__des-text">
                           Lorem Ipsum dolor sit amet, text
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

            <div class="work__link d-flex justify-content-center align-items-center">
               <a class="arrow-right-link" href="./work.html">
                  <div class="arrow-right-link__text">Go to work</div>
                  <i class="arrow-right-link__icon fa-solid fa-arrow-right-long"></i>
               </a>
            </div>
         </div>
         {/* <!-- End: Work --> */}

         {/* <!-- Partners --> */}
         <div class="partners">
            <div class="wrapper">
               <div class="scroll-wrapper">
                  <div class="scroll-wrapper__content align-items-start">
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-01.svg"
                           alt="partner-01"
                        />
                        <img
                           src="./assets/img/svg/partner/Untitled-1-02.svg"
                           alt="partner-02"
                        />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-03.svg"
                           alt="partner-03"
                        />
                        <img
                           src="./assets/img/svg/partner/Untitled-1-04.svg"
                           alt="partner-04"
                        />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-05.svg"
                           alt="partner-05"
                        />
                        <img
                           src="./assets/img/svg/partner/Untitled-1-06.svg"
                           alt="partner-06"
                        />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-07.svg"
                           alt="partner-07"
                        />
                        <img
                           src="./assets/img/svg/partner/Untitled-1-08.svg"
                           alt="partner-08"
                        />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-09.svg"
                           alt="partner-09"
                        />
                        <img
                           src="./assets/img/svg/partner/Untitled-1-10.svg"
                           alt="partner-10"
                        />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-11.svg"
                           alt="partner-11"
                        />
                        <img
                           src="./assets/img/svg/partner/Untitled-1-12.svg"
                           alt="partner-12"
                        />
                     </div>
                     <div class="scroll-wrapper__content-item d-flex">
                        <img
                           src="./assets/img/svg/partner/Untitled-1-14.svg"
                           alt="partner-14"
                        />
                     </div>
                  </div>
               </div>

               <div class="dosts">
                  <div class="dot active"></div>
                  <div class="dot"></div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Home;
